import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {getToken, getTokens, messaging} from "./Firebase/main";


const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function(registration) {
        console.log("Registration successful, scope is:", getTokens());
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
};
registerServiceWorker()
navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
