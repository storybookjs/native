package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.dialog.MaterialAlertDialogBuilder

class DialogsActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_dialogs)
		val multiItems = arrayOf("Item 1", "Item 2", "Item 3")
		val checkedItems = booleanArrayOf(true, false, false, false)

		var header = resources.getString(R.string.title)
		if (intent.hasExtra("header")) {
			header = intent.getStringExtra("header");
		}

		var cancelText = resources.getString(R.string.dialogCancel)
		if (intent.hasExtra("cancelText")) {
			cancelText = intent.getStringExtra("cancelText")
		}

		var okText = resources.getString(R.string.dialogOk)
		if (intent.hasExtra("confirmText")) {
			okText = intent.getStringExtra("confirmText")
		}

		MaterialAlertDialogBuilder(this)
			.setTitle(header)
			.setNeutralButton(cancelText) { dialog, which ->
				// Respond to neutral button press
			}
			.setPositiveButton(okText) { dialog, which ->
				// Respond to positive button press
			}
			// Single-choice items (initialized with checked item)
			.setMultiChoiceItems(multiItems, checkedItems) { dialog, which, checked ->
				// Respond to item chosen
			}
			.show()
	}
}
