//
//  MenuBaseViewController.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

class MenuBaseViewController: UITableViewController {

    static let sectionHeight: CGFloat = 44
    static let borderHeight: CGFloat = 1
    static let borderColor: UIColor = RawColors.gray5
    static let horizontalPadding: CGFloat = 16
    static let verticalPadding: CGFloat = 16

    var orientation: UIDeviceOrientation = UIDevice.current.orientation

    public struct Section {
        var name: String
        var items: [DemoPageType]
    }

    var options: [Section]!

    override func viewDidLoad() {
        super.viewDidLoad()

        tableView.dataSource = self
        tableView.delegate = self

        tableView.register(UITableViewHeaderFooterView.self, forHeaderFooterViewReuseIdentifier: "header")
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "Default")
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        NotificationCenter.default.addObserver(self, selector: #selector(deviceRotated), name: UIDevice.orientationDidChangeNotification, object: nil)
    }

    override func viewWillDisappear(_ animated: Bool) {
        NotificationCenter.default.removeObserver(self, name: UIDevice.orientationDidChangeNotification, object: nil)
        super.viewWillAppear(animated)
    }

    @objc func deviceRotated() {
        if  orientation != UIDevice.current.orientation {
            orientation = UIDevice.current.orientation
            if tableView != nil {
                tableView.reloadData()
            }
        }
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Default", for: indexPath)
        let viewControllerID = options[indexPath.section].items[indexPath.row].rawValue
        let title = NSLocalizedString("menuItemName." + viewControllerID, comment: "")

        cell.backgroundColor = UIColor(named: "demoTableViewCellBackground")
        cell.textLabel?.textColor = UIColor(named: "demoLabelText")

        cell.textLabel?.text = title
        cell.selectionStyle = .default
        cell.isUserInteractionEnabled = true
        cell.textLabel?.isEnabled = true
        cell.textLabel?.font = UIFont.systemFont(ofSize: 17)
        cell.textLabel?.textAlignment = .left
        cell.accessoryType = .disclosureIndicator

        return cell
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        let storyboard  = UIStoryboard(name: "Main", bundle: nil)
        let viewControllerID = options[indexPath.section].items[indexPath.row].rawValue
        let controller: UIViewController = storyboard.instantiateViewController(withIdentifier: viewControllerID)
        controller.navigationItem.title = viewControllerID.capitalized
            self.show(controller, sender: self)
//        }
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        return options.count
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return options[section].items.count
    }

    override func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return MenuBaseViewController.sectionHeight
    }

    func sectionCount( _ section: Section ) -> Int {
        return section.items.count
    }

    override func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let header = tableView.dequeueReusableHeaderFooterView(withIdentifier: "header") ?? UITableViewHeaderFooterView(reuseIdentifier: "header")

        header.contentView.subviews.forEach { (view) in
            view.removeFromSuperview()
        }

        // fixed warning - Setting the background color on UITableViewHeaderFooterView has been deprecated.
        header.backgroundView = UIView(frame: header.bounds)

        header.backgroundView?.backgroundColor = UIColor(named: "demoTableHeaderBackground")

        let tableSection = options[section]
        addLabelToHeaderContentView(section, header.contentView)

        if section != 0 {
            header.contentView.addTopBorder(height: MenuBaseViewController.borderHeight, color: MenuBaseViewController.borderColor)
        }

        if !tableSection.items.isEmpty {
            header.contentView.addBottomBorder(height: MenuBaseViewController.borderHeight, color: MenuBaseViewController.borderColor)
        }
        return header
    }

    func addLabelToHeaderContentView(_ section: Int, _ contentView: UIView) {
        let label: UILabel = UILabel()
        label.text = NSLocalizedString("menuItemName." + options[section].name, comment: "")
        label.textColor = RawColors.gray2

        label.numberOfLines = 0
        label.textAlignment = .natural
        label.lineBreakMode = NSLineBreakMode.byWordWrapping
        label.font = UIFont.systemFont(ofSize: 13)
        label.isEnabled = false

        label.autoresizingMask = [.flexibleHeight]

        contentView.addSubview(label)

        label.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            label.topAnchor.constraint(equalTo: contentView.topAnchor, constant: TableViewCellBaseViewController.verticalPadding),
            label.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: TableViewCellBaseViewController.horizontalPadding)
        ])
    }
}
