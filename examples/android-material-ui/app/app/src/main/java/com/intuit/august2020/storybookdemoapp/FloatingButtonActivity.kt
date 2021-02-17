package com.intuit.august2020.storybookdemoapp

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_floating_button.*

class FloatingButtonActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_floating_button)

        if (intent.hasExtra("rippleColor")) {
            var colourHex = "#" + intent.getStringExtra("rippleColor")
            val colour = Color.parseColor(colourHex)
            floating_action_button.rippleColor = colour
        }
    }
}
