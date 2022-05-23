
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAklV5JWuKde_d2yus7em3BnmbAqB432Lw",
  authDomain: "kwitter-webapp-243d9.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-243d9-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-243d9",
  storageBucket: "kwitter-webapp-243d9.appspot.com",
  messagingSenderId: "488417063895",
  appId: "1:488417063895:web:323e5902ac4fbd71765192"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose :"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -"+Room_names);
    row="<div class='room_name' id="+Room_names +"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
});});}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";

    //End code
}

getData();
