



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


// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("storeCardTemplate");
//     let result = document.getElementById(collection + "-go-here")
//     console.log("hi", cardTemplate);
//     var gallery = `<article id="gallery" class="main-gallery js-flickity"
//             data-flickity-options='{ "contain": true, "wrapAround": true }'>`;
//     for (i = 0; i < 5; i++) {
//         gallery += `<div class="gallery-cell w-96 mx-2 bg-black">hi</div>`
//     }
//     gallery += `</article>`;
//     console.log(gallery)
//     result.innerHTML = gallery;
// }


// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("storeCardTemplate");
//     // gallery = document.createElement("article");
//     gallery = `<article id="gallery" class="main-gallery js-flickity"
//     data-flickity-options='{ "contain": true, "wrapAround": true }'>`;
//     result = document.getElementById(collection + "-go-here")
//     stores = document.createElement("div");
//     db.collection(collection).get()
//         .then(allStores => {
//             allStores.forEach(doc => {
//                 var title = doc.data().name;
//                 var details = doc.data().details;
//                 // var storeCode = doc.data().code;
//                 var storeAddress = doc.data().address;
//                 // var storeType = doc.data().storetype;
//                 let newcard = document.importNode(cardTemplate, true);
//                 newcard.querySelector('.card-title').innerHTML = title;
//                 newcard.querySelector('.card-text').innerHTML = details;
//                 newcard.querySelector('.card-address').innerHTML = storeAddress;
//                 // newcard.querySelector('.card-image').src = `./images/${storeCode}.jpg`;
//                 result.appendChild(newcard);
//             });
//         });
//     gallery += stores
//     gallery += `</article>`;
//     result.innerHTML = gallery
// }

// displayCardsDynamically("stores");

// function displayCardsDynamically(collection) {
//     // let cardTemplate = document.getElementById("storeCardTemplate");
//     // gallery = document.createElement("article");
//     gallery = ""
//     // gallery += `<article>`
//     stores = ""
//     // gallery = `< article id = "gallery" class="main-gallery js-flickity"
//     //     data-flickity-options='{ "contain": true, "wrapAround": true }'>`;
//     result = document.getElementById(collection + "-go-here")
//     db.collection(collection).get()
//         .then(allStores => {
//             allStores.forEach(doc => {
//                 var title = doc.data().name;
//                 var details = doc.data().details;
//                 var storeAddress = doc.data().address;
//                 // stores += `<p>${title}</p>`
//                 // console.log("a", stores)
//                 stores =
//                     `<div class="gallery-cell relative mx-6 rounded-md md:w-[400px] w-fit overflow-hidden drop-shadow-md">
//                         <img src="/images/cafe.jpg" class="absolute -z-10 object-cover object-center">

//                         <!-- TEXT  -->
//                         <div class="text-white transition-all group">
//                             <div
//                                 class="mt-10 bg-black/60 border-black p-4 pt-2 pb-6 md:translate-y-26 md:group-hover:translate-y-0 md:transition">
//                                 <div class="flex justify-between">
//                                     <h1 class="card-title text-lg font-semibold">${title}</h1>
//                                     <h3 class="font-semibold text-right">3 Offers Left</h3>
//                                 </div>
//                                 <hr class="my-2 opacity-30">
//                                 <p class="card-address my-2">${storeAddress}</p>
//                                 <p
//                                     class="card-text mt-2 mb-6 text-sm/tight opacity-80 md:transition-all md:opacity-0 md:group-hover:opacity-80 md:invisible md:group-hover:visible">
//                                     ${details}
//                                 </p>
//                                 <div class="flex justify-between">
//                                     <a href="#"
//                                         class="md:opacity-0 md:group-hover:opacity-100 bg-black/50 text-white font-semibold border-2 py-2 px-4 rounded-lg hover:bg-black transition">Visit
//                                         Store Page</a>
//                                     <a href="#"
//                                         class="md:opacity-0 md:group-hover:opacity-100 bg-green-600/50 text-white font-semibold border-2 py-2 px-4 rounded-lg hover:bg-green-900 transition">Add
//                                         to Favourite</a>
//                                 </div>
//                             </div>
//                         </div>`
//             });
//         }),
//         .then((stores) => {
//             gallery += stores
//         });
//     // gallery += `</article>`;

// }

displayCardsDynamically("stores");

// function displayCardsDynamically(collection) {

//     result = document.getElementById(collection + "-go-here")
//     gallery = ""

//     db.collection(collection).get()
//         .then(allStores => {
//             allStores.forEach(doc => {
//                 var title = doc.data().name;
//                 gallery += `<p>${title}</p> `
//             });
//             result.innerHTML = gallery;
//         });

// }

displayCardsDynamically("stores");