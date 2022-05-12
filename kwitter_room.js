
var firebaseConfig = {
            apiKey: "AIzaSyC-CbjWPnqXHSMuLgrY54IWykHIl0rWPWs",
            authDomain: "kwitter-3172a.firebaseapp.com",
            databaseURL: "https://kwitter-3172a-default-rtdb.firebaseio.com",
            projectId: "kwitter-3172a",
            storageBucket: "kwitter-3172a.appspot.com",
            messagingSenderId: "151041590468",
            appId: "1:151041590468:web:23a75aa4d1f114d500f591"
          };
          
          // Initialize Firebase
    
     firebase.initializeApp(firebaseConfig);
          user_name = localStorage.getItem("user_name");
          
          document.getElementById("user_name").innerHTML = "Welcome "  + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      conaole.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementsById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}