export interface NativeDevMiddlewareConfig {
    /** Path to `adb`. Defaults to `adb` */
    androidCommandPath?: string;
    /** Path to `xcrun`. Defaults to `xcrun` */
    iosCommandPath?: string;
    /** How long before a command times out. Defaults to `10000` ms */
    timeout?: number;
}

export type FullConfig = Required<NativeDevMiddlewareConfig>;

export interface ResponseBody {
    message: string;
}
