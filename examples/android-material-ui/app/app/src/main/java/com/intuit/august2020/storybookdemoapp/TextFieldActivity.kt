package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_text_field.*

class TextFieldActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_text_field)

        if (intent.hasExtra("helperText")) {
            var text = intent.getStringExtra("helperText")
            textField.helperText = text
        }

        if (intent.hasExtra("placeholderText")) {
            var text = intent.getStringExtra("placeholderText")
            textField.placeholderText = text
        }

        if (intent.hasExtra("hintText")) {
            var text = intent.getStringExtra("hintText")
            textField.hint = text
        }
    }
}
