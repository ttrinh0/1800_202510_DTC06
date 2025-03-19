function displayStoreInfo() {
    let params = new URL(window.location.href); //get URL of search bar
    let ID = params.searchParams.get("docID"); //get value for key "id"
    console.log(ID);

    // doublecheck: is your collection called "Reviews" or "reviews"?
    // spelling matters
    db.collection("stores")
        .doc(ID)
        .get()
        .then(doc => {
            // thisHike = doc.data();
            // hikeCode = thisHike.code;
            storeName = doc.data().name;

            // only populate title, and image
            document.getElementById("storeName").innerHTML = storeName;
            // let imgEvent = document.querySelector(".hike-img");
            // imgEvent.src = "../images/" + hikeCode + ".jpg";
        });
}
displayStoreInfo();