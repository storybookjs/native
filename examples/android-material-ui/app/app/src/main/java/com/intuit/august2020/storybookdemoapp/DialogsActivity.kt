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
		
		MaterialAlertDialogBuilder(this)
			.setTitle(resources.getString(R.string.title))
			.setNeutralButton(resources.getString(R.string.dialogCancel)) { dialog, which ->
				// Respond to neutral button press
			}
			.setPositiveButton(resources.getString(R.string.dialogOk)) { dialog, which ->
				// Respond to positive button press
			}
			// Single-choice items (initialized with checked item)
			.setMultiChoiceItems(multiItems, checkedItems) { dialog, which, checked ->
				// Respond to item chosen
			}
			.show()
	}
}
