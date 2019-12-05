            var num =0;
            var list;
function updateTimeC() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).onSnapshot(function (snap) {
            console.log('Current data is...', snap.data());
            list = snap.data()["apps"];
            if(num < list.length){
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
            }
            //            if (snap.get("ttcounts") != null ){
            //                var tttxt = snap.data()["ttcounts"];
            //            per = ((tttxt/txt)*100) + "%";
            //              style = {
            //                    "position" : "relative",
            //                "width" : per
            //                };
            //                                var te = "#ttbar";
            //
            //            $(te).css(style); 
            //            }
            //            else{
            //                ttttxt = 0;
            //            $("#ttbar").css("width", "0%");
            //            }
            //            if (snap.get("ytcounts") != null){
            //                var yttxt = snap.data()["ytcounts"];
            //            per = ((yttxt/txt)*100) + "%";
            //              style = {
            //                    "position" : "relative",
            //                "width" : per
            //                };
            //            $("#ytbar").css(style); 
            //            }
            //            else{
            //                yttxt = 0;}
            //            if (snap.get("igcounts") != null){
            //              var  igtxt = snap.data()["igcounts"];
            //             per = ((igtxt/txt)*100) + "%";
            //                if((igtxt/txt).isNaN){
            //                console.log(igtxt/txt);
            //
            //                   style = {
            //                    "position" : "relative",
            //                "width" : "0%"
            //                };
            //                }else{
            //              style = {
            //                    "position" : "relative",
            //                "width" : per
            //                };}
            //                $("#igshow").html(igtxt + "mins, or " + (igtxt/60).toFixed(2) + " hrs. " + (igtxt/txt*100).toFixed(2) + "% of total time.");
            //            $("#igbar").css(style); 
            //            }
            //            else{
            //                igtxt = 0;}
            //            if (snap.get("rdcounts") != null){
            //               var rdtxt = snap.data()["rdcounts"];
            //             per = ((rdtxt/txt)*100) + "%";
            //              style = {
            //                    "position" : "relative",
            //                "width" : per
            //                };
            //            $("#rdbar").css(style);
            //            }
            //            else{
            //                rdtxt = 0;}
            //            if (snap.get("fbcounts") != null){
            //               var fbtxt = snap.data()["fbcounts"];
            //            var per = ((fbtxt/txt)*100) + "%";
            //                var test = document.getElementById("#fbbar");
            //            var style = {
            //                    "position" : "relative",
            //                "width" : per
            //                };
            //                $("#fbbar").css(style);
            //               
            //            }
            //            
            //            else{
            //                fbtxt = 0;
            //                
            //                
            //            }
            //            if (snap.get("otcounts") != null){
            //                ottxt = snap.data()["otcounts"];
            //                 per = ((ottxt/txt)*100) + "%";
            //              style = {
            //                    "position" : "relative",
            //                "width" : per
            //                };
            //            $("#otbar").css(style);
            //            }
            //            else{
            //                ottxt = 0;}
            //            }
            else {
                txt = 0;
            }
            $("#stuff").html(txt);

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

   
});

function checkRads() {
   var test = "app1";
for(var i = 0; i < list.length; i++){
    var id = ("app" + i);
    if(document.getElementById(id).checked){
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

//         db.collection('users').doc(user.uid).onSnapshot(function (snap) {
//
//        if (snap.get("counts") != null) {
//            counts = snap.get("counts");
//        }
       
//    });
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