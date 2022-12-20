import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAKo72RzDs-I-zJcMunLGBMYHDRclVBzyY",
  authDomain: "ecoh-dev-7fb87.firebaseapp.com",
  projectId: "ecoh-dev-7fb87",
  storageBucket: "ecoh-dev-7fb87.appspot.com",
  messagingSenderId: "546663657760",
  appId: "1:546663657760:web:09c415652ee72c21262745",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

console.log("Requesting permission...", messaging);
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Permission granted");

    getToken(messaging, {
      vapidKey:
        "BMcJB2o5OM7g5qOLkyWf35q7ZFt9tPkMuBGxJ60jlGydTZ6nWOv2qXpynhz0-IJPL0lA-nfKRVo9nZ5bCj_6uaY",
    }).then((currentToken) => {
      // onMessage(messaging, (payload) => {
      //   var obj = JSON.parse(payload.data.notification);
      // });
      if (currentToken) {
        console.log("current: ", currentToken);
      } else {
        console.log("No registration token available.");
      }
    });
  } else {
    console.log("Permission denied");
  }
});
