/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/5/2019
   Date modified: 4/6/2019
   File Name: index_script.js
*/

// Runs when the document starts
$(document).ready(function() {
  var initialdrop = false;

  // ======== Toggles nav menu dropdowns ========
  $("#menu").click(function() {
    $("#navbars").slideToggle();
  });

  // ======== home button ========
  $("#homebtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960 && initialdrop == false){
        $("#homedropdown").slideDown(200, function(){ initialdrop = true;});
      } else if ($(window).outerWidth() >= 960) {
        $("#homedropdown").show();
        $("#eventsdropdown").hide();
        $("#aboutusdropdown").hide();
      }
    },

    dblclick: function () {
      window.location.href='index.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='index.html'; // go to home page
      } else {
        $("#eventsdropdown").slideUp();
        $("#aboutusdropdown").slideUp();
        $("#homedropdown").slideToggle();
      }
    } 

  })

  // ======== about us ========
  $("#aboutusbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960 && initialdrop == false){
        $("#aboutusdropdown").slideDown(200, function(){ initialdrop = true;});
        initialdrop = true;
      } else if ($(window).outerWidth() >= 960){
        $("#aboutusdropdown").show();
        $("#eventsdropdown").hide();
        $("#homedropdown").hide();
      }
    },

    dblclick: function () {
      window.location.href='aboutus.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='aboutus.html'; // go to home page
      } else {
        $("#eventsdropdown").slideUp();
        $("#homedropdown").slideUp();
        $("#aboutusdropdown").slideToggle();
      }
    } 
  })
  
  $("#abouthisbtn").onclick = function()
  
  // ======== events ========
  $("#eventsbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960 && initialdrop == false){
        $("#eventsdropdown").slideDown(200, function(){ initialdrop = true;});
        initialdrop = true;
      } else if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").show();
        $("#aboutusdropdown").hide();
        $("#homedropdown").hide();
      }
    },

    dblclick: function () {
      window.location.href='events.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='events.html'; // go to home page
      } else {
        $("#aboutusdropdown").slideUp();
        $("#homedropdown").slideUp();
        $("#eventsdropdown").slideToggle();
      }
    } 

  })

  // ======== contact ========
  $("#contactbtn").on({  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").slideUp(200);
        $("#aboutusdropdown").slideUp(200);
        $("#homedropdown").slideUp(200);
        initialdrop = false;
      }
    }

  })


  // ======== whole nav ========
  $("nav").on({  
    mouseenter: function () { },
    mouseleave: function () {
      if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").slideUp(200);
        $("#aboutusdropdown").slideUp(200);
        $("#homedropdown").slideUp(200);
        initialdrop = false;
      }
    }
  })
  
});


// =====================================================================
// Shows or hides the mobile navbar when resizing to larger screen
var resized = false;
$(window).resize(function(){
  // Hides mobile nav, but shows main nav
  if ($(window).outerWidth() >= 960 && resized == false){
    $("#navbars").show();
    $("#eventsdropdown").hide();
    $("#aboutusdropdown").hide();
    $("#homedropdown").hide();
    resized = true;
  } 
  // Hides main nav
  if($(window).outerWidth() < 960 && resized == true){
    $("#navbars").hide();
    $("#eventsdropdown").hide();
    $("#aboutusdropdown").hide();
    $("#homedropdown").hide();
    resized = false;
  }

});
