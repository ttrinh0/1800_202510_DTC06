function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("storeCardTemplate");
    let result = document.getElementById(collection + "-go-here")
    console.log("hi", cardTemplate);
    var gallery = `<article id="gallery" class="main-gallery js-flickity"
            data-flickity-options='{ "contain": true, "wrapAround": true }'>`;
    for (i = 0; i < 5; i++) {
        gallery += `<div class="gallery-cell w-96 mx-2 bg-black">hi</div>`
    }
    gallery += `</article>`;
    console.log(gallery)
    result.innerHTML = gallery;
}

displayCardsDynamically("stores");


// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("storeCardTemplate");
//     console.log("hi", cardTemplate);
//     gallery = `<article id="gallery" class="main-gallery js-flickity"
//             data-flickity-options='{ "contain": true, "wrapAround": true }'>`;
//     db.collection(collection).get()
//         .then(allStores => {
//             allStores.forEach(doc => {
//                 var title = doc.data().name;
//                 var details = doc.data().details;
//                 // var storeCode = doc.data().code;
//                 var storeAddress = doc.data().address;
//                 // var storeType = doc.data().storetype;
//                 let newcard = cardTemplate.content.cloneNode(true);
//                 newcard.querySelector('.card-title').innerHTML = title;
//                 newcard.querySelector('.card-text').innerHTML = details;
//                 newcard.querySelector('.card-address').innerHTML = storeAddress;
//                 // newcard.querySelector('.card-image').src = `./images/${storeCode}.jpg`;
//                 document.getElementById(collection + "-go-here").appendChild(newcard);
//             })
//         })

// }

// displayCardsDynamically("stores");
