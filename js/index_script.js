/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/5/2019
   Date modified: 4/6/2019
   File Name: index_script.js
*/


// Runs when the document starts
$(document).ready(function() {

});


// =====================================================================
// Toggles nav menu dropdowns
$("#menu").click(function() {
  if($("#navbars").is(":hidden")){
    $("#navbars").slideDown();
  } else {
    $("#navbars").slideUp();
  }
});

$("#loginbtn").click(function() {
  if($("#logindropdown").is(":hidden")){
    $("#logindropdown").slideDown();
  } else {
    $("#logindropdown").slideUp();
  }
});

$("#contactbtn").click(function() {
  if($("#contactdropdown").is(":hidden")){
    $("#contactdropdown").slideDown();
  } else {
    $("#contactdropdown").slideUp();
  }
});

$("#eventsbtn").click(function() {
  if($("#eventsdropdown").is(":hidden")){
    $("#eventsdropdown").slideDown();
  } else {
    $("#eventsdropdown").slideUp();
  }
});

$("#aboutusbtn").click(function() {
  if($("#aboutusdropdown").is(":hidden")){
    $("#aboutusdropdown").slideDown();
  } else {
    $("#aboutusdropdown").slideUp();
  }
});

$("#homebtn").click(function() {
  if($("#homedropdown").is(":hidden")){
    $("#homedropdown").slideDown();
  } else {
    $("#homedropdown").slideUp();
  }
});


// =====================================================================
// Enables navbar when screen is bigger than 960px
// Hides the mobile navbar when resizing from big to small
var resized = false;

$(window).resize(function(){
  if ($(window).width() >= em(60)){
    $("#navbars").slideDown(0);
    resized = true;
  } else if (resized == true){
    $("#navbars").slideUp(0);
    resized = false;
  }
});
