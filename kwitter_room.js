const firebaseConfig = {
apiKey: "AIzaSyBsGoR_H_zBqdIR1ZizXbX8badMILjja2c",
authDomain: "project-storage-93.firebaseapp.com",
databaseURL: "https://project-storage-93-default-rtdb.firebaseio.com",
projectId: "project-storage-93",
storageBucket: "project-storage-93.appspot.com",
messagingSenderId: "1072830981583",
appId: "1:1072830981583:web:0789000002cc2670d9deba",
measurementId: "G-Z6GVHV9NZ8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
