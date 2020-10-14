//
//  TableViewCell.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

/**
 TableViewCell is a UITableViewCell derived class supporting design data specified appearance for its contentView and any control in its accessoryView.
 */
@IBDesignable
open class TableViewCell: UITableViewCell {
    
    /**
     When a new product theme is set, updates componentDesignData and redraw the component based on the new design data.
     
     This is also called from the nearest parent view that implemented the DesignDataProtocol when its productTheme is changed and the subviews do not have the productTheme set.
     */
    open func updateDesignDataAttributes() {
        update()
    }
    
    // MARK: - TableViewCell Properties
    
    /**
     Color of the textLabel text.
     */
    public var textLabelTextColor: UIColor? {
        didSet {
            if textLabelTextColor != oldValue {
                update()
            }
        }
    }
    
    /**
     Font of the textLabel.
     */
    public var textLabelFont: UIFont? {
        didSet {
            if textLabelFont != oldValue {
                update()
            }
        }
    }
    
    /**
     Component source code version.
     */
    open var componentSourceVersion: String { return "1.0.0" }
    
    /**
     Overrides isUserInteractionEnables to support disabled cell's appearance.
     */
    override open var isUserInteractionEnabled: Bool {
        didSet { didSetIsUserInteractionEnabled() }
    }
    
    // MARK: - TableViewCell Methods
    
    /**
     Updates the component. This method is also called after component design data has been updated.
     */
    open func update() {
        self.tintColor = glyphDefaultColor
        
        //        textLabel?.font = textLabelFont ?? designDataFont( fontDescription: DDFontDescription(fontName: choiceTextDefaultFont, fontStyle: choiceTextDefaultFontStyle, fontSize: choiceTextDefaultFontSize, fontWeight: choiceTextDefaultFontWeight ))
        
        textLabel?.textColor = textLabelTextColor ?? TableViewCell.defaultChoiceTextDefaultColor
        contentView.superview?.backgroundColor = TableViewCell.defaultBackgroundDefaultColor
        
        didSetIsUserInteractionEnabled()
    }
    
    // MARK: - UITableViewCell Properties
    
    /**
     Overrides accessoryView to support disabled accessoryView appearance.
     */
    override open var accessoryView: UIView? {
        didSet {
            if let accessoryControl = accessoryView as? UIControl {
                accessoryControl.isEnabled = isUserInteractionEnabled
            }
        }
    }
    
    // MARK: - UITableViewCell Methods
    
    /**
     TableViewCell initializer for Interface Builder.  Note that only .default style is supported for TableViewCell.
     */
    override public init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .default, reuseIdentifier: reuseIdentifier)
    }
    
    /**
      Component initializer for Interface Builder.
     */
    public required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    
    // MARK: - UIView Methods
    
    /**
     Tells the view that its superview changed.  Updates design data accordingly.
     */
    override open func didMoveToSuperview() {
        super.didMoveToSuperview()
        if superview != nil {
            updateDesignDataAttributes()
        }
    }
    
    /**
     Updates design data when trait collection did change.
     */
    override open func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        
        updateDesignDataAttributes()
    }
    
    // MARK: - *************************** End Public API ************************
    
    static let defaultChoiceTextFont: String = "System"
    static let defaultChoiceTextFontSize: CGFloat = 17.0
    static let defaultChoiceTextFontStyle: String = "normal"
    static let defaultChoiceTextFontWeight: UIFont.Weight = .regular
    
    static let defaultChoiceTextDefaultColor: UIColor = UIColor(hexString: "000000")
    static let defaultChoiceTextDisabledColor: UIColor = UIColor(hexString: "BABEC5")
    static let defaultBackgroundDefaultColor: UIColor = UIColor(hexString: "FFFFFF")
    static let defaultGlyphDisabledColor: UIColor = UIColor.init(hexString: "#BABEC5")
    static let defaultGlyphDefaultColor: UIColor = UIColor.init(hexString: "0077C5")
    static let defaultGroupDefaultOpacity: CGFloat = 1.0
    static let defaultGroupDisabledOpacity: CGFloat = 0.4
    
    var glyphDisabledColor: UIColor { return TableViewCell.defaultGlyphDisabledColor }
    var glyphDefaultColor: UIColor { return TableViewCell.defaultGlyphDefaultColor }
    var choiceTextDefaultFont: String { return TableViewCell.defaultChoiceTextFont }
    var choiceTextDefaultFontSize: CGFloat { return TableViewCell.defaultChoiceTextFontSize }
    var choiceTextDefaultFontStyle: String { return TableViewCell.defaultChoiceTextFontStyle }
    var choiceTextDefaultFontWeight: UIFont.Weight { TableViewCell.defaultChoiceTextFontWeight }
    
    /**
     Updates the cell's appearance for the current value of isUserInteractionEnabled.  If we have a UIControl accessory, sets its isEnabled property to match isUserInteractionEnabled.
     */
    func didSetIsUserInteractionEnabled() {
        var alpha: CGFloat
        if isUserInteractionEnabled {
            alpha = TableViewCell.defaultGroupDefaultOpacity
            tintColor = glyphDefaultColor.withAlphaComponent(alpha)
        } else {
            alpha = TableViewCell.defaultGroupDisabledOpacity
            tintColor = glyphDisabledColor.withAlphaComponent(alpha)
        }
        textLabel?.alpha = alpha
        
        if let accessoryControl = accessoryView as? UIControl {
            accessoryControl.isEnabled = isUserInteractionEnabled
        }
    }
}
