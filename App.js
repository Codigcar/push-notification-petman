import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  /* fmcUnsubscribe = null;
  messaging()
    .requestPermission()
    .then(authStatus => {
      console.log('APNs Status: ', authStatus);
      if (
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus == messaging.AuthorizationStatus.PROVISIONAL
      ) {
        messaging()
          .getToken()
          .then(token => {
            console.log('token: ', token);
          });

        messaging().onTokenRefresh(token => {
          console.log('messaging.onTokenRefresh: ', token);
        });

        const foregroundSubscribe = messaging().onMessage(
          async remoteMessage => {
            Alert.alert(
              'A new FCM message arrived!',
              JSON.stringify(remoteMessage),
            );
          },
        );

        const topicSubscriber = messaging()
          .subscribeToTopic('carlos')
          .then(() => console.log('Tema asignato: Petman Test'));

        const backgroundSubscriber = messaging().setBackgroundMessageHandler(
          async remoteMessage => {
            console.log('en background: ', remoteMessage);
          },
        );
      }
    })
    .catch(err => {
      console.log('ERROR TOKEN ENVIADO: ', err);
    });
   */
  return (
    <View>
     <Text>Push Notifications</Text> 
    </View>
  )
}
export default App;