var currentUser;

function updateBookmark(storeDocID) {
    currentUser.get().then(userDoc => {
        var bookmarks = userDoc.data().bookmarks;
        console.log(userDoc.data());
        if (bookmarks && bookmarks.includes(storeDocID)) {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayRemove(storeDocID)
            })
                .then(() => {
                    console.log("bookmark has been removed for " + storeDocID);
                    let iconID = 'save-' + storeDocID;
                    document.getElementById(iconID).className = 'fa-regular fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';
                });
        } else {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayUnion(storeDocID)
            })
                .then(() => {
                    console.log("bookmark has been saved for " + storeDocID);
                    let iconID = 'save-' + storeDocID;
                    document.getElementById(iconID).className = 'fa-solid fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';
                });
        }
    });

}



function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("storeCardTemplate");
    db.collection(collection).limit(3).get()
        .then(allStores => {
            allStores.forEach(doc => {
                var title = doc.data().name;
                var details = doc.data().details;
                var docID = doc.id;
                var storeCode = doc.data().code;
                var storeAddress = doc.data().address;
                // var storeType = doc.data().storetype;
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-address').innerHTML = storeAddress;
                newcard.querySelector('a').href = "eachStoreLanding.html?docID=" + docID;
                newcard.querySelector('i').id = 'save-' + docID;   //guaranteed to be unique
                newcard.querySelector('i').onclick = () => updateBookmark(docID);
                currentUser.get().then(userDoc => {
                    //get the user name
                    var bookmarks = userDoc.data().bookmarks;
                    if (bookmarks && bookmarks.includes(docID)) {
                        document.getElementById('save-' + docID).className = 'fa-solid fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';
                    }
                })
                newcard.querySelector('.card-image').src = `./images/${storeCode}.jpg`;
                document.getElementById(collection + "-go-here").appendChild(newcard);
            })
        })

}

function displayCardsDynamicallyStorePage(collection) {
    let cardTemplate = document.getElementById("storeCardStoreTemplate");
    db.collection(collection).get()
        .then(allStores => {
            allStores.forEach(doc => {
                var title = doc.data().name;
                var details = doc.data().details;
                var docID = doc.id;
                var storeCode = doc.data().code;
                var storeAddress = doc.data().address;
                // var storeType = doc.data().storetype;
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-address').innerHTML = storeAddress;
                newcard.querySelector('a').href = "eachStoreLanding.html?docID=" + docID;
                newcard.querySelector('i').id = 'save-' + docID;   //guaranteed to be unique
                newcard.querySelector('i').onclick = () => updateBookmark(docID);
                currentUser.get().then(userDoc => {
                    //get the user name
                    var bookmarks = userDoc.data().bookmarks;
                    if (bookmarks && bookmarks.includes(docID)) {
                        document.getElementById('save-' + docID).className = 'fa-solid fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';
                    }
                })
                newcard.querySelector('.card-image').src = `./images/${storeCode}.jpg`;
                document.getElementById("storepage-storecards").appendChild(newcard);
            })
        })

}


function displayProductCardsDynamically(limit) {
    let stores = ["FMAj2BiGSZdMUOyhd2fA", "GAF04PBpq6yEcU7kQTI8", "I3JOq94DSdqN4uzu5cgg", "iyrqHUb1OpjodEdZV1Zp", "o7ZvbwVJ4uSP8adV92iT"]
    let storeID = stores[Math.floor(Math.random() * 5)]
    let cardTemplate = document.getElementById("storeProductCardTemplate");
    let i = 1;
    counter = 0
    if (localStorage.getItem('counter') === null) {
        localStorage.setItem('counter', 0)
    }
    else if ('counter' in localStorage) {
        var counter = parseInt(localStorage.getItem('counter'))
    }

    db.collection("stores").doc(storeID).collection("products").limit(limit).get()
        .then(allStores => {
            allStores.forEach(doc => {
                var title = doc.data().name;
                var store = doc.data().store;
                var timeget = doc.data().time;
                var p_before = doc.data().price_before.toFixed(2);
                var p_after = doc.data().price_after.toFixed(2);
                var itemCode = doc.data().code;
                let button = "button" + i;
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.product_button').id = "button" + i;
                newcard.querySelector('.time').innerHTML = timeget;
                newcard.querySelector('.store-title').innerHTML = store;
                newcard.querySelector('.p_before').innerHTML = p_before;
                newcard.querySelector('.p_after').innerHTML = p_after;
                newcard.querySelector('.card-image').src = `./images/${itemCode}.jpg`;
                document.getElementById("stores-products-go-here").appendChild(newcard);

                var addProduct = document.getElementById(button)
                let totalCart = []


                addProduct.addEventListener("click", function () {
                    productCart = `"${title}": { "quantity": 1, "store": "${store}", "price": "${p_after}", "img": "${itemCode}"}`
                    console.log(productCart)
                    x = ""
                    // Add first item
                    if (localStorage.getItem("secondServeCart") === null) {
                        firstItem = "{" + productCart + "}"
                        localStorage.setItem("secondServeCart", firstItem);
                        counter++;
                        localStorage.setItem('counter', counter)
                    }
                    // Add second item
                    else if ("secondServeCart" in localStorage) {
                        currentCart = localStorage.getItem("secondServeCart")
                        if (counter > 0) {
                            x = currentCart.substring(0, currentCart.length - 1)
                        }
                        totalCart.push(x);
                        totalCart.push(productCart);
                        totalCart.join(", ");
                        totalCart += "}";
                        localStorage.setItem("secondServeCart", totalCart);
                        x = "";
                        totalCart = [];
                        counter++;
                        localStorage.setItem('counter', counter);
                    }

                    addProduct.classList.replace("bg-white", "bg-green-500");

                    setTimeout(() => {
                        addProduct.classList.replace("bg-green-500", "bg-white");
                    }, "500");

                })
                i++;
            });
        });
};

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global
            console.log(currentUser);

            // the following functions are always called when someone is logged in
            displayCardsDynamically("stores");
            displayCardsDynamicallyStorePage("stores");
            displayProductCardsDynamically(4);
            // saveBookmark();

        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();



