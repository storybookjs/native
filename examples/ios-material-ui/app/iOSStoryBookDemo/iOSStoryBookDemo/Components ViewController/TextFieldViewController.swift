//
//  TextFieldViewController.swift
//  SBDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020. All rights reserved.
//

import UIKit
import MaterialComponents
import MaterialComponents.MaterialTextFields
import MaterialComponents.MaterialTextFields_Theming

class TextFieldViewController: UIViewController {
    
    @IBOutlet weak var textFieldStackView: UIStackView!
    var nameController: MDCTextInputControllerOutlined?
    var longTextInputController =  MDCTextInputControllerOutlinedTextArea()
    @IBOutlet weak var textField: MDCTextField!
    let multiLineTextField: MDCMultilineTextField = {
          let field = MDCMultilineTextField()
          field.translatesAutoresizingMaskIntoConstraints = false
          return field
      }()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        nameController = MDCTextInputControllerOutlined(textInput: textField)
        nameController?.activeColor = UIColor.red
        nameController?.disabledColor = UIColor.green
        nameController?.textInsets(UIEdgeInsets(top: 16, left: 16, bottom: 16, right: 16))
        
        multiLineTextField.placeholderLabel.text = "Description"
        longTextInputController = MDCTextInputControllerOutlinedTextArea(textInput: multiLineTextField)
        textFieldStackView.addArrangedSubview(multiLineTextField)
        
        NSLayoutConstraint.activate([
             NSLayoutConstraint(item: multiLineTextField, attribute: .leading, relatedBy: .equal, toItem: self.view, attribute: .leading, multiplier: 1.0, constant: 32),
             NSLayoutConstraint(item: multiLineTextField, attribute: .trailing, relatedBy: .equal, toItem: self.view, attribute: .trailing, multiplier: 1.0, constant: -32)
         ])
        // Do any additional setup after loading the view.
    }
    
    
}
