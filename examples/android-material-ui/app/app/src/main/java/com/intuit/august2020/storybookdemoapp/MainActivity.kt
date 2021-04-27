package com.intuit.august2020.storybookdemoapp

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.app.AppCompatDelegate

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

	private fun propagateQueryParams(openIntent: Intent, viewIntent: Intent) {
		if (openIntent.data != null) {
			for (param in openIntent.data.queryParameterNames) {
				viewIntent.putExtra(param, openIntent.data.getQueryParameter(param));
			}
		}
	}

	private fun handleIntent(intent: Intent) {
		// launch arguments example
		var component = intent.getStringExtra("component");

		// deep linking example
		if (intent.data != null) {
			if (intent.data.getQueryParameter("component") != null) {
				component = intent.data.getQueryParameter("component")
			}

			// toggle light/dark mode
			// TODO: this causes flickering colours so its disabled right now
			/* if (intent.data.getQueryParameter("theme") != null) {
				val darkMode = intent.data.getQueryParameter("theme").equals("dark")
				val compatMode = if (darkMode) AppCompatDelegate.MODE_NIGHT_YES else AppCompatDelegate.MODE_NIGHT_NO
				AppCompatDelegate.setDefaultNightMode(compatMode)
			} */
		}

		val buttonIntent = Intent(this, ButtonActivity::class.java).apply {
			putExtra(BUTTON, "button")
			propagateQueryParams(intent, this)
		}
		val floatingButtonIntent = Intent(this, FloatingButtonActivity::class.java).apply {
			putExtra(FLOATING_BUTTON, "floatingButton")
			propagateQueryParams(intent, this)
		}
		val cardIntent = Intent(this, CardActivity::class.java).apply {
			putExtra(CARD, "card")
			propagateQueryParams(intent, this)
		}

		val chipsIntent = Intent(this, ChipsActivity::class.java).apply {
			putExtra(CHIPS, "chips")
			propagateQueryParams(intent, this)
		}

		val dialogsIntent = Intent(this, DialogsActivity::class.java).apply {
			putExtra(DIALOGS, "dialogs")
			propagateQueryParams(intent, this)
		}

		val radioIntent = Intent(this, RadioActivity::class.java).apply {
			putExtra(RADIO, "radio")
			propagateQueryParams(intent, this)
		}

		val switchIntent = Intent(this, SwitchActivity::class.java).apply {
			putExtra(SWITCH, "switch")
			propagateQueryParams(intent, this)
		}

		val sliderIntent = Intent(this, SliderActivity::class.java).apply {
			putExtra(SLIDER, "slider")
			propagateQueryParams(intent, this)
		}

		val snackbarIntent = Intent(this, SnackbarActivity::class.java).apply {
			putExtra(SNACKBAR, "snackbar")
			propagateQueryParams(intent, this)
		}

		val tabsIntent = Intent(this, TabsActivity::class.java).apply {
			putExtra(TABS, "tabs")
			propagateQueryParams(intent, this)
		}

		val textFieldIntent = Intent(this, TextFieldActivity::class.java).apply {
			putExtra(TEXTFIELD, "textfield")
			propagateQueryParams(intent, this)
		}

		startActivity(chipsIntent)

		when (component) {
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

	override fun onNewIntent(intent: Intent?) {
		super.onNewIntent(intent)
		if (intent != null) {
			setIntent(intent)
			handleIntent(intent)
		}
	}

	override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_main)

		val intent = getIntent();
		handleIntent(intent)
	}
}

