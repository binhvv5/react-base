importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyCVhWPXr8QUCrJ8zu-Fr6ZbzEqjnt9MUMY',
  authDomain: 'bao-quang-tu.firebaseapp.com',
  projectId: 'bao-quang-tu',
  storageBucket: 'bao-quang-tu.appspot.com',
  messagingSenderId: '413056847834',
  appId: '1:413056847834:web:f4c8cc3009f4aca8f3fae3',
  measurementId: 'G-JWYF6HBCP9',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/content/images/logo/infocity.png',
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
