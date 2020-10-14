package flutter.company.com.flutter_storybook

import android.content.Intent
import android.os.Bundle
import io.flutter.app.FlutterActivity
import io.flutter.plugin.common.MethodChannel


class MainActivity : FlutterActivity() {
    private var sharedText: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val intent = intent
        val action = intent.action
        val type = intent.type
        if (Intent.ACTION_SEND == action && type != null) {
            if ("text/plain" == type) {
                sharedText = intent.getStringExtra(Intent.EXTRA_TEXT)
            }
        } else {
            // If appetize sends text another way, use their API
            val pageName = intent.getStringExtra("page")
            if(pageName != null) {
                sharedText = "{\"page\":\"$pageName\"}"
            }
        }
        MethodChannel(flutterView, "app.channel.shared.data").setMethodCallHandler { call, result ->
            if (call.method.contentEquals("getSharedData")) {
                result.success(sharedText)
                sharedText = null
            }
        }
    }
}