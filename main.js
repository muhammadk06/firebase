// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpC2AYoyp2NImgDZrgmi_nC_4Xh0eLQJs",
    authDomain: "checklist-548f4.firebaseapp.com",
    databaseURL: "https://checklist-548f4-default-rtdb.firebaseio.com",
    projectId: "checklist-548f4",
    storageBucket: "checklist-548f4.firebasestorage.app",
    messagingSenderId: "277246536795",
    appId: "1:277246536795:web:0bc4333c624bdf01ec237e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
show()

  function add(){
    item = document.getElementById("in").value 
    firebase.database().ref("/").child(item).update({
      purpose: "adding message"
    });
    document.getElementById("in").value = ""
  show()
  }

  function show(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      item = childKey;
      row = "<div>"+ item +"</div>"
      document.getElementById("output").innerHTML += row
    });
    });
  }

  function del(){
    take = document.getElementById("in").value
    firebase.database().ref("/").child(take).remove();
    document.getElementById("in").value = ""
  }