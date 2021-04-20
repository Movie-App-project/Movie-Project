"use strict";

// KEY //
var apitest = fetch(movieAPI)
console.log(apitest);

console.log(fetch(movieAPI));

fetch(movieAPI).then((response)=>{return response.json()})
	.then((jsonData)=>{
		console.log(jsonData);
		return jsonData.results;
	})



// MOVIE TITLE
var movieTitles = fetch(movieAPI).then((response)=>{return response.json()})
	.then((jsonData)=> {
		console.log(jsonData);
		jsonData.forEach((movie)=>console.log(`${movie.title} ${movie.genre}`))
	})
console.log(movieTitles);

//

// var titles = movieAPI.filter(function(movies){
// 	return movies.title;
// })
// console.log(titles);

$(document).ready(function(){
	$(".loadingdiv").css("display","none")


	$(window).load(function(){
		$("body").fadeIn(5);
	})

	// var currentMovies = $("#currentMovies").html(<ul>title</ul>)
	//







});