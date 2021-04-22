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

var movieArr
$(document).ready(function () {
    movieArr = []
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
                $(".moviechoice").append(`${rendermoviesid(movie)}`)
                // console.log(titleArr)
            })
        })
    $("#currentMovies").append(`<div>${movieArr}</div>`)
    console.log(movieArr)
});



// $(".moviechoice").click(function(event){
//     event.preventDefault();
//
//
//     let myMovies = {id: movieid};
//
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(myMovies)
//     };
//     fetch(movieAPI, options).then((response) => console.log(response))
// })

function rendermoviesid(movie) {
        let movieid = "<option>";
        movieid += `${movie.title}`;
        movieid += `</option>`;
        return movieid;
}



function renderMovies(movie) {
    let html = "<div>";
    html += `<div>${movie.title}</div>`;
    // html += `<div>${movie.year}</div>`;
    // html += `<div>${movie.genre}</div>`;
    html += `<div>${movie.rating}</div>`;
    html += `<div data-id="${movie.id}"></div>`
    // html += `<button class="delete">x</button>`
    // html += `<button class="edit">edit</button>`
    html += "</div>";
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
    fetch(movieAPI, options).then((response) => location.reload())
})



$("option").on('click', 'button.delete', function(){
    // let deleteMethod = {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
    // var target = $('<div></div>').click(function(){
    //     console.log(this)
    // })

    // fetch(movieAPI + `/10`, deleteMethod).then(function(response){
    //     console.log(response);
    // })


    console.log($(this).prev())

})

$("#edit").click(function(){
    let deleteMethod = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }
    // var target = $('<div></div>').click(function(){
    //     console.log(this)
    // })

    fetch(movieAPI + `/6`, deleteMethod).then(function(response){
        console.log(response);
    })
    console.log("test")
})

// $('option').click(function(e){
//     // console.log($(e.target).val());
//
// })