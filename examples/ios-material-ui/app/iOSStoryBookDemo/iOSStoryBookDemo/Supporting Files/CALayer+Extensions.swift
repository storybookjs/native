//
//  CALayer+Extensions.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

public typealias ShadowDescriptor = (xOffset: CGFloat, yOffset: CGFloat, blur: CGFloat, spread: CGFloat, color: UIColor)

internal extension CALayer {
    
    func applyShadow(_ descriptor: ShadowDescriptor) {
        shadowColor = descriptor.color.cgColor
        shadowOpacity = 1.0
        shadowOffset = CGSize(width: descriptor.xOffset, height: descriptor.yOffset)
        shadowRadius = descriptor.blur / 2.0
        if descriptor.spread == 0 {
            shadowPath = nil
        } else {
            let dx = -descriptor.spread
            let rect = bounds.insetBy(dx: dx, dy: dx)
            shadowPath = UIBezierPath(rect: rect).cgPath
        }
    }
    
    func update<T>(keyPath: String,
                   from fromValue: T? = nil,
                   to toValue: T,
                   beginTime: TimeInterval? = nil,
                   duration: TimeInterval? = nil,
                   fillMode: String? = nil,
                   timingFunction: TimingFunction? = nil,
                   animationKey: String? = nil,
                   animated: Bool = true,
                   session: @escaping @autoclosure () -> UInt = 0,
                   completion: (() -> Void)? = nil) {
        
        var animation: CABasicAnimation?
        if animated {
            let anim = CABasicAnimation(keyPath: keyPath)
            if let fromValue = fromValue {
                anim.fromValue = fromValue
            } else {
                anim.fromValue = (presentation() ?? self).value(forKeyPath: keyPath)
            }
            anim.toValue = toValue
            anim.beginTime = beginTime ?? anim.beginTime
            anim.duration = duration ?? anim.duration
            anim.fillMode = convertToCAMediaTimingFillMode(fillMode ?? ((anim.beginTime == 0) ? anim.fillMode.rawValue: CAMediaTimingFillMode.backwards.rawValue))
            anim.timingFunction = timingFunction?.function ?? anim.timingFunction
            animation = anim
        }
        
        withActionsDisabled {
            setValue(toValue, forKeyPath: keyPath)
        }
        
        if let animation = animation {
            
            if let completion = completion {
                let savedsession = session()
                
                CATransaction.begin()
                CATransaction.setCompletionBlock {
                    // Creating a whole new transaction seems necessary to ensure
                    // that the completion block is not called before all animations
                    // in nested transactions complete.
                    CATransaction.begin()
                    CATransaction.setCompletionBlock {
                        if savedsession == session() {
                            completion()
                        }
                    }
                    CATransaction.commit()
                }
            }
            add(animation, forKey: animationKey)
            
            if completion != nil {
                CATransaction.commit()
            }
        } else {
            completion?()
        }
    }
}
// Helper function inserted by Swift 4.2 migrator.
private func convertToCAMediaTimingFillMode(_ input: String) -> CAMediaTimingFillMode {
    return CAMediaTimingFillMode(rawValue: input)
}

