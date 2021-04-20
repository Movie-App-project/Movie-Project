"use strict";

console.log(fetch(movieAPI));

fetch(movieAPI).then((response)=>{return response.json()})
    .then((jsonData)=>{
        console.log(jsonData);
    return jsonData.results;
})
//     .then((results)=>{
//     results.forEach((film)=>console.log(`${film.title} ${film.episode_id}`))
// })
//     .catch(error => console.log('Error getting films.', error));