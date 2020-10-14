//
//  FloatingButtonController.swift
//  SBDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020. All rights reserved.
//

import UIKit
import MaterialComponents
import MaterialComponents.MaterialButtons
import MaterialComponents.MaterialButtons_Theming

class FloatingButtonController: UIViewController {

    @IBOutlet weak var floatingButton: MDCFloatingButton!
    let backgroundColor = UIColor(white: 1, alpha: 1.0)
    override func viewDidLoad() {
        super.viewDidLoad()
        floatingButton.backgroundColor = backgroundColor
        floatingButton.sizeToFit()        // Do any additional setup after loading the view.
    }

}
