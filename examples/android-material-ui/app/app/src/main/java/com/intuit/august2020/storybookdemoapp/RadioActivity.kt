package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.RadioButton
import kotlinx.android.synthetic.main.activity_radio.*

class RadioActivity : AppCompatActivity() {
	private fun updateRadioLabel(radio: RadioButton, key: String) {
		if (intent.hasExtra(key)) {
			var label = intent.getStringExtra(key)
			radio.text = label
		}
	}

	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_radio)

		updateRadioLabel(radio_button_1, "label1")
		updateRadioLabel(radio_button_2, "label2")
		updateRadioLabel(radio_button_3, "label3")
		updateRadioLabel(radio_button_4, "label4")
		updateRadioLabel(radio_button_5, "label5")
	}
}
