function updateTimeC() {
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection('users').doc(user.uid).onSnapshot(function (snap) {
      console.log('Current data is...', snap.data());
        if(snap.get("counts") != null)
            txt = snap.data()["counts"];
        else
            txt = 0;
      document.getElementById("stuff").innerHTML = txt;

    });
  });
}
