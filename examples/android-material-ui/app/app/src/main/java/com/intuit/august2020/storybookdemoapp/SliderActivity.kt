package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.RadioButton
import com.google.android.material.slider.Slider
import kotlinx.android.synthetic.main.activity_slider.*
import java.text.NumberFormat
import java.util.*

class SliderActivity : AppCompatActivity() {
	private fun updateMinValue(slider: Slider, key: String) {
		if (intent.hasExtra(key)) {
			var value = intent.getStringExtra(key)
			slider.valueFrom = value.toFloat()
		}
	}

	private fun updateMaxValue(slider: Slider, key: String) {
		if (intent.hasExtra(key)) {
			var value = intent.getStringExtra(key)
			slider.valueTo = value.toFloat()
		}
	}

	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_slider)

		updateMinValue(rangeSlider, "rangeMin")
		updateMaxValue(rangeSlider, "rangeMax")

		rangeSlider.setLabelFormatter { value: Float ->
			val format = NumberFormat.getCurrencyInstance()
			format.maximumFractionDigits = 0
			format.currency = Currency.getInstance("USD")
			format.format(value.toDouble())
		}
	}
}
