function updateTimeC() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).onSnapshot(function (snap) {
            console.log('Current data is...', snap.data());
            if (snap.get("counts") != null) {
                txt = snap.data()["counts"];

            }
            if (snap.get("counts") != null) {
                txt = snap.data()["counts"];

                if (snap.get("ttcounts") != null) {
                    var tttxt = snap.data()["ttcounts"];
                    per = ((tttxt / txt) * 100) + "%";
                    style = {
                        "position": "relative",
                        "width": per
                    };
                    $("#ttshow").html(tttxt + "mins, or " + (tttxt / 60).toFixed(2) + " hrs. " + (tttxt / txt * 100).toFixed(2) + "% of total time.");
                    $("#ttbar").css(style);
                } else {
                    ttttxt = 0;
                    $("#ttbar").css("width", "0");
                    $("#ttbar").css("width", "0%");
                }
                if (snap.get("ytcounts") != null) {
                    var yttxt = snap.data()["ytcounts"];
                    per = ((yttxt / txt) * 100) + "%";
                    style = {
                        "position": "relative",
                        "width": per
                    };
                    $("#ytshow").html(yttxt + "mins, or " + (yttxt / 60).toFixed(2) + " hrs. " + (yttxt / txt * 100).toFixed(2) + "% of total time.");
                    $("#ytbar").css(style);
                } else {
                    yttxt = 0;
                    $("#ytbar").css("width", "0");
                }
                if (snap.get("igcounts") != null) {
                    var igtxt = snap.data()["igcounts"];
                    per = ((igtxt / txt) * 100) + "%";

                    style = {
                        "position": "relative",
                        "width": per
                    };
                    $("#igshow").html(igtxt + "mins, or " + (igtxt / 60).toFixed(2) + " hrs. " + (igtxt / txt * 100).toFixed(2) + "% of total time.");
                    $("#igbar").css(style);
                } else {
                    igtxt = 0;
                    $("#igbar").css("width", "0");
                }
                if (snap.get("rdcounts") != null) {
                    var rdtxt = snap.data()["rdcounts"];
                    per = ((rdtxt / txt) * 100) + "%";
                    style = {
                        "position": "relative",
                        "width": per
                    };
                    $("#rdshow").html(rdtxt + "mins, or " + (rdtxt / 60).toFixed(2) + " hrs. " + (rdtxt / txt * 100).toFixed(2) + "% of total time.");
                    $("#rdbar").css(style);
                } else {
                    rdtxt = 0;
                    $("#rdbar").css("width", "0");
                }
                if (snap.get("fbcounts") != null) {
                    var fbtxt = snap.data()["fbcounts"];
                    var per = ((fbtxt / txt) * 100) + "%";
                    var style = {
                        "position": "relative",
                        "width": per
                    };
                    $("#fbshow").html(fbtxt + "mins, or " + (fbtxt / 60).toFixed(2) + " hrs. " + (fbtxt / txt * 100).toFixed(2) + "% of total time.");
                    $("#fbbar").css(style);

                } else {
                    fbtxt = 0;
                    $("#fbbar").css("width", "0");

                }
                if (snap.get("otcounts") != null) {
                    ottxt = snap.data()["otcounts"];
                    per = ((ottxt / txt) * 100) + "%";
                    style = {
                        "position": "relative",
                        "width": per
                    };
                    $("#otshow").html(ottxt + "mins, or " + (ottxt / 60).toFixed(2) + " hrs. " + (ottxt / txt * 100).toFixed(2) + "% of total time.");
                    $("#otbar").css(style);
                } else {
                    ottxt = 0;
                    $("#otbar").css("width", "0");
                }
            } else {
                txt = 0;
            }
            $("#stuff").html(txt);
            $("#resall").html(txt + " mins, or " + (txt / 60).toFixed(2) + " hrs.");
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
    firebase.auth().onAuthStateChanged(function (user) {
        var val = 0;
        if (parseInt($("#value").val()) > 0) {
            val = parseInt($("#value").val());
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

        $("#value").val(0);




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
    location.reload();
});
$("#Christmas").click(function () {
    $(body).css("color", "green");
    $("#bio").css("color", "green");
    $("#name").css("color", "green");
    var backstyle = {
        "background-image": "url(./images/santa.jpg)",
        "background-size" : "100%,100%"
    };
    $(body).css(backstyle);
});
$("#logout").click(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            window.location.replace("index.html");

        }).catch(function (error) {
            // An error happened.
        });
    });
})