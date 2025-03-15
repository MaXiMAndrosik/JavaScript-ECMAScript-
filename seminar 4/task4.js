// Переписать код с XMLHttpRequest на fetch.

// npm install node-fetch
// import fetch from "node-fetch";

// npm install node-fetch@2
const fetch = require("node-fetch");

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });


async function loadData(url) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return await response.json(); // parses JSON response into native JavaScript objects
}

loadData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        console.log(data);
    });
