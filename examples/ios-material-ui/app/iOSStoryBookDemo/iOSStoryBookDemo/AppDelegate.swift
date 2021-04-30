//
//  AppDelegate.swift
//  iOSStoryBookDemo
//
//  Created by Jayakrishnan u on 9/3/20.
//  Copyright © 2020 Jayakrishnan u. All rights reserved.
//

import UIKit

public enum StoryBoardType: String {
    case Main
}
public enum DemoPageType: String {
    case main,
    label_control,
    button,
    floatingbutton,
    label_inputs,
    textfield,
    slider,
    label_communications,
    spinner
}
public let menuItems: [String: String] = [
    DemoPageType.main.rawValue: StoryBoardType.Main.rawValue
]

let isAppetize = "isAppetize"
let isDeveloper = "isDeveloper"

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    static let bundleID = "com.test.iOSStoryBookDemo"
    static let launch_option = "launch_option"
    static let idsSwitch = "switch"
    static let textArea = "text_area"
    static let navigation = "navigation"
    
    enum DemoAppType {
        case developer, gallery
    }
    
    var window: UIWindow?
    
    static func fromAppetize() -> Bool {
        return  UserDefaults.standard.bool(forKey: isAppetize)
    }
    
    static func fromDeveloper() -> Bool {
        return  UserDefaults.standard.bool(forKey: isDeveloper)
    }
    
    static func setGalleryDemoAppUserDefaults() {
        UserDefaults.standard.set(true, forKey: isAppetize)
        UserDefaults.standard.set(DemoPageType.main.rawValue, forKey: launch_option)
    }
    
    static func resetGalleryDemoApppUserDefaults() {
        UserDefaults.standard.removeObject(forKey: isAppetize)
        UserDefaults.standard.removeObject(forKey: launch_option)
    }
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let launchOption: String = UserDefaults.standard.string(forKey: AppDelegate.launch_option) ?? ""
        if launchOption.lowercased() == DemoPageType.main.rawValue {
            UserDefaults.standard.set(true, forKey: isDeveloper)
            launchDemoPage( DemoAppType.developer, DemoPageType.main, [:])
        } else if  AppDelegate.fromAppetize() {
            launchGalleryFromAppetize(launchOption, [:])
        } else {
            UserDefaults.standard.set(true, forKey: isDeveloper)
        }
        
        if #available(iOS 13.0, *) {
            UINavigationBar.appearance().barTintColor = .systemBackground
        }
        
        return true
    }
    
    func application(_ app: UIApplication, open url: URL,
                     options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        if let scheme = url.scheme,
            scheme.localizedCaseInsensitiveCompare("sb-native") == .orderedSame,
            let view = url.host {
            
            var parameters: [String: String] = [:]
            URLComponents(url: url, resolvingAgainstBaseURL: false)?.queryItems?.forEach {
                parameters[$0.name] = $0.value
            }
            
            launchGalleryFromAppetize(parameters["component"]!, parameters)
        }
        return true
    }
    
    func launchGalleryFromAppetize(_ launchOption: String, _ params: [String: String]) {
        var launchOption = launchOption
        if launchOption.isEmpty {
            launchOption = DemoPageType.main.rawValue
        }
        if let pageType = DemoPageType(rawValue: launchOption.lowercased()) {
            launchDemoPage( DemoAppType.gallery, pageType, params)
        } else {
            launchDemoPage( DemoAppType.gallery, DemoPageType.main, params)
        }
    }
    
    func launchDemoAppMenu(_ demoAppType: DemoAppType) {
        switch demoAppType {
        case .gallery:
            AppDelegate.setGalleryDemoAppUserDefaults()
            launchDemoPage(DemoAppType.gallery, DemoPageType.main, [:])
        default:
            AppDelegate.resetGalleryDemoApppUserDefaults()
            launchDemoPage( DemoAppType.developer, DemoPageType.main, [:])
        }
    }
    
    func launchDemoPage(_ demoAppType: DemoAppType, _ demoPage: DemoPageType, _ params: [String: String]) {
        let nvc = navigationController(demoAppType)
        let menuVC = viewController(DemoPageType.main)
        
        let VCToLaunch = viewController(demoPage)
        if let controlsProtocol = VCToLaunch as? StorybookControlsProtocol {
            controlsProtocol.loadControls(params)
        }
        
        switch demoAppType {
        default:
            if demoPage != DemoPageType.main {
                nvc.pushViewController(menuVC, animated: false)
            }
        }
        nvc.pushViewController(VCToLaunch, animated: false)
        window?.rootViewController = nvc
    }
    
    func storyboardName(_ demoAppType: DemoAppType) -> String {
        switch demoAppType {
        default:
            return StoryBoardType.Main.rawValue
        }
    }
    
    func navigationController(_ demoAppType: DemoAppType) -> UINavigationController {
        let storyboard = UIStoryboard(name: storyboardName(demoAppType), bundle: nil)
        return storyboard.instantiateViewController(withIdentifier: AppDelegate.navigation) as! UINavigationController
    }
    
    func viewController( _ demoPage: DemoPageType) -> UIViewController {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        return storyboard.instantiateViewController(withIdentifier: demoPage.rawValue)
    }
}


