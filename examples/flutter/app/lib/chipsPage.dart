import 'package:flutter/material.dart';

class ChipsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Chips Page"),
      ),
      body: Center(
        child: InputChip(
          label: Text("A Chip"),
          onPressed: () { Navigator.pop(context); }
        ),
      ),
    );
  }
}
