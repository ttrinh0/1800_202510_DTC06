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
                    let iconID = 'fave-' + storeDocID;
                    document.getElementById(iconID).className = 'fa-regular fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';
                })
                .then(() => {
                    window.location.reload();
                })
        } else {
            currentUser.update({
                bookmarks: firebase.firestore.FieldValue.arrayUnion(storeDocID)
            })
                .then(() => {
                    console.log("bookmark has been saved for " + storeDocID);
                    let iconID = 'fave-' + storeDocID;
                    document.getElementById(iconID).className = 'fa-solid fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';
                });
        }
    });

}


function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("storeCardTemplate");
    console.log(currentUser);
    db.collection(collection).get()
        .then(allStores => {
            allStores.forEach(doc => {
                currentUser.get().then(userDoc => {
                    //get the user name
                    var docID = doc.id;
                    var bookmarks = userDoc.data().bookmarks;
                    if (bookmarks && bookmarks.includes(docID)) {
                        var title = doc.data().name;
                        var details = doc.data().details;
                        var storeCode = doc.data().code;
                        var storeAddress = doc.data().address;
                        let newcard = cardTemplate.content.cloneNode(true);
                        newcard.querySelector('.card-title').innerHTML = title;
                        newcard.querySelector('.card-text').innerHTML = details;
                        newcard.querySelector('.card-address').innerHTML = storeAddress;
                        newcard.querySelector('.card-image').src = `./images/${storeCode}.jpg`;
                        newcard.querySelector('i').id = 'fave-' + docID;   //guaranteed to be unique
                        newcard.querySelector('i').onclick = () => updateBookmark(docID);
                        let faveIcon = newcard.querySelector('i'); // Reference the element directly
                        faveIcon.className = 'fa-solid fa-lg fa-bookmark my-auto mr-2 hover:cursor-pointer';

                        document.getElementById(collection + "-go-here").appendChild(newcard);
                    }
                })


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
            // saveBookmark();

        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();

