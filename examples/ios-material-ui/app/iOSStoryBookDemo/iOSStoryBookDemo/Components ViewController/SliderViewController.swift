//
//  SliderViewController.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/5/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit
import MaterialComponents.MaterialSlider

class SliderViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @objc func didChangeSliderValue(senderSlider:MDCSlider) {
      print("Did change slider value to: %@", senderSlider.value)
    }
}
