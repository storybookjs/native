import 'package:flutter/material.dart';

class BannerPage extends StatelessWidget {
  final Map<String, dynamic> launchOptions;

  BannerPage({Key key, @required this.launchOptions}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var text = launchOptions["message"] ?? "Hello, banner!";
    return Scaffold(
      appBar: AppBar(
        title: Text("Banner Page"),
      ),
      body: Center(
        child: Banner(
          message: launchOptions["ribbon"] ?? "Banner",
          location: BannerLocation.topEnd,
          color: Colors.red,
          child: Container(
            color: Colors.blue,
            height: 100,
            child: Center(
              child: Text(text, style: TextStyle(color: Colors.white),),
            ),
          ),
        ),
      ),
    );
  }
}
