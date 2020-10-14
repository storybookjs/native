//
//  TableViewCellBaseViewController.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

class TableViewCellBaseViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    // MARK: - Properties
    static let sectionHeight: CGFloat = 44
    static let instructionHeight: CGFloat = 66
    static let errorMessageHeight: CGFloat = 36
    
    static let rowHeight: CGFloat = 44
    
    static let horizontalPadding: CGFloat = 16
    static let verticalPadding: CGFloat = 16
    static let errorVerticalPadding: CGFloat = 8
    
    static let borderHeight: CGFloat = 1
    static let borderColor: UIColor = RawColors.gray5
    
    public enum AccessoryType: Int {
        case none = 0, switchAccessory, checkmarkAccessory, textField
    }
    
    public enum SectionType: Int {
        case normal = 0, instruction, errorMessage
    }
    
    public struct Item {
        var name: String
        var tag: Int
        var accessoryType: AccessoryType
        var selected: Bool
    }
    
    public struct Section {
        var name: String
        var sectionType: SectionType
        var enabled: Bool
        var show: Bool
        var items: [Item]
    }
    
    var tableViewCellOptions: [Section]!
    var tableView: UITableView!
    var orientation: UIDeviceOrientation = UIDevice.current.orientation
    var scaleFont: Bool = false
    
    // MARK: - UIViewController functions
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        tableView.dataSource = self
        tableView.delegate = self
        
        tableView.rowHeight = UITableView.automaticDimension
        tableView.sectionHeaderHeight = UITableView.automaticDimension
        tableView.tableFooterView = UIView()
        
        tableView.register(UITableViewHeaderFooterView.self, forHeaderFooterViewReuseIdentifier: "header")
        tableView.register(TableViewCell.self, forCellReuseIdentifier: "cell")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        NotificationCenter.default.addObserver(self, selector: #selector(deviceRotated), name: UIDevice.orientationDidChangeNotification, object: nil)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        NotificationCenter.default.removeObserver(self, name: UIDevice.orientationDidChangeNotification, object: nil)
        super.viewWillDisappear(animated)
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        if tableView != nil {
            tableView.reloadData()
        }
    }
    
    @objc func deviceRotated() {
        if  orientation != UIDevice.current.orientation {
            orientation = UIDevice.current.orientation
            if tableView != nil {
                tableView.reloadData()
            }
        }
    }
    
    // MARK: - TableView functions
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableViewCellOptions[section].items.count
    }
    
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return sectionHeight(section)
    }
    
    func sectionHeight(_ section: Int) -> CGFloat {
        var height: CGFloat = 0
        if  !tableViewCellOptions[section].show {
            height = 0
        }
                
        height = TableViewCellBaseViewController.sectionHeight
        return height
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let header = tableView.dequeueReusableHeaderFooterView(withIdentifier: "header") ?? UITableViewHeaderFooterView(reuseIdentifier: "header")
        
        header.contentView.subviews.forEach { (view) in
            view.removeFromSuperview()
        }
        
        let tableSection = tableViewCellOptions[section]
        
        if tableSection.sectionType == .errorMessage {
            addInlineValidationMessage(section, header.contentView)
        } else {
            addLabelToHeaderContentView(section, header.contentView)
        }
        
        _ = header.contentView.addTopBorder(height: TableViewCellBaseViewController.borderHeight, color: TableViewCellBaseViewController.borderColor)
        if !tableSection.items.isEmpty {
            _ = header.contentView.addBottomBorder(height: TableViewCellBaseViewController.borderHeight, color: TableViewCellBaseViewController.borderColor)
        }
        return header
    }
    
    func addInlineValidationMessage(_ section: Int, _ contentView: UIView) {
       
    }
    
    func addLabelToHeaderContentView(_ section: Int, _ contentView: UIView) {
        let label: UILabel = UILabel()
        let tableSection = tableViewCellOptions[section]
        
        label.text = tableSection.name
        label.textColor = UIColor(named: "demoLabelText")
        
        label.numberOfLines = 0
        label.textAlignment = .natural
        label.lineBreakMode = NSLineBreakMode.byWordWrapping
        label.font = tableSection.sectionType == .instruction ? UIFont.systemFont(ofSize: 15) : UIFont.systemFont(ofSize: 13)
        
        label.isEnabled = tableSection.sectionType == .instruction ? true : false
        
        label.autoresizingMask = [.flexibleHeight]
        
        contentView.addSubview(label)
        
        label.translatesAutoresizingMaskIntoConstraints = false
        
        let widthConstraint = label.widthAnchor.constraint(equalToConstant: tableView.bounds.size.width -  TableViewCellBaseViewController.horizontalPadding)
        widthConstraint.priority = .required-1
        
        NSLayoutConstraint.activate([
            label.topAnchor.constraint(equalTo: contentView.topAnchor, constant: TableViewCellBaseViewController.verticalPadding),
            label.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: TableViewCellBaseViewController.horizontalPadding),
            widthConstraint
        ])
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell: TableViewCell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! TableViewCell
        
        cell.accessoryView?.removeFromSuperview()
        cell.accessoryView = nil
        cell.accessoryType = .none
        cell.separatorInset = UIEdgeInsets.init(top: 0, left: 15, bottom: 0, right: 0)
        cell.contentView.subviews.forEach { (view) in
            view.removeFromSuperview()
        }
        
        cell.textLabel?.text = nil
        
        let enabled = tableViewCellOptions[indexPath.section].enabled
        let items = tableViewCellOptions[indexPath.section].items
        let item = items[indexPath.row]
        
        cell.textLabel?.numberOfLines = 0
        if item.accessoryType != .textField {
            cell.textLabel?.text = item.name
        }
        cell.isUserInteractionEnabled = enabled ? true : false
        cell.selectionStyle = .default
        cell.accessoryType = .none
     
        
        cell.backgroundColor = UIColor(named: "demoTableViewCellBackground")
        cell.textLabel?.textColor = UIColor(named: "demoLabelText")
        
        cell.textLabel?.isEnabled = true
        if !scaleFont {
            cell.textLabelFont = UIFont.systemFont(ofSize: 17)
        }
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let section = tableViewCellOptions[indexPath.section]
        var item = section.items[indexPath.row]
        item.selected = true
        
        if item.accessoryType == .checkmarkAccessory {
            updateSelectedStatus(section: section, item: item)
        }
    }
    
    func updateSelectedStatus(section: Section, item: Item) {
        // update selected status for each item within the same group
        if let row = tableViewCellOptions.firstIndex(where: {$0.name == section.name}) {
            for (index, _) in tableViewCellOptions[row].items.enumerated() {
                tableViewCellOptions[row].items[index].selected =  tableViewCellOptions[row].items[index].name == item.name ? item.selected : !item.selected
            }
        }
        tableView.reloadData()
    }
    
    @objc func accessorySwitchChanged(sender: UISwitch) {
        // find the switch where it belongs and update the selected status
        for (row, _) in tableViewCellOptions.enumerated() {
            for (index, _) in tableViewCellOptions[row].items.enumerated() {
                if ( tableViewCellOptions[row].items[index].accessoryType == .switchAccessory ) &&
                    ( tableViewCellOptions[row].items[index].tag == sender.tag ) {
                    tableViewCellOptions[row].items[index].selected = sender.isOn
                    break
                }
            }
        }
    }
    
    func setAllItems(selected: Bool) {
        // find the switch where it belongs and update the selected status
        for (row, _) in tableViewCellOptions.enumerated() {
            for (index, _) in tableViewCellOptions[row].items.enumerated() {
                tableViewCellOptions[row].items[index].selected = selected
            }
        }
        tableView.reloadData()
    }
    
    func anyRowSelectedInSection(_ section: Section ) -> Bool {
        var selected = false
        
        if let row = tableViewCellOptions.firstIndex(where: {$0.name == section.name}) {
            for (index, _) in tableViewCellOptions[row].items.enumerated() {
                if tableViewCellOptions[row].items[index].selected {
                    selected = true
                    break
                }
            }
        }
        return selected
    }
    
    func reloadDataAndScrollToBottom() {
        UIView.animate(withDuration: 0.3, animations: {
            self.tableView.reloadData()
        }) { (_: Bool) in
            self.scrollToBottom()
        }
    }
    
    func scrollToBottom() {
        var yOffset: CGFloat = 0
        
        if self.tableView.contentSize.height > self.tableView.bounds.size.height {
            yOffset = self.tableView.contentSize.height - self.tableView.bounds.size.height
        }
        self.tableView.contentOffset = CGPoint(x: 0, y: yOffset)
    }
    
    func itemSelected(_ sectionName: String, _ itemName: String ) -> Bool {
        var selected: Bool = false
        
        if let row = tableViewCellOptions.firstIndex(where: {$0.name == sectionName}) {
            for (index, _) in tableViewCellOptions[row].items.enumerated() {
                if tableViewCellOptions[row].items[index].name == itemName && tableViewCellOptions[row].items[index].selected {
                    selected = true
                }
            }
        }
        return selected
    }
}
