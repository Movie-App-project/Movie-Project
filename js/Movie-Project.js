"use strict";

console.log(fetch(movieAPI));

fetch(movieAPI).then((response)=>{return response.json()})
    .then((jsonData)=>{
        console.log(jsonData);
    return jsonData.results;
})
    .then((results)=>{
    results.forEach((movies)=>console.log(`${movies.title} ${movies.genre}`))
})
//     .catch(error => console.log('Error getting films.', error));