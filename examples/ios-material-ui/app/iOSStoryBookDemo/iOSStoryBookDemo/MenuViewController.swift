//
//  MenuViewController.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

class MenuViewController: MenuBaseViewController {
    
    var galleryOptions: [Section] = [
        Section(name: DemoPageType.label_control.rawValue, items: [
            DemoPageType.button,
            DemoPageType.floatingbutton
        ]),
        Section(name: DemoPageType.label_inputs.rawValue, items: [
            DemoPageType.textfield,
            DemoPageType.slider
        ]), 
        Section(name: DemoPageType.label_communications.rawValue, items: [
           DemoPageType.spinner,
        ])
    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationController?.navigationBar.prefersLargeTitles = false
        navigationController?.navigationBar.topItem?.title = "Storybook"
        navigationController?.navigationItem.largeTitleDisplayMode = .never
        options = galleryOptions
        
    }
}
