
function createUser() {

   
    firebase.auth().onAuthStateChanged(function(user){
         db.collection('users').doc(user.uid).onSnapshot(function (snap) {
             let boo = true;
        if(snap.get("counts") == null){
             db.collection("users").doc(user.uid).set(
    	{
        "apps": ["Instagram", "Twitter", "Reddit", "Youtube", "Facebook"], 
        "URL": ["https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg","http://www.vectorsland.com/imgd/l62697-new-twitter-logo-49466.png", "https://www.redditinc.com/assets/images/site/reddit-logo.png", "https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png", "https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" ],
        
        },{ merge: true });
        }
        db.collection("users").doc(user.uid).set(
    	{
        "name":user.displayName, 
        "email":user.email,
        
        },{ merge: true });
      
    });
    });}