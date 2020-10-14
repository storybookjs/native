import 'package:flutter/material.dart';

class FabPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FAB Page"),
      ),
      body: Center(
        child: Text("Touch the FAB"),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {Navigator.pop(context); },
        child: Icon(Icons.add),
      ),
    );
  }
}
