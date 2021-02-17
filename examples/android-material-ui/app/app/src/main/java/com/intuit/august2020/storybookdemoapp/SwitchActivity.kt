package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.switchmaterial.SwitchMaterial
import kotlinx.android.synthetic.main.activity_switch.*

class SwitchActivity : AppCompatActivity() {
    private fun updateSwitchLabel(switch: SwitchMaterial, key: String) {
        if (intent.hasExtra(key)) {
            var label = intent.getStringExtra(key)
            switch.text = label
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_switch)

        updateSwitchLabel(switchMaterial, "label1")
        updateSwitchLabel(switchMaterial2, "label2")
        updateSwitchLabel(switchMaterial3, "label3")
        updateSwitchLabel(switchMaterial4, "label4")
        updateSwitchLabel(switchMaterial5, "label5")

        if (intent.hasExtra("enableLastSwitch")) {
            var enabled = intent.getStringExtra("enableLastSwitch").toBoolean()
            switchMaterial5.isEnabled = enabled
        }
    }
}
