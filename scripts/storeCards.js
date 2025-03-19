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

function displayProductCardsDynamically(collection) {

    let cardTemplate = document.getElementById("storeProductCardTemplate");
    db.collection("stores").doc("H805KLm1ZWGvQ2QCdd2N").collection("products").limit(4).get()
        .then(allStores => {
            allStores.forEach(doc => {
                var title = doc.data().name;
                var store = doc.data().store;
                var timeget = doc.data().time;
                var p_before = doc.data().price_before.toFixed(2)
                var p_after = doc.data().price_after.toFixed(2)
                var itemCode = doc.data().code;
                let newcard = cardTemplate.content.cloneNode(true);
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.time').innerHTML = timeget;
                newcard.querySelector('.store-title').innerHTML = store;
                newcard.querySelector('.p_before').innerHTML = p_before;
                newcard.querySelector('.p_after').innerHTML = p_after;
                newcard.querySelector('.card-image').src = `./images/${itemCode}.jpg`;
                document.getElementById("stores-products-go-here").appendChild(newcard);
            })
        })
}

function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid); //global
            console.log(currentUser);

            // the following functions are always called when someone is logged in
            displayCardsDynamically("stores");
            displayProductCardsDynamically("stores");
            // saveBookmark();

        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();