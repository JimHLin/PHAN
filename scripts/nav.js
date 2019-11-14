function createDoc(){
document.head.innerHTML += "<script src=\'http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>";
$(document).ready(function() {
            
var p1 = $("<p></p>");
var p2 = $("<p>Hello in a paragraph.</p>");
var p3 = $("<p class='highlight'>Something appended.</p>");
console.log(p1);
$("#content").append(p1, p2, p3);
$("#content").prepend("<span style='background: #29af90;'>prepended</span>");
$("#content").before("<div style='background: #ff9988;'><p>before</p></div>");
$("#content").after("<div style='background: #aaffaa;'><p>hello</p></div>");

        });
}
