//------------------------------------------------
// Call this function when the "logout" button is clicked
//-------------------------------------------------
function logout() {
    // Logs out the user
    firebase.auth().signOut().then(() => {
        localStorage.clear();
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
    // Loads the store cards into the html
    console.log($('.storeCarousel').load('./components/store_carousel.html'))
    console.log($('.storeCards').load('./components/store_page_stores.html'))
    console.log($('.storeProductCarousel').load('./components/store_product_carousel.html'));
}
Carousel();

//------------------------------------------------
// Load favourites carousel html components into other html
//-------------------------------------------------
function favourites() {
    // Loads favourites
    console.log($('.favouritesCarousel').load('./components/favourites_carousel.html'));
    console.log($('.storeProductCarousel').load('./components/store_product_carousel.html'));
}

favourites();