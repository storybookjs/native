//
//  ViewController.swift
//  SBDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020. All rights reserved.
//
import MaterialComponents
import MaterialComponents.MaterialButtons
import MaterialComponents.MaterialButtons_Theming
import UIKit

class ButtonViewController: UIViewController {
    let floatingButtonPlusDimension = CGFloat(24)
    let kMinimumAccessibleButtonSize = CGSize(width: 64, height: 48)
    let backgroundColor = UIColor(white: 0.1, alpha: 1.0)
    
    @IBOutlet weak var textButton: MDCButton!
    
    @IBOutlet weak var outLinedButton: MDCButton!
    
    @IBOutlet weak var containedButton: MDCButton!
    
    @IBOutlet weak var toggleButton: MDCButton!
    
    var containerScheme = MDCContainerScheme()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textButton.applyTextTheme(withScheme: containerScheme)
        outLinedButton.applyOutlinedTheme(withScheme: containerScheme)
        containedButton.applyContainedTheme(withScheme: containerScheme)
        // Do any additional setup after loading the view.
    }
    func buttonResize() {
        let buttonVerticalInset =
            min(0, -(kMinimumAccessibleButtonSize.height - textButton.bounds.height) / 2);
        let buttonHorizontalInset =
            min(0, -(kMinimumAccessibleButtonSize.width - textButton.bounds.width) / 2);
        
        textButton.backgroundColor = backgroundColor
        textButton.hitAreaInsets =
            UIEdgeInsets(top: buttonVerticalInset, left: buttonHorizontalInset,
            bottom: buttonVerticalInset, right: buttonHorizontalInset)
        textButton.minimumSize = CGSize(width: 64, height: 48)
        textButton.applyTextTheme(withScheme: containerScheme)
        outLinedButton.applyOutlinedTheme(withScheme: containerScheme)
        containedButton.applyContainedTheme(withScheme: containerScheme)
        //toggleButton.apply
    }
}

