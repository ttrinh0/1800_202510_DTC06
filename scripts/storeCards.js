// function displayCardsDynamically(collection) {
//     let cardTemplate = document.getElementById("storeCardTemplate");
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

function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("storeCardTemplate");
    db.collection(collection).get()
        .then(allStores => {
            allStores.forEach(doc => {
                var title = doc.data().name;
                var details = doc.data().details;
                // var storeCode = doc.data().code;
                var storeAddress = doc.data().address;
                // var storeType = doc.data().storetype;
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-address').innerHTML = storeAddress;
                // newcard.querySelector('.card-image').src = `./images/${storeCode}.jpg`;
                document.getElementById(collection + "-go-here").appendChild(newcard);
            })
        })

}

displayCardsDynamically("stores");
