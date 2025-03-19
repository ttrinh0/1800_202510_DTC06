
//------------------------------------------------
// Get current documents
//-------------------------------------------------
// function writeStores() {

//     var store = db.collection("stores").get()
//         .then(allStores => {

//             // Iterate through each document, copy and store objects
//             allStores.forEach(doc => {
//                 console.log("Document data:", doc.data())
//                 })
//             });
//         }
// writeStores();

//------------------------------------------------
// Generate random lattitude and longitude
//------------------------------------------------
function randomLat() {
    var lat = 49 + Math.random()
    return lat
}
function randomLng_for123() {
    var lng = -123 + Math.random()
    return lng
}
function randomLng_for122() {
    var lng = -122 + Math.random()
    return lng
}

//------------------------------------------------
// Write more store documents into database
//------------------------------------------------
function writeStores() {
    var storesRef = db.collection("stores");
    storesRef.add({
        address: "607 Dunsmuir St, Vancouver, BC V6B 3H6",
        code: "TH",
        details: "Canadian chain for signature premium-blend coffee, plus light fare, pastries & breakfast sandwiches.",
        lat: randomLat(),
        lng: randomLng_for122(),
        name: "Tim Hortons",
        storetype: "cafe"
    });

    storesRef.add({
        address: "549 W Pender St, Vancouver, BC V6B 6H4",
        code: "FSP",
        details: "Freshslice Pizza is a Canadian pizza chain and franchise founded by Ray Russell in 1999.",
        lat: randomLat(),
        lng: randomLng_for123(),
        name: "Freshslice Pizza",
        storetype: "restaurant"
    });

    storesRef.add({
        address: "855 Davie St, Vancouver, BC V6Z 1B7",
        code: "BB",
        details: "Breka Bakery & Café is a local family business born in 2006 in the lively Vancouver neighbourhood of Sunset",
        lat: randomLat(),
        lng: randomLng_for123(),
        name: "Breka Bakery",
        storetype: "cafe"
    });

    storesRef.add({
        address: "833 Granville St, Vancouver, BC V6B 2C9",
        code: "JB",
        details: "Popular Philippines-based chain globally known for its famed fried chicken, spaghetti & burgers.",
        lat: randomLat(),
        lng: randomLng_for122(),
        name: "Jollibee",
        storetype: "restaurant"
    });

    storesRef.add({
        address: "2308 Cambie St, Vancouver, BC V5Z 2T8",
        code: "SOF",
        details: "Save-On-Foods is a chain of supermarkets located across Western Canada. Canadian Owned and Operated for 110 Years. ",
        lat: randomLat(),
        lng: randomLng_for122(),
        name: "Save-On-Foods",
        storetype: "grocery"
    });
}
// writeStores(); Uncomment to create more store listings