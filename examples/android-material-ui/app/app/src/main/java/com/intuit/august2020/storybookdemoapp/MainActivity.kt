package com.intuit.august2020.storybookdemoapp

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

	companion object {
		const val BUTTON = "button"
		const val FLOATING_BUTTON = "floatingButton"
		const val CARD = "card"
		const val CHIPS = "chips"
		const val DIALOGS = "dialogs"
		const val RADIO = "radio"
		const val SWITCH = "switch"
		const val SLIDER = "slider"
		const val SNACKBAR = "snackbar"
		const val TABS = "tabs"
		const val TEXTFIELD = "textfield"
	}

	override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_main)

		val i = getIntent().getStringExtra("component");

		val buttonIntent = Intent(this, ButtonActivity::class.java).apply {
			putExtra(BUTTON, "button")
		}
		val floatingButtonIntent = Intent(this, FloatingButtonActivity::class.java).apply {
			putExtra(FLOATING_BUTTON, "floatingButton")
		}
		val cardIntent = Intent(this, CardActivity::class.java).apply {
			putExtra(CARD, "card")
		}

		val chipsIntent = Intent(this, ChipsActivity::class.java).apply {
			putExtra(CHIPS, "chips")
		}

		val dialogsIntent = Intent(this, DialogsActivity::class.java).apply {
			putExtra(DIALOGS, "dialogs")
		}

		val radioIntent = Intent(this, RadioActivity::class.java).apply {
			putExtra(RADIO, "radio")
		}

		val switchIntent = Intent(this, SwitchActivity::class.java).apply {
			putExtra(SWITCH, "switch")
		}

		val sliderIntent = Intent(this, SliderActivity::class.java).apply {
			putExtra(SLIDER, "slider")
		}

		val snackbarIntent = Intent(this, SnackbarActivity::class.java).apply {
			putExtra(SNACKBAR, "snackbar")
		}

		val tabsIntent = Intent(this, TabsActivity::class.java).apply {
			putExtra(TABS, "tabs")
		}

		val textFieldIntent = Intent(this, TextFieldActivity::class.java).apply {
			putExtra(TEXTFIELD, "textfield")
		}

		startActivity(chipsIntent)

		when (i) {
			BUTTON -> startActivity(buttonIntent)
			FLOATING_BUTTON -> startActivity(floatingButtonIntent)
			CARD -> startActivity(cardIntent)
			CHIPS -> startActivity(chipsIntent)
			DIALOGS -> startActivity(dialogsIntent)
			RADIO -> startActivity(radioIntent)
			SWITCH -> startActivity(switchIntent)
			SLIDER -> startActivity(sliderIntent)
			SNACKBAR -> startActivity(snackbarIntent)
			TABS -> startActivity(tabsIntent)
			TEXTFIELD -> startActivity(textFieldIntent)
		}
	}
}

