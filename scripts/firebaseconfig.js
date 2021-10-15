
(function (window) {
    'use strict';
    var App = window.App || {};
    
      var FirebaseConfig = {
        apiKey: "AIzaSyAiIv4RyrX65ifFYC-ttCgzb80MyN1J2yE",
        authDomain: "coffeerun-af5a2.firebaseapp.com",
        projectId: "coffeerun-af5a2",
        storageBucket: "coffeerun-af5a2.appspot.com",
        messagingSenderId: "445704323943",
        appId: "1:445704323943:web:e008715fb43d3239eaa5c2",
        measurementId: "G-V25N7N7SHC"
      };
    
      // Initialize Firebase
      App.FirebaseConfig = FirebaseConfig;
      firebase.initializeApp(App.FirebaseConfig);

      window.App = App;
  
  })(window);