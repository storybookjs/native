import 'package:flutter/material.dart';

class BannerPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Banner Page"),
      ),
      body: Center(
        child: Banner(
          message: "banner",
          location: BannerLocation.topEnd,
          color: Colors.red,
          child: Container(
            color: Colors.blue,
            height: 100,
            child: Center(
              child: Text("Hello, banner!", style: TextStyle(color: Colors.white),),
            ),
          ),
        ),
      ),
    );
  }
}
