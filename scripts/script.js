//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("logging out user");
    }).catch((error) => {
        // An error happened.
    });
}


//-----------------------------------------------
// Create a "max" number of hike document objects
//-----------------------------------------------
function writeHikeLoop(max) {
    //define a variable for the collection you want to create in Firestore to populate data
    var storesRef = db.collection("stores");
    for (i = 1; i <= max; i++) {
        storesRef.add({ //add to database, autogen ID
            name: "hike" + i,
            details: "Elmo says this hike is amazing!  You will love going on hike" + i,
            lat: 49 + i,    //randomly different
            lng: -122 + i,  //randomly different
            last_updated: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
}


//------------------------------------------------
// Load carousel html components into other html
//-------------------------------------------------
function Carousel() {
    console.log($('.storeCarousel').load('./components/store_carousel.html'));
    console.log($('.storeProductCarousel').load('./components/store_product_carousel.html'));
}

// writeHikeLoop(1)
Carousel();
