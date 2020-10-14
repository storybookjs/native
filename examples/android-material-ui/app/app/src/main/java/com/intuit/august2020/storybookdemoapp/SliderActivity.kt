package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_slider.*
import java.text.NumberFormat
import java.util.*

class SliderActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_slider)
		rangeSlider.setLabelFormatter { value: Float ->
			val format = NumberFormat.getCurrencyInstance()
			format.maximumFractionDigits = 0
			format.currency = Currency.getInstance("USD")
			format.format(value.toDouble())
		}
	}
}
