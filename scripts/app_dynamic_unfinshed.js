//Unfinishd upgrade.
var num = 0;
var list;

function updateTimeC() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).onSnapshot(function (snap) {
            console.log('Current data is...', snap.data());
            list = snap.data()["apps"];
            if (num < list.length) {
                var urlist = snap.data()["URL"];
                var countlist = snap.data()["appCounts"];
                for (var i = 0; i < list.length; i++) {
                    //                    console.log(list[i]);
                    var id = ("app" + i);
                    //                    console.log(id);
                    var newdiv = $(document.createElement('div'));
                    //                    newdiv.attr("id", id);
                    var style = {
                        "padding": "0",
                        "width": "8%",
                        "display": "block",
                    };
                    var tes = $(document.createElement('img'));
                    tes.attr("src", urlist[i]);
                    $(tes).css(style);
                    var lab = $(" <label><input type='radio' id = " + id + "><img style = 'width : 80px' src=" + urlist[i] + "></label>");
                    var inp = $(document.createElement('input'));
                    inp.attr("type", "radio");
                    $("#rads").append(lab);

                    $("#results").append(tes);
                    $(newdiv).css("background-color", "gray");
                    $("#results").append(newdiv);

                }
                num = list.length;
            }
            if (snap.get("counts") != null) {
                txt = snap.data()["counts"];


            }
            if (snap.get("counts") != null) {
                txt = snap.data()["counts"];
            } else {
                txt = 0;
            }
            $("#stuff").html(txt);

        });
    });
}



function checkRads() {
    var test = "app1";
    for (var i = 0; i < list.length; i++) {
        var id = ("app" + i);
        if (document.getElementById(id).checked) {
            return id.substring(3);

        }
    }
    return 1;

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


        db.collection('users').doc(user.uid).set({
            "appCounts[checkRads()]": (parseInt(igcounts) + val),
        }, {
            merge: true
        });






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

        }, {
            merge: true

        });
    });
    location.reload();
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

function createUser() {


    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).onSnapshot(function (snap) {
            if (snap.get("counts") == null) {
                db.collection("users").doc(user.uid).set({
                    "apps": ["Instagram", "Twitter", "Reddit", "Youtube", "Facebook"],
                    "URL": ["https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg", "http://www.vectorsland.com/imgd/l62697-new-twitter-logo-49466.png", "https://www.redditinc.com/assets/images/site/reddit-logo.png", "https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png", "https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"],

                }, {
                    merge: true
                });
            }
            db.collection("users").doc(user.uid).set({
                "name": user.displayName,
                "email": user.email,

            }, {
                merge: true
            });

        });
    });
}