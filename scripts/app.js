function updateTimeC() {
  // To ensure "user" is only referenced after it is assigned a value
  firebase.auth().onAuthStateChanged(function (user) {
    //When a change in "users.uid" is detected.
    db.collection('users').doc(user.uid).onSnapshot(function (snap) {
      console.log('Current data is...', snap.data());
      //displays the value for "time" in heading "stuff".
        if(snap.get("counts") != null)
            txt = snap.data()["counts"];
        else
            txt = 0;
      document.getElementById("stuff").innerHTML = txt;

    });
  });
}
