//
//  AnimationTransactions.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

/**
 An enumeration of Core Animation timing functions.
 */
enum TimingFunction {
    case custom(CAMediaTimingFunction)
    case `default`
    case easeIn
    case easeInOut
    case easeOut
    case linear
    
    var function: CAMediaTimingFunction {
        switch self {
        case .custom(let function): return function
        default: return CAMediaTimingFunction(name: convertToCAMediaTimingFunctionName(name))
        }
    }
    
    var name: String {
        switch self {
        case .custom: return "custom"
        case .default: return convertFromCAMediaTimingFunctionName(CAMediaTimingFunctionName.default)
        case .easeIn: return convertFromCAMediaTimingFunctionName(CAMediaTimingFunctionName.easeIn)
        case .easeInOut: return convertFromCAMediaTimingFunctionName(CAMediaTimingFunctionName.easeInEaseOut)
        case .easeOut: return convertFromCAMediaTimingFunctionName(CAMediaTimingFunctionName.easeOut)
        case .linear: return convertFromCAMediaTimingFunctionName(CAMediaTimingFunctionName.linear)
        }
    }
}

/**
 A set of properties used to configure an animation transaction (using `CATransaction`).
 */
final class AnimationTransaction {
    var session: () -> UInt
    let duration: CFTimeInterval?
    let timingFunction: TimingFunction?
    let skipAnimation: Bool?
    let animations: () -> Void
    fileprivate var completion: AnimationTransaction?
    
    var name: String?
    
    /**
     Returns an `AnimationTransaction` whose `perform()` results in the serial execution of the `AnimationTransaction`s in `animationTransactions`.
     
     - parameter animationTransactions: An array of `AnimationTransaction`s to perform serially.
     
     - returns: An `AnimationTransaction` whose `perform()` results in the serial execution of the `AnimationTransaction`s in `animationTransactions`.
     */
    class func animationTransactionChain(from animationTransactions: [AnimationTransaction]) -> AnimationTransaction? {
        return animationTransactionChain(withSession: 0, from: animationTransactions)
    }
    
    /**
     Returns an `AnimationTransaction` whose `perform()` results in the serial execution of the `AnimationTransaction`s in `animationTransactions`.
     
     - parameters
     - session: See description of this parameter at `withAnimationTransaction`.
     - animationTransactions: An array of `AnimationTransaction`s to perform serially.
     
     - returns: An `AnimationTransaction` whose `perform()` results in the serial execution of the `AnimationTransaction`s in `animationTransactions`.
     */
    class func animationTransactionChain(withSession session: @escaping @autoclosure () -> UInt,
                                         from animationTransactions: [AnimationTransaction]) -> AnimationTransaction? {
        
        animationTransactions.forEach({ $0.session = session })
        
        if animationTransactions.count > 1 {
            for i in 1 ..< animationTransactions.count {
                animationTransactions[i - 1].completion = animationTransactions[i]
            }
        }
        
        return animationTransactions.first
    }
    
    /**
     Performs the `AnimationTransaction`s in `animationTransactions` serially by creating a chain of completion handlers.
     
     - parameter animationTransactions: An array of `AnimationTransaction`s to perform serially.
     */
    class func performSequence(_ animationTransactions: [AnimationTransaction]) {
        performSequence(withSession: 0, animationTransactions: animationTransactions)
    }
    
    /**
     Performs the `AnimationTransaction`s in `animationTransactions` serially by creating a chain of completion handlers.
     
     - parameters
     - session: See description of this parameter at `withAnimationTransaction`.
     - animationTransactions: An array of `AnimationTransaction`s to perform serially.
     */
    class func performSequence(withSession session: @escaping @autoclosure () -> UInt,
                               animationTransactions: [AnimationTransaction]) {
        animationTransactionChain(withSession: session(), from: animationTransactions)?.perform()
    }
    
    /**
     Initializes the instance.
     
     - parameters:
     - session: A closure that returns an unsigned integer. The closure is called before
     the transaction is committed and the returned value is saved. Then, right before
     `completion` would execute, the closure is called again. If the returned value is
     not the same as the one that was saved, `completion` is not executed.
     - duration: The default animation duration used by animations within the transaction.
     - timingFunction: The default timing function used for animations within the transaction.
     - skipAnimation: If `true`, then `animations` is not executed in the context of a new
     transaction provided by `CATransaction` and `completion` is called immediately after
     `animations` is called.
     - animations: A closure containing code to execute within the transaction.
     */
    init(session: @autoclosure @escaping () -> UInt = 0,
         duration: CFTimeInterval? = nil,
         timingFunction: TimingFunction? = nil,
         skipAnimation: Bool? = nil,
         animations: @escaping () -> Void) {
        self.session = session
        self.duration = duration
        self.timingFunction = timingFunction
        self.skipAnimation = skipAnimation
        self.animations = animations
        self.completion = nil
    }
    
    /**
     Calls `withAnimationTransaction`, passing values of the properties of this class for the parameters of the function.
     */
    func perform() {
        withAnimationTransaction(
            session: self.session(),
            duration: duration,
            timingFunction: timingFunction,
            skipAnimation: skipAnimation,
            animations: animations,
            completion: {
                self.completion?.perform()
        }
        )
    }
}

/**
 Executes code within the context of a transaction provided by `CATransaction`.
 
 - parameter actionsWithoutAnimation: A closure containing changes to perform without animation.
 */
func withActionsDisabled(actionsWithoutAnimation: () -> Void) {
    CATransaction.begin()
    CATransaction.setDisableActions(true)
    actionsWithoutAnimation()
    CATransaction.commit()
}

/**
 Executes code within the context of a transaction provided by `CATransaction`.
 
 - parameters:
 - session: A closure that returns an unsigned integer. The closure is called before
 the transaction is committed and the returned value is saved. Then, right before
 `completion` would execute, the closure is called again. If the returned value is
 not the same as the one that was saved, `completion` is not executed.
 - duration: The default animation duration used by animations within the transaction.
 - timingFunction: The default timing function used for animations within the transaction.
 - skipAnimation: If `true`, then `animations` is not executed in the context of a new
 transaction provided by `CATransaction` and `completion` is called immediately after
 `animations` is called.
 - animations: A closure containing code to execute within the transaction.
 - completion: A closure containing code to execute after `animations` completes.
 */
func withAnimationTransaction(session: @escaping @autoclosure () -> UInt = 0,
                              duration: CFTimeInterval? = nil,
                              timingFunction: TimingFunction? = nil,
                              skipAnimation: Bool? = nil,
                              animations: () -> Void,
                              completion: (() -> Void)? = nil) {
    if skipAnimation ?? false {
        animations()
        completion?()
    } else {
        CATransaction.begin()
        
        if let duration = duration {
            CATransaction.setAnimationDuration(duration)
        }
        
        if let timingFunction = timingFunction {
            CATransaction.setAnimationTimingFunction(timingFunction.function)
        }
        if let completion = completion {
            let savedsession = session()
            
            CATransaction.setCompletionBlock {
                // Creating a whole new transaction seems necessary to ensure
                // that the completion block is not called before all animations
                // in nested transactions complete.
                CATransaction.begin()
                CATransaction.setCompletionBlock {
                    if session() == savedsession {
                        completion()
                    }
                }
                CATransaction.commit()
            }
        }
        
        animations()
        
        CATransaction.commit()
    }
}

// Helper function inserted by Swift 4.2 migrator.
private func convertToCAMediaTimingFunctionName(_ input: String) -> CAMediaTimingFunctionName {
    return CAMediaTimingFunctionName(rawValue: input)
}

// Helper function inserted by Swift 4.2 migrator.
private func convertFromCAMediaTimingFunctionName(_ input: CAMediaTimingFunctionName) -> String {
    return input.rawValue
}
