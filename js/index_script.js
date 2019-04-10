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

  // ====================================================================
  // main buttons
  
  // ======== home button ========
  $("#homebtn").on({  
  
    mouseenter: function () {
      if ($(window).outerWidth() >= 960){
        $("#eventsdropdown").slideUp(200);
        $("#aboutusdropdown").slideUp(200);
        initialdrop = false;
      }
    },
	
    dblclick: function () {
      window.location.href='/itmd362-spring2019-project2/index.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='/itmd362-spring2019-project2/index.html'; // Go to home page
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
      window.location.href='/itmd362-spring2019-project2/aboutus.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='/itmd362-spring2019-project2/aboutus.html'; // go to home page
      } else {
        $("#eventsdropdown").slideUp();
        $("#homedropdown").slideUp();
        $("#aboutusdropdown").slideToggle();
      }
    } 
  })
  
  // === ABOUT SUBNAV ===
  $("#abouthisbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/history.html'; }
  })
  
  $("#aboutconbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/constitution.html'; }
  })
  
  $("#aboutdirbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/directors.html'; }
  })
  
  $("#aboutjourbtn").on({
    click: function () { window.location.href='/itmd362-spring2019-project2/about/journal.html'; }
  })
  
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
      window.location.href='/itmd362-spring2019-project2/events.html'; 
    },

    click: function () {
      if ($(window).outerWidth() >= 960){
        window.location.href='/itmd362-spring2019-project2/events.html'; // go to home page
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
    },
    
    click: function () { window.location.href='/itmd362-spring2019-project2/contact.html'; }

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
