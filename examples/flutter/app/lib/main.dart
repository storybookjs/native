import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_storybook/bannerPage.dart';
import 'package:flutter_storybook/buttonPage.dart';
import 'package:flutter_storybook/checkboxPage.dart';
import 'package:flutter_storybook/chipsPage.dart';
import 'package:flutter_storybook/fabPage.dart';
import 'package:flutter_storybook/radioPage.dart';
import 'package:flutter_storybook/textPage.dart';

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
  static const platform = const MethodChannel('app.channel.shared.data');
  String dataShared = "{}";
  bool parametersRetrieved = false;

  Map<String, dynamic> componentRoutes = {
    "banner": BannerPage(),
    "button": ButtonPage(),
    "checkbox": CheckboxPage(),
    "chip": ChipsPage(),
    "fab": FabPage(),
    "radio": RadioPage(),
    "text": TextPage(),
  };

  @override
  initState() {
    super.initState();
    getSharedData();
  }

  getSharedData() async {
    var sharedData = await platform.invokeMethod("getSharedData");
    setState(() {
      dataShared = sharedData != null ? sharedData : "{}";
    });
    parseData(dataShared);
  }

  /// Data comes as a json key value pair where the key is "page" and the values can be
  /// button or text.
  parseData(String data) async {
    final object = json.decode(data);
    final pageName = object["page"];
    print("Switched to ${object["page"]}");

    if (pageName != null) navigateTo(pageName);

    /// To avoid a harsh transition, delay loading this screen's widgets
    Future.delayed(const Duration(milliseconds: 500), () {
      setState(() {
        parametersRetrieved = true;
      });
    });
  }

  void navigateTo(pageName) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => componentRoutes[pageName]),
    );
  }

  mainWidgets() {
    if (!parametersRetrieved) {
      return [
        Text(""),
      ];
    } else {
      List<Widget> widgets = [];
      var names = componentRoutes.keys.toList();
      names.sort((a, b) => a.toString().compareTo(b.toString()));
      names.forEach((element) {
        var widget = RaisedButton(
          color: Colors.blue,
          textColor: Colors.white,
          onPressed: () => navigateTo(element),
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
