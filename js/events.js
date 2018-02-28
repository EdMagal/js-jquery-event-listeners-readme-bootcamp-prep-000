//define functions here
function getIt() {
  $("p").on("click", function(){
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function(){
    $(this).addClass("tasty")
  });
}

function pressIt() {
  $("#typing").on("keydown", function(){
    if(event.which==71) alert("You have found my G spot.");
  });
}

function submitIt() {
   $("form").on("submit", function(){
     alert("Your form is going to be submitted now.");
   });
}

$(document).ready(function(){

frameIt();
pressIt();
getIt();
submitIt();
});