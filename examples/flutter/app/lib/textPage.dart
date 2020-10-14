import 'package:flutter/material.dart';

class TextPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("TextView Page"),
      ),
      body: Center(
        child: FlatButton(
          textColor: Colors.blue,
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('TextView'),
        ),
      ),
    );
  }
}