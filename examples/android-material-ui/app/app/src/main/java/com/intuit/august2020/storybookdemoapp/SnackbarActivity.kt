package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import kotlinx.android.synthetic.main.activity_snackbar.*

class SnackbarActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_snackbar)

		var title = "title"
		if (intent.hasExtra("title")) {
			title = intent.getStringExtra("title");
		}

		var action = "Action"
		if (intent.hasExtra("action")) {
			action = intent.getStringExtra("action");
		}

		Snackbar.make(snackbar, title, Snackbar.LENGTH_INDEFINITE)
			.setAction(action) {
				// Responds to click on the action
			}
			.show()
	}
}
