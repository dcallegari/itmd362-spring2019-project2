/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/8/2019
   Date modified: 4/8/2019
   File Name: custom_script.js
*/
//With the script we have, we can't implement 2 slideshows in 1 page-it bugs
//So made a quick bandaid solution-add a new script that refers to items with 2 appended
// Runs when the document starts
$(document).ready(function() {
  var slideshowLength2 = $("#image-list2 li").length - 1;
  var slideshowIndex2 = 0;

  $("#slideshow-leftbtn2").click(function(){
    goLeft2();
  })

  $("#slideshow-rightbtn2").click(function(){
    goRight2();
  })

  function goRight2(){
    hideCurrent2();
    if(slideshowIndex2<slideshowLength2){ ++slideshowIndex2;} 
    else { slideshowIndex2 = 0;}
    showNext2();
  }

  function goLeft2(){
    hideCurrent2();
    if(slideshowIndex2>0){ --slideshowIndex2;} 
    else { slideshowIndex2 = slideshowLength2;}
    showNext2();
  }

  function hideCurrent2(){
    $('#image-list2 li').eq(slideshowIndex2).removeClass("image-is-visible");
    $('#image-list2 li').eq(slideshowIndex2).addClass("image");
    $('#dots-list2 li').eq(slideshowIndex2).removeClass("dot-is-selected");
    $('#dots-list2 li').eq(slideshowIndex2).addClass("dot");
  }

  function showNext2(){
    $('#image-list2 li').eq(slideshowIndex2).addClass("image-is-visible");
    $('#image-list2 li').eq(slideshowIndex2).removeClass("image");
    $('#dots-list2 li').eq(slideshowIndex2).addClass("dot-is-selected");
    $('#dots-list2 li').eq(slideshowIndex2).removeClass("dot");
  }

});