import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_storybook/bannerPage.dart';
import 'package:flutter_storybook/buttonPage.dart';
import 'package:flutter_storybook/checkboxPage.dart';
import 'package:flutter_storybook/chipsPage.dart';
import 'package:flutter_storybook/fabPage.dart';
import 'package:flutter_storybook/textPage.dart';

import 'package:uni_links/uni_links.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Storybook Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Storybook Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool parametersRetrieved = false;
  StreamSubscription _sub;

  @override
  initState() {
    super.initState();
    initUniLinks();
  }

  @override
  dispose() {
    super.dispose();
    if (_sub != null) {
      _sub.cancel();
    }
  }

  parseLink(Uri uri) {
    var dict = uri.queryParameters;
    parseData(dict);
  }

  Future<Null> initUniLinks() async {
    try {
      Uri initialLink = await getInitialUri();
      if (initialLink != null) {
        parseLink(initialLink);
      } else {
        print("Initial link was null");
      }
    } on PlatformException {
      print("Error loading initial link");
    }

    // Attach a listener to the stream
    print("Init URI links");
    _sub = getUriLinksStream().listen((Uri uri) {
      // Use the uri and warn the user, if it is not correct
      if (uri != null) {
        print(uri);
        parseLink(uri);
      } else {
        print("Navigated to null link");
      }
    }, onError: (err) {
      print(err);
      // Handle exception by warning the user their action did not succeed
    });
  }

  /// Data comes as a json key value pair where the key is "page" and the values can be
  /// button or text.
  parseData(dynamic object) async {
    final pageName = object["page"];
    print("Switched to ${object["page"]}");

    if (pageName != null) navigateTo(pageName, object);

    /// To avoid a harsh transition, delay loading this screen's widgets
    Future.delayed(const Duration(milliseconds: 500), () {
      setState(() {
        parametersRetrieved = true;
      });
    });
  }

  void navigateTo(String pageName, Map<String, dynamic> launchOptions) {
    var widget;
    if (pageName == "banner") {
      widget = BannerPage(launchOptions: launchOptions);
    } else if (pageName == "button") {
      widget = ButtonPage(launchOptions: launchOptions);
    } else if (pageName == "checkbox") {
      widget = CheckboxPage(launchOptions: launchOptions);
    } else if (pageName == "chip") {
      widget = ChipsPage(launchOptions: launchOptions);
    } else if (pageName == "fab") {
      widget = FabPage(launchOptions: launchOptions);
    } else if (pageName == "text") {
      widget = TextPage(launchOptions: launchOptions);
    }

    if (widget == null) {
      print("No widget generated for page: $pageName");
      return;
    }

    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => widget),
    );
  }

  mainWidgets() {
    if (!parametersRetrieved) {
      return [
        Text(""),
      ];
    } else {
      List<Widget> widgets = [];
      var names = ["banner", "button", "checkbox", "chip", "fab", "text"];
      names.sort((a, b) => a.toString().compareTo(b.toString()));
      names.forEach((element) {
        var widget = RaisedButton(
          color: Colors.blue,
          textColor: Colors.white,
          onPressed: () => navigateTo(element, {}),
          child: Text('Goto $element Page'),
        );
        widgets.add(widget);
      });
      return widgets;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: mainWidgets(),
        ),
      ),
    );
  }
}
