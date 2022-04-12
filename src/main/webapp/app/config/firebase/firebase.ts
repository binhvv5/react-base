import firebase from 'firebase/app';
import 'firebase/messaging';
import { isBrowser } from 'react-device-detect';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.FCM_AUTH_DOMAIN,
  projectId: process.env.FCM_PROJECT_ID,
  storageBucket: process.env.FCM_STORAGE_BUCKET,
  messagingSenderId: process.env.FCM_MESSAGING_SENDER_ID,
  appId: process.env.FCM_APP_ID,
  measurementId: process.env.FCM_MEASUREMENT_ID,
};

let messaging = null;
if (isBrowser && process.env.NODE_ENV !== 'development') {
  firebase.initializeApp(firebaseConfig);
  messaging = firebase.messaging();
}

export const getToken = (callback: any) => {
  if (messaging) {
    return messaging
      .getToken({ vapidKey: process.env.REACT_APP_VAPID_KEY })
      .then(token => {
        if (token) {
          callback(token);
        } else {
          // eslint-disable-next-line no-console
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('An error occurred while retrieving token. ', err);
      });
  }
};

export const onMessageListener = () =>
  new Promise(resolve => {
    messaging?.onMessage(payload => {
      resolve(payload);
    });
  });
