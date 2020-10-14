import 'package:flutter/material.dart';

class CheckboxPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool state = false;

    return Scaffold(
      appBar: AppBar(
        title: Text("Checkbox Page"),
      ),
      body: Center(
        child: CheckboxListTile(
          title: Text("Checkbox title"),
          value: state,
          onChanged: (newValue) {
            Navigator.pop(context);
          },
          controlAffinity: ListTileControlAffinity.leading,  //  <-- leading Checkbox
        ),
      ),
    );
  }
}
