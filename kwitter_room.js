user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";  

    var firebaseConfig = {
        apiKey: "AIzaSyABUraSvGkQCT8OyZc-WiaEz2p6fIsMCzw",
        authDomain: "kwiter2-363f6.firebaseapp.com",
        projectId: "kwiter2-363f6",
        storageBucket: "kwiter2-363f6.appspot.com",
        messagingSenderId: "1098709457057",
        appId: "1:1098709457057:web:36917ef0d0078802dc38e0",
        measurementId: "G-TH39Z7SL49"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();