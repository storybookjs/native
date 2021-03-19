import 'package:flutter/material.dart';

class HexColor extends Color {
  static int _getColorFromHex(String hexColor) {
    hexColor = hexColor.toUpperCase();
    if (hexColor.length == 6) {
      hexColor = "FF" + hexColor;
    }
    return int.parse(hexColor, radix: 16);
  }

  HexColor(final String hexColor) : super(_getColorFromHex(hexColor));
}

class FabPage extends StatelessWidget {
  final Map<String, dynamic> launchOptions;

  FabPage({Key key, @required this.launchOptions}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var backgroundColor = this.launchOptions["backgroundColor"] ?? "c0c0c0";
    var hoverColor = this.launchOptions["hoverColor"] ?? "c0c0c0";

    return Scaffold(
      appBar: AppBar(
        title: Text("FAB Page"),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print("FAB pressed");
        },
        child: Icon(Icons.add),
        backgroundColor: HexColor(backgroundColor),
        hoverColor: HexColor(hoverColor),
      ),
    );
  }
}
