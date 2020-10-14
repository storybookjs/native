//
//  SpinnerViewController.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/5/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit
import MaterialComponents
import MaterialComponents.MaterialColorScheme

class SpinnerViewController: UIViewController {
    
    
    @IBOutlet weak var spinnerView: MDCActivityIndicator!
    @IBOutlet weak var progressView: MDCProgressView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        progressView.progress = 0
        let progressViewHeight = CGFloat(0)
        progressView.frame = CGRect(x: 0, y: view.bounds.height - progressViewHeight, width: view.bounds.width, height: progressViewHeight)
        progressView.backwardProgressAnimationMode = MDCProgressViewBackwardAnimationMode(rawValue: 10)!
        animateProgressView()
        
        spinnerView.sizeToFit()
        spinnerView.indicatorMode = .indeterminate
        spinnerView.progress = 1.0
        spinnerView.radius = 30.0
        spinnerView.startAnimating()
        
    }
    func animateProgressView() {
        
        UIView.animate(withDuration: 0.0, animations: {
            self.progressView.layoutIfNeeded()
        }, completion: { finished in
            self.progressView.progress = 1.0
            
            UIView.animate(withDuration: 10.0, delay: 0.0, options: [.curveLinear, .repeat], animations: {
                self.progressView.layoutIfNeeded()
            }, completion: { finished in
            })
        })
    }
}
