
const firebaseConfig = {
    apiKey: "AIzaSyDmuJeH9FpNdA2ONrsdpb2eKnJ3hJHKtr8",
    authDomain: "class-93-ec159.firebaseapp.com",
    projectId: "class-93-ec159",
    storageBucket: "class-93-ec159.appspot.com",
    messagingSenderId: "859103559418",
    appId: "1:859103559418:web:568464a20ed80670805343",
    measurementId: "G-YWS6EN61R9"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
