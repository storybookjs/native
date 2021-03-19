package flutter.company.com.flutter_storybook;

import android.net.Uri;

import org.json.JSONException;
import org.json.JSONObject;

public class JsonUtils {

    public static String convertQueryStringToJSON(Uri uri) throws JSONException {
        JSONObject object = new JSONObject();
        for (String param : uri.getQueryParameterNames()) {
            object.put(param, uri.getQueryParameter(param));
        }

        return object.toString();
    }

}
