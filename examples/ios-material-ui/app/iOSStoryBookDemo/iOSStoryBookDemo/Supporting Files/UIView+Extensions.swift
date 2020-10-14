//
//  UIView+Extensions.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

/**
 UIView extensions.
 */
public extension UIView {
    
    enum AccessibilityIdentifier: String {
        case mainView
        case contentView
        case floatingLabel
        case label
        case textField
        case textView
        case lineView
        case helpLabel
        case errorWarningView
        case placeholderLabel
        case pickerLabel
    }
    
    internal var accessibilityID: UIView.AccessibilityIdentifier? {
        get { return (self as UIAccessibilityIdentification).accessibilityIdentifier.flatMap({ UIView.AccessibilityIdentifier(rawValue: $0) }) }
        set { (self as UIAccessibilityIdentification).accessibilityIdentifier = newValue?.rawValue }
    }
    
    /**
     Animates a label smoothly from it's current position to the specified color, font, and frame.
     
     - Parameters:
     - label: UILabel target.
     - destinationColor: UIColor at the end of animation.
     - destinationFontSize: CGFloat font size at the end of animation.
     - destinationFrame: CGRect location at the end of animation.
     */
    func animateLabel(_ label: UILabel,
                      toColor destinationColor: UIColor,
                      fontSize destinationFontSize: CGFloat,
                      frame destinationFrame: CGRect) {
        #if !TARGET_INTERFACE_BUILDER
        // Use CATextLayer animation only when there is a change in frame or font size.
        if destinationFrame != label.frame || destinationFontSize != label.font.pointSize {
            var sourceFrame = label.frame
            sourceFrame.size.width = max(sourceFrame.width, destinationFrame.width)
            sourceFrame.size.height = max(sourceFrame.height, destinationFrame.height)
            
            let textLayer = CATextLayer()
            
            textLayer.anchorPoint = .zero
            textLayer.alignmentMode = label.textAlignment == .right ? .right : .natural
            textLayer.foregroundColor = label.textColor.cgColor
            textLayer.frame = sourceFrame
            textLayer.font = label.font
            textLayer.fontSize = label.font.pointSize
            textLayer.isWrapped = true
            textLayer.string = label.text
            
            layer.addSublayer(textLayer)
            
            // Hide label now and show it when the animation finishes.
            label.isHidden = true
            
            withAnimationTransaction(
                duration: CATransaction.animationDuration() / TimeInterval(layer.speed),
                animations: {
                    // Animate font size.
                    textLayer.update(keyPath: #keyPath(CATextLayer.fontSize), to: destinationFontSize, animated: true)
                    // Animate frame.
                    textLayer.update(keyPath: #keyPath(CALayer.position), to: CGPoint(x: destinationFrame.minX, y: destinationFrame.minY))
                    // Animate Font color.
                    textLayer.update(keyPath: #keyPath(CATextLayer.foregroundColor), to: destinationColor.cgColor)
            },
                completion: {
                    label.font = label.font.withSize(destinationFontSize)
                    label.textColor = destinationColor
                    label.frame = destinationFrame
                    label.isHidden = false
                    textLayer.removeFromSuperlayer()
            }
            )
        } else if label.textColor != destinationColor {
            // For color only animation just use a simple animation which avoids a subtle blurring.
            UIView.animate(withDuration: CATransaction.animationDuration() / TimeInterval(layer.speed)) {
                label.textColor = destinationColor
            }
        }
        #endif
    }
    

    
    /**
     Rounds the specified corners of this view to the specified radius.
     
     - Parameter radius:  The radius of the circular section to which corners are rounded.
     
     NOTE: If this view has layout constraints attached to it the corner radius must be refreshed by overriding the layoutSubviews method
     as in the following example:
     
     ex.
     func layoutSubviews() {
     super.layoutSubviews()
     roundCorners(corners: [.topLeft, .topRight], radius: 10.0)
     }
     */
    func roundCorners(corners: UIRectCorner, radius: CGFloat) {
        let path = UIBezierPath(roundedRect: bounds, byRoundingCorners: corners, cornerRadii: CGSize(width: radius, height: radius))
        let mask = CAShapeLayer()
        mask.path = path.cgPath
        layer.mask = mask
    }
    
    /**
     Gets the first view with a specific type from subviews.
     
     - Returns: A UIView.
     */
    func getViewWithType<T>(type: T.Type) -> T? {
        return subviews.filter {$0 is T} [0] as? T
    }
    
    /**
     Set translatesAutoresizingMaskIntoConstraints false, asserts if the view does not have a superview  returns the view's superview.
     Note that assert is supported in development builds only.  In production buildls assert does nothing and this func could return nil.
     
     - Returns: self.superview and sets self.translatesAutoresizingMaskIntoConstraints to false.
     */
    @discardableResult
    func initForConstraintsAssertSuperview() -> UIView {
        self.translatesAutoresizingMaskIntoConstraints = false
        assert(self.superview != nil, "Internal Error: Attempt to constrain to nil superview.")
        return self.superview!
    }
    
    /**
     Creates, adds and returns a constraint between the view's specified attribute and the specified attribute of it's superview with the specified relation, constant, & multiplier.
     
     - Returns: The constraint that was created and added to self.superview as a discardable result.
     */
    @discardableResult
    func constraintToSuperview( attribute: NSLayoutConstraint.Attribute,
                                relation: NSLayoutConstraint.Relation = .equal,
                                superviewAttribute: NSLayoutConstraint.Attribute,
                                constant: CGFloat = 0.0,
                                multiplier: CGFloat = 1.0 ) -> NSLayoutConstraint {
        
        let superview = initForConstraintsAssertSuperview()
        let constraint = NSLayoutConstraint(item: self,
                                            attribute: attribute,
                                            relatedBy: relation,
                                            toItem: superview,
                                            attribute: superviewAttribute,
                                            multiplier: multiplier,
                                            constant: constant)
        constraint.isActive = true
        
        return constraint
    }
    
    /**
     Creates, adds and returns a constraint between the view's specified attribute and the corresponding attribute of it's superview with the specified relation, offset, & multiplier.
     
     - Returns: The constraint that was created and added to self.superview as a discardable result.
     */
    @discardableResult
    func correspondingConstraintToSuperview( attribute: NSLayoutConstraint.Attribute, relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0, multiplier: CGFloat = 1.0 ) -> NSLayoutConstraint {
        
        let constraint = constraintToSuperview(attribute: attribute,
                                               relation: relation,
                                               superviewAttribute: attribute,
                                               constant: offset,
                                               multiplier: multiplier)
        return constraint
    }
    
    /**
     Creates, adds and returns a constraint between the view's top edge and the top edge of it's superview with the specified relation & offset.
     
     - Returns: The constraint that was created and added to self.superview as a discardable result.
     */
    @discardableResult
    func topConstraintToSuperview(relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0) -> NSLayoutConstraint {
        
        let constraint = correspondingConstraintToSuperview( attribute: .top, relation: relation, offset: offset )
        
        return constraint
    }
    
    /**
     Creates, adds and returns a constraint between the view's left edge and the left edge of it's superview with the specified relation & offset.
     
     - Returns: The constraint that was created and added to self.superview as a discardable result.
     */
    @discardableResult
    func leftConstraintToSuperview(relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0) -> NSLayoutConstraint {
        
        let constraint = correspondingConstraintToSuperview( attribute: .left, relation: relation, offset: offset )
        
        return constraint
    }
    
    /**
     Creates, adds and returns a constraint between the view's bottom edge and the bottom edge of it's superview with the specified relation & offset.
     
     - Returns: The constraint that was created and added to self.superview as a discardable result.
     */
    @discardableResult
    func bottomConstraintToSuperview(relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0) -> NSLayoutConstraint {
        
        let constraint = correspondingConstraintToSuperview( attribute: .bottom, relation: relation, offset: offset )
        
        return constraint
    }
    
    /**
     Creates, adds and returns a constraint between the view's right edge and the right edge of it's superview with the specified relation & offset.
     
     - Returns: The constraint that was created and added to self.superview as a discardable result.
     */
    @discardableResult
    func rightConstraintToSuperview(relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0) -> NSLayoutConstraint {
        
        let constraint = correspondingConstraintToSuperview( attribute: .right, relation: relation, offset: offset )
        
        return constraint
    }
    
    /**
     Creates, adds and returns constraints between the view's edges and the corresponding edges of it's superview with optional given offsets.  A nil inset adds no constraint for that edge.
     
     - Returns: An array containing the constraints that were created and added to self.superview as a discardable result.
     */
    @discardableResult
    func edgeOffsetConstraintsToSuperview(top: CGFloat? = nil, topRelation: NSLayoutConstraint.Relation = .equal,
                                          left: CGFloat? = nil, leftRelation: NSLayoutConstraint.Relation = .equal,
                                          bottom: CGFloat? = nil, bottomRelation: NSLayoutConstraint.Relation = .equal,
                                          right: CGFloat? = nil, rightRelation: NSLayoutConstraint.Relation = .equal) -> [NSLayoutConstraint] {
        
        var constraints = [NSLayoutConstraint].init()
        
        if let topOffset = top {
            let constraint = topConstraintToSuperview( relation: topRelation, offset: topOffset )
            constraints.append(constraint)
        }
        
        if let leftOffset = left {
            let constraint = leftConstraintToSuperview( relation: leftRelation, offset: leftOffset )
            constraints.append(constraint)
        }
        
        if let bottomOffset = bottom {
            let constraint = bottomConstraintToSuperview( relation: bottomRelation, offset: bottomOffset )
            constraints.append(constraint)
        }
        
        if let rightOffset = right {
            let constraint = rightConstraintToSuperview( relation: rightRelation, offset: rightOffset )
            constraints.append(constraint)
        }
        
        return constraints
    }
    
    /**
     Creates, adds and returns constraints tieing the view's edges to the edges of it's superview.
     
     - Returns: An array containing the constraints that were created and added to self.superview as a discardable result.
     */
    @discardableResult
    func edgeConstraintsToSuperview() -> [NSLayoutConstraint] {
        
        let constraints = edgeOffsetConstraintsToSuperview(top: 0.00, left: 0.0, bottom: 0.0, right: 0.0)
        
        return constraints
    }
    
    /**
     Creates, adds and returns a constraint between the view's vertical center and the vertical center of it's superview with the specified relation & offset.
     
     - Returns: An array containing the constraints that were created and added to self.superview as a discardable result.
     */
    @discardableResult
    func centerYConstraintToSuperview(relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0) -> NSLayoutConstraint {
        
        let constraint = correspondingConstraintToSuperview( attribute: .centerY, relation: relation, offset: offset )
        
        return constraint
    }
    
    /**
     Creates, adds and returns a constraint between the view's horizontal center and the horizontal center of it's superview with the specified relation & offset.
     
     - Returns: An array containing the constraints that were created and added to self.superview as a discardable result.
     */
    @discardableResult
    func centerXConstraintToSuperview(relation: NSLayoutConstraint.Relation = .equal, offset: CGFloat = 0.0) -> NSLayoutConstraint {
        
        let constraint = correspondingConstraintToSuperview( attribute: .centerX, relation: relation, offset: offset )
        
        return constraint
    }
    
    /**
     Creates, adds and returns constraints between the view's center and the center of it's superview.
     
     - Returns: An array containing the constraints that were created and added to self.superview as a discardable result.
     */
    @discardableResult
    func centerConstraintsToSuperview() -> [NSLayoutConstraint] {
        
        var constraints = [NSLayoutConstraint].init()
        
        let xConstraint = centerXConstraintToSuperview()
        constraints.append(xConstraint)
        
        let yConstraint = centerYConstraintToSuperview()
        constraints.append(yConstraint)
        
        return constraints
    }
    
    /**
     Creates, adds and returns constraints setting the view's size to that of it's superview
     */
    @discardableResult
    func sizeConstraintsMatchingSuperview() -> [NSLayoutConstraint] {
        
        var constraints = [NSLayoutConstraint].init()
        
        let heightConstraint = correspondingConstraintToSuperview(attribute: .height)
        constraints.append(heightConstraint)
        
        let widthConstraint = correspondingConstraintToSuperview(attribute: .width)
        constraints.append(widthConstraint)
        
        return constraints
    }
    
    /**
     Adds border to the top of the view.
     
     - Parameter height: height of the border.
     - Parameter color: color of the border.
     
     - Returns: The new subview added as top border as a discardable result.
     */
    @discardableResult
    func addTopBorder(height: CGFloat, color: UIColor) -> UIView {
        let border = initBorder(height: height, color: color)
        border.topAnchor.constraint(equalTo: topAnchor).isActive = true
        return border
    }
    
    /**
     Adds border to the bottom of the view.
     
     - Parameter height: height of the border.
     - Parameter color: color of the border.
     
     - Returns: The new subview added as bottom border as a discardable result.
     */
    @discardableResult
    func addBottomBorder(height: CGFloat, color: UIColor) -> UIView {
        let border = initBorder(height: height, color: color)
        border.bottomAnchor.constraint(equalTo: bottomAnchor).isActive = true
        return border
    }
    
    /** An internal function of common code factored out of addTopBorder() and addBottomBorder(); it is used by them both.
     
     - Parameter height: height of the border.
     - Parameter color: color of the border.
     
     - Returns: The new subview added as bottom border as a discardable result.
     */
    private func initBorder(height: CGFloat, color: UIColor) -> UIView {
        let border = UIView()
        border.translatesAutoresizingMaskIntoConstraints = false
        addSubview(border)
        border.backgroundColor = color
        NSLayoutConstraint.activate([
            border.heightAnchor.constraint(equalToConstant: height),
            border.leftAnchor.constraint(equalTo: leftAnchor),
            border.rightAnchor.constraint(equalTo: rightAnchor)
        ])
        return border
    }
    
}
