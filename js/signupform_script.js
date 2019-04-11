/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/10/2019
   Date modified: 4/10/2019
   File Name: signupform_script.js
*/

// Runs when the document starts
$(document).ready(function() {

  $(this).submit(function(){
    alert("Thank you for signing up. You will be redirected back to the homepage in a moment...");
    $( "#homebtn" ).trigger( "click" );
    return false;
});

});
