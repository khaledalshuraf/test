// var winh = $(window).height(),
//          upper  = $('.upper-bar').innerHeight(),
//          nav    = $('.navbar').innerHeight();


// function () {
//    $('.slider').height(winh - (upper + nav))
// }

var bar = document.getElementsByClassName('upper-bar')[0];
var navbar = document.getElementsByClassName('navbar')[0];
var demo = document.getElementById('demo');



 var totalHight = parseInt(getComputedStyle(bar).height) + parseInt(getComputedStyle(navbar).height)

demo.style.height = (100 - totalHight) + 'vh';
