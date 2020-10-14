package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.activity_snackbar.*

class SnackbarActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_snackbar)
		val contextView = findViewById<View>(R.id.snackbar)
		Snackbar.make(snackbar, "Text label", Snackbar.LENGTH_INDEFINITE)
			.setAction("Action") {
				// Responds to click on the action
			}
			.show()
	}
}
