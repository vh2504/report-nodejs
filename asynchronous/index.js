function loadContentUrl(url, resolve) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        resolve(xhttp)
      }
    };

    xhttp.open("GET", url);
    // xhttp.open("GET", "info.txt");
    xhttp.send();
}


const url = "https://picsum.photos/200/300"

//Promise
const promise1 = new Promise((resolve, reject) => {
    loadContentUrl(url, resolve)
})

const promise2 = new Promise((resolve, reject) => {
    loadContentUrl(url, resolve)
})


promise1.then((xhttp) => {
    console.log("promise run");
    document.getElementById("img_1").setAttribute("src", xhttp.responseURL);
    return promise2;
}).then((xhttp2) => {
    document.getElementById("img_2").setAttribute("src", xhttp2.responseURL);
})
.catch((err) => {
    console.log(err);
})


// async/await
// const showImagesAsync = async () => {
//     const xhttp1 = await promise1
//     document.getElementById("img_1").setAttribute("src", xhttp1.responseURL);
    
//     const xhttp2 = await promise2
//     document.getElementById("img_2").setAttribute("src", xhttp2.responseURL);
// }

// showImagesAsync()


// callback

// const showImages = () => {
//     loadContentUrl(url, (xhttp1) => {
//         document.getElementById("img_1").setAttribute("src", xhttp1.responseURL);

//         loadContentUrl(url, (xhttp2) => {
//             document.getElementById("img_2").setAttribute("src", xhttp2.responseURL);
//         })
//     })
// }

// showImages();