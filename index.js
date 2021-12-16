/**
 * @format
 */

/* import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
 */

 import PushNotificationIOS from '@react-native-community/push-notification-ios';
 import { AppRegistry } from 'react-native';
 import PushNotification from 'react-native-push-notification';
 import App from './App';
 import { name as appName } from './app.json';
import { notificationManager } from './src/NotificationManager';
 
 // Must be outside of any component LifeCycle (such as `componentDidMount`).
 PushNotification.configure({
   // (optional) Called when Token is generated (iOS and Android)
   onRegister: function (token) {
     console.log('TOKEN:', token);
    //  notificationManager.configure()
   },
 
   // (required) Called when a remote is received or opened, or local notification is opened
   onNotification: function (notification) {
     console.log('NOTIFICATION:', notification);
     const { channelId, title, message, data } = notification;
     console.log('channelId: ',channelId);
     console.log('title: ',title);
     console.log('message: ',message);
     console.log('data: ',data);
      // notificationManager.showNotification2()
      notificationManager.showNotification2(123, title, message, data );

     // process the notification
     // (required) Called when a remote is received or opened, or local notification is opened
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },
 
   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
   onAction: function (notification) {
     console.log('ACTION:', notification.action);
     console.log('NOTIFICATION:', notification);
     // process the action
   },
 
   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
   onRegistrationError: function (err) {
     console.error(err.message, err);
   },
 
   // IOS ONLY (optional): default: all - Permissions to register.
   permissions: {
     alert: true,
     badge: true,
     sound: true,
   },
 
   // Should the initial notification be popped automatically
   // default: true
 
   popInitialNotification: true,
 
    // * (optional) default: true
    // * - Specified if permissions (ios) and token (android and ios) will requested or not,
    // * - if not, you must call PushNotificationsHandler.requestPermissions() later
    // * - if you are not using remote notification or do not have Firebase installed, use this:
    // *     requestPermissions: Platform.OS === 'ios'
 
   requestPermissions: true,
 });
 
//  notificationManager.configure();




 AppRegistry.registerComponent(appName, () => App);