package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.chip.Chip
import kotlinx.android.synthetic.main.activity_chips.*

class ChipsActivity : AppCompatActivity() {
    private fun updateChipText(chip: Chip, key: String) {
        if (intent.hasExtra(key)) {
            var title = intent.getStringExtra(key)
            chip.text = title
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_chips)

        updateChipText(chip1, "chip1")
        updateChipText(chip2, "chip2")
        updateChipText(chip3, "chip3")
        updateChipText(chip4, "chip4")
    }
}
