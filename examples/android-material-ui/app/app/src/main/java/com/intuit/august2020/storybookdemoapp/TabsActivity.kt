package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.tabs.TabLayout
import kotlinx.android.synthetic.main.activity_tabs.*

class TabsActivity : AppCompatActivity() {
	private fun updateTabLabel(index: Int, key: String) {
		var tab: TabLayout.Tab = tabLayout.getTabAt(index) ?: return

		if (intent.hasExtra(key)) {
			var label = intent.getStringExtra(key)
			tab.text = label
		}
	}

	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_tabs)

		updateTabLabel(0, "label1")
		updateTabLabel(1, "label2")
		updateTabLabel(2, "label3")
	}
}
