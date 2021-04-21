"use strict"

// KEY //

// fetch(movieAPI).then((response) => {
//     return response.json()
// })
//     .then((jsonData) => {
//         console.log(jsonData);
//         return jsonData.results;
//     })


// // MOVIE TITLE
// var movieTitles = fetch(movieAPI).then((response) => {
//     return response.json()
// })
//     .then((jsonData) => {
//         console.log(jsonData);
//         jsonData.forEach((movie) => console.log(`${movie.title} ${movie.genre}`))
//     })
// console.log(movieTitles);

var titleArr

$(document).ready(function () {
    titleArr = []
    // $(window).ready(function () {
    //     $("body").fadeIn(1000);
    // })
    fetch(movieAPI).then((response) => {
        // $(".loadingdiv").css("display", "none")
        $(".loadingdiv").fadeOut(1000)
        return response.json()
    })
        .then((jsonData) => {
            console.log(jsonData);
            jsonData.forEach(function(movie) {
                // titleArr.push(${movie.title} ${movie.genre})
                // console.log(renderMovies(movie));
                $("#currentMovies").append(`<div>${renderMovies(movie)}</div>`)
                // console.log(titleArr)
            })
        })
    $("#currentMovies").append(`<div>${titleArr}</div>`)
    console.log(titleArr)
});




function renderMovies(movie) {
    let html = "";
    html += `<div>${movie.title}</div>`;
    // html += `<div>${movie.year}</div>`;
    // html += `<div>${movie.genre}</div>`;
    html += `<div>${movie.rating}</div>`;

    return html;
}

$(".btn-primary").click(function(event){
    event.preventDefault();
    let movieTitle = $("#addMovie").val();
    let movieRating = $("#addRating").val();

    let myObj = {title: movieTitle, rating: movieRating};

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myObj)
    };
    fetch(movieAPI, options).then((response) => window.reload(response))
})





// function renderCoffees(coffees) {
//     var html = '';
//     for (var i = 0; i < coffees.length; i++) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

