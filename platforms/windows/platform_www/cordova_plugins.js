cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-device.DeviceProxy",
        "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "id": "cordova-plugin-x-toast.Toast",
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.tests",
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "pluginId": "cordova-plugin-x-toast"
    },
    {
        "id": "cordova-plugin-x-toast.ToastProxy",
        "file": "plugins/cordova-plugin-x-toast/src/windows/toastProxy.js",
        "pluginId": "cordova-plugin-x-toast",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-badge.Badge",
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "id": "cordova-plugin-badge.Badge.Proxy",
        "file": "plugins/cordova-plugin-badge/src/windows/BadgeProxy.js",
        "pluginId": "cordova-plugin-badge",
        "runs": true
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Core",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Util",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
        "pluginId": "cordova-plugin-local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Proxy",
        "file": "plugins/cordova-plugin-local-notification/src/windows/LocalNotificationProxy.js",
        "pluginId": "cordova-plugin-local-notification",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-x-toast": "2.6.0",
    "cordova-plugin-badge": "0.8.5",
    "cordova-plugin-local-notification": "0.9.0-beta.1"
};
// BOTTOM OF METADATA
});