import {View, Text, LogBox} from 'react-native';
import React from 'react';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import MainNav from './src/navigation';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <AlertNotificationRoot theme="dark">
      <MainNav />
    </AlertNotificationRoot>
  );
};

export default App;

// Variant: debug
// Config: debug
// Store: /home/mubeen/Desktop/Presence_App_Frontend/android/app/debug.keystore
// Alias: androiddebugkey
// MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
// SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
// Valid until: Wednesday, May 1, 2052
// ----------
// Variant: release
// Config: debug
// Store: /home/mubeen/Desktop/Presence_App_Frontend/android/app/debug.keystore
// Alias: androiddebugkey
// MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
// SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
// Valid until: Wednesday, May 1, 2052
// ----------
// Variant: debugAndroidTest
// Config: debug
// Store: /home/mubeen/Desktop/Presence_App_Frontend/android/app/debug.keystore
// Alias: androiddebugkey
// MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
// SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
// Valid until: Wednesday, May 1, 2052
