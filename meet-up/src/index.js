import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {getToken, saveToken, messaging} from "./Firebase/main";

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function(registration) {
          saveToken().then(_=> console.log("Registration successful, scope is:"))
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
};

navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

ReactDOM.render(
    <React.StrictMode>
        <App registerServiceWorker={registerServiceWorker}/>
    </React.StrictMode>,
    document.getElementById('root')
);
