import 'package:flutter/material.dart';

class TextPage extends StatelessWidget {
  final Map<String, dynamic> launchOptions;

  TextPage({Key key, @required this.launchOptions}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var text = this.launchOptions["text"] ?? "Default text";
    return Scaffold(
      appBar: AppBar(
        title: Text("TextView Page"),
      ),
      body: Center(
        child: FlatButton(
          textColor: Colors.blue,
          onPressed: () {
            print("text pressed");
          },
          child: Text(text),
        ),
      ),
    );
  }
}
