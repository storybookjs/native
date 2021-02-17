package com.intuit.august2020.storybookdemoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_card.*

class CardActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_card)

        if (intent.hasExtra("title")) {
            var title = intent.getStringExtra("title");
            cardTitle.text = title;
        }

        if (intent.hasExtra("subtitle")) {
            var title = intent.getStringExtra("subtitle");
            cardSubtitle.text = title;
        }

        if (intent.hasExtra("body")) {
            var title = intent.getStringExtra("body");
            cardSupportingText.text = title;
        }

        if (intent.hasExtra("action1")) {
            var title = intent.getStringExtra("action1");
            action1.text = title;
        }

        if (intent.hasExtra("action2")) {
            var title = intent.getStringExtra("action2");
            action2.text = title;
        }
    }
}
