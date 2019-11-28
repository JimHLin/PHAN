function updateTimeC() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).onSnapshot(function (snap) {
            console.log('Current data is...', snap.data());
            if (snap.get("counts") != null)
                txt = snap.data()["counts"];
            else
                txt = 0;
            $("stuff").innerHTML = txt;

        });
    });
}
var counts = 0;
var ttcounts = 0;
var igcounts = 0;
var ytcounts = 0;
var fbcounts = 0;
var rdcounts = 0;
var otcounts = 0;

firebase.auth().onAuthStateChanged(function (user) {

    db.collection('users').doc(user.uid).onSnapshot(function (snap) {

        if (snap.get("counts") != null) {
            counts = snap.get("counts");
        }
        if (snap.get("ttcounts") != null) {
            ttcounts = snap.get("ttcounts");
        }
        if (snap.get("igcounts") != null) {
            igcounts = snap.get("igcounts");
        }
        if (snap.get("ytcounts") != null) {
            ytcounts = snap.get("ytcounts");
        }
        if (snap.get("fbcounts") != null) {
            fbcounts = snap.get("fbcounts");
        }
        if (snap.get("rdcounts") != null) {
            rdcounts = snap.get("rdcounts");
        }
        if (snap.get("otcounts") != null) {
            otcounts = snap.get("otcounts");
        }
        //                var graph = {
        //                    
        //                };
        //               $("test").css();
    });
});

function checkRads() {
    if (document.getElementById("ttrad").checked) {
        return 0;
    } else if (document.getElementById("igrad").checked) {
        return 1;
    } else if (document.getElementById("ytrad").checked) {
        return 2;
    } else if (document.getElementById("rdrad").checked) {
        return 3;
    } else if (document.getElementById("fbrad").checked) {
        return 4;
    } else if (document.getElementById("otrad").checked) {
        return 5;
    }
}

$(button1).click(function updateTimeS() {
    $("para").innerHTML = "hey";

    firebase.auth().onAuthStateChanged(function (user) {
        var val = 0;
        if (parseInt(document.getElementById("value").value) > 0) {
            val = parseInt(document.getElementById("value").value);
        }
        db.collection('users').doc(user.uid).set({
            "counts": (parseInt(counts) + val),
        }, {
            merge: true
        });

        if (checkRads() == 1) {
            db.collection('users').doc(user.uid).set({
                "igcounts": (parseInt(igcounts) + val),
            }, {
                merge: true
            });
        } else if (checkRads() == 2) {
            db.collection('users').doc(user.uid).set({
                "ytcounts": (parseInt(ytcounts) + val),
            }, {
                merge: true
            });
        } else if (checkRads() == 3) {
            db.collection('users').doc(user.uid).set({
                "rdcounts": (parseInt(rdcounts) + val),
            }, {
                merge: true
            });
        } else if (checkRads() == 4) {
            db.collection('users').doc(user.uid).set({
                "fbcounts": (parseInt(fbcounts) + val),
            }, {
                merge: true
            });
        } else if (checkRads() == 5) {
            db.collection('users').doc(user.uid).set({
                "otcounts": (parseInt(otcounts) + val),
            }, {
                merge: true
            });
        } else if (checkRads() == 0) {
            db.collection('users').doc(user.uid).set({
                "ttcounts": (parseInt(ttcounts) + val),
            }, {
                merge: true
            });
        }





    });
});
//Convenience.
document.getElementById("value").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $(button1).click();
    }
})
$(clear).click(function clear() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).set({
            "counts": 0,
            "ttcounts": 0,
            "rdcounts": 0,
            "igcounts": 0,
            "otcounts": 0,
            "fbcounts": 0,
            "ytcounts": 0,
        }, {
            merge: true

        });
    });
});
$("#logout").click(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            window.location.replace("sign-in.html");

        }).catch(function (error) {
            // An error happened.
        });
    });
})