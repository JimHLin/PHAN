
function createUser() {

   
    firebase.auth().onAuthStateChanged(function(user){
         db.collection('users').doc(user.uid).onSnapshot(function (snap) {
             let boo = true;
        if(snap.get("counts") != null){
             boo = false;
        }
        db.collection("users").doc(user.uid).set(
    	{
        "name":user.displayName, 
        "email":user.email,
        
        },{ merge: true });
        if(boo){
             db.collection("users").doc(user.uid).set(
    	{
        "counts":0, 
        
        },{ merge: true });
        }
    });
    });}