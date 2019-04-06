/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/5/2019
   Date modified: 4/6/2019
   File Name: index_script.js
*/


// Runs when the document starts
$(document).ready(function() {

  // ======== Toggles nav menu dropdowns ========
  $("#menu").click(function() {
    $("#navbars").slideToggle();
  });
  
  $("#eventsbtn").click(function() {
    $("#contactdropdown").slideUp();
    $("#aboutusdropdown").slideUp();
    $("#homedropdown").slideUp();
    $("#eventsdropdown").slideToggle();
  });

  $("#aboutusbtn").click(function() {
    $("#contactdropdown").slideUp();
    $("#eventsdropdown").slideUp();
    $("#homedropdown").slideUp();
    $("#aboutusdropdown").slideToggle();
  });

  $("#homebtn").click(function() {
    $("#contactdropdown").slideUp();
    $("#eventsdropdown").slideUp();
    $("#aboutusdropdown").slideUp();
    $("#homedropdown").slideToggle();
  });

});


// =====================================================================
// Shows or hides the mobile navbar when resizing to larger screen
var resized = false;
$(window).resize(function(){
  if ($(window).outerWidth() >= 960){
    $("#navbars").show();
    resized = true;
  } else if (resized == true){
    $("#navbars").hide();
    $("#contactdropdown").hide();
    $("#eventsdropdown").hide();
    $("#aboutusdropdown").hide();
    $("#homedropdown").hide();
    resized = false;
  }
});
