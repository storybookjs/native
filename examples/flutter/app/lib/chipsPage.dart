import 'package:flutter/material.dart';

class ChipsPage extends StatelessWidget {
  final Map<String, dynamic> launchOptions;

  ChipsPage({Key key, @required this.launchOptions}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var label = this.launchOptions["label"] ?? "Default chip label";
    return Scaffold(
      appBar: AppBar(
        title: Text("Chips Page"),
      ),
      body: Center(
        child: InputChip(
            label: Text(label),
            onPressed: () {
              print("Chip pressed");
            }),
      ),
    );
  }
}
