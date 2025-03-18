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


//------------------------------------------------
// Load carousel html components into other html
//-------------------------------------------------
function Carousel() {
    console.log($('.storeCarousel').load('./components/store_carousel.html'));
    console.log($('.storeProductCarousel').load('./components/store_product_carousel.html'));
}

Carousel();

//------------------------------------------------
// Load favourites carousel html components into other html
//-------------------------------------------------
function favourites() {
    console.log($('.favouritesCarousel').load('./components/favourites_carousel.html'));
    console.log($('.storeProductCarousel').load('./components/store_product_carousel.html'));
}

favourites();