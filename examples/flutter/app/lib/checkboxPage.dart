import 'package:flutter/material.dart';

class _CheckboxPageState extends State<CheckboxPage> {
  bool checked = false;
  Map<String, dynamic> launchOptions;

  _CheckboxPageState({@required this.launchOptions});

  @override
  Widget build(BuildContext context) {
    var title = this.launchOptions["label"] ?? "Checkbox label";

    return Scaffold(
      appBar: AppBar(
        title: Text("Checkbox Page"),
      ),
      body: Center(
        child: CheckboxListTile(
          title: Text(title),
          value: checked,
          onChanged: (newValue) {
            setState(() {
              checked = newValue;
            });
          },
          controlAffinity:
              ListTileControlAffinity.leading, //  <-- leading Checkbox
        ),
      ),
    );
  }
}

class CheckboxPage extends StatefulWidget {
  final Map<String, dynamic> launchOptions;

  CheckboxPage({Key key, @required this.launchOptions}) : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _CheckboxPageState(launchOptions: this.launchOptions);
  }
}
