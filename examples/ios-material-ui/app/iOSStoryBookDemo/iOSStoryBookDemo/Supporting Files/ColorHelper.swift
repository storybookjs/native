//
//  ColorHelper.swift
//  iOSStoryBookDemo
//
//  Created by junnikrishn  on 10/2/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//
import UIKit

/**
 Reads a value from a plist file.
 */
func readPlist(bundle: Bundle = Bundle(identifier: "com.test.iOSStoryBookDemo")!, file: String, key: String) -> String {
    var result = "ERROR"
    if let url = bundle.url(forResource: file, withExtension: "plist") {
        do {
            let data = try Data(contentsOf: url)
            let designData = try PropertyListSerialization.propertyList(from: data, options: [], format: nil) as! [String: Any]
            result = designData[key] as! String
        } catch {
            print(error)
        }
    }
    return result
}

