"use strict";

fetch(movieAPI).then((response)=>{return response.json()})
    .then((jsonData)=>{
        console.log(jsonData);
    return jsonData.results;
});

