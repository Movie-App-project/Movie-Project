"use strict";

// KEY //
var apitest = fetch(movieAPI)
console.log(apitest);

fetch(movieAPI)
    .then(response => console.log(response))
    .catch(error => console.log(error));




// $(document).ready(function(){
// 	$(".loadingdiv").css("display","none")
//
//
// 	$(window).load(function(){
// 		$("body").fadeIn(5);
// 	})
//
//
//
//
//
//
//
//
// });