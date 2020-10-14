//
//  label.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/5/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

class TitleLabel: UILabel {

    required init(coder aDecoder: NSCoder) {
           super.init(coder: aDecoder)!
           self.commonInit()

       }

       override init(frame: CGRect) {
           super.init(frame: frame)
           self.commonInit()
       }
       func commonInit(){
        self.font = UIFont.boldSystemFont(ofSize: 20.0)
       }
}
