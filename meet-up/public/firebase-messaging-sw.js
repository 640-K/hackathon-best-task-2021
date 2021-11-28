importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
   'messagingSenderId': "354835520589",
   'apiKey': 'BHTmol5rVjBkxYrfCoZXqHRYbsqY_5ox7P04YRp24CRADPAAps88NUy7YLhNzEscuIMSv2k3TObt3KTJ2r8HGS4',
   'projectId': "meet-up-hackathon",
   'appId': "1:354835520589:web:4b61a80814343260d75004",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();