package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_button.*

class ButtonActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_button);

        if (intent.hasExtra("label")) {
            var label = intent.getStringExtra("label");
            textButton.text = label
            outlinedButton.text = label
            containedButton.text = label
        }
    }
}
