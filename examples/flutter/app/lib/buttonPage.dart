import 'package:flutter/material.dart';

class ButtonPage extends StatelessWidget {
  final Map<String, dynamic> launchOptions;

  ButtonPage({Key key, @required this.launchOptions}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var label = this.launchOptions["label"] ?? "Default button label";
    return Scaffold(
      appBar: AppBar(
        title: Text("Button Page"),
      ),
      body: Center(
        child: RaisedButton(
          color: Colors.blue,
          textColor: Colors.white,
          onPressed: () {
            print("Button pressed");
          },
          child: Text(label),
        ),
      ),
    );
  }
}
