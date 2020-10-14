import 'package:flutter/material.dart';

class RadioPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Radio Button Page"),
      ),
      body: Center(
        child: RadioListTile(
          title: Text("Radio Button title"),
          groupValue: 0,
          value: 0,
          onChanged: (newValue) {
            Navigator.pop(context);
          },
          controlAffinity: ListTileControlAffinity.leading,  //  <-- leading Checkbox
        ),
      ),
    );
  }
}
