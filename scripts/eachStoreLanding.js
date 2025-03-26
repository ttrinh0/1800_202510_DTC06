function displayStoreInfo() {
    let params = new URL(window.location.href); //get URL of search bar
    let ID = params.searchParams.get("docID"); //get value for key "id"
    console.log(ID);


    db.collection("stores")
        .doc(ID)
        .get()
        .then(doc => {
            thisStore = doc.data();
            storeCode = thisStore.code;
            storeName = doc.data().name;
            storeDetails = thisStore.details;
            // storeProducts = thisStore.collection("products");


            // populate with store info
            document.getElementById("storeName").innerHTML = storeName;
            document.getElementById("storeDetails").innerHTML = storeDetails;
            let imgEvent = document.querySelector(".hike-img");
            imgEvent.src = "../images/" + storeCode + ".jpg";

            // populate with products
        });
}
function displayProductCardsDynamically(limit) {
    let params = new URL(window.location.href);
    let ID = params.searchParams.get("docID");
    let cardTemplate = document.getElementById("storeProductCardTemplate");
    let i = 1;
    db.collection("stores").doc(ID).collection("products").limit(limit).get()
        .then(allStores => {
            allStores.forEach(doc => {
                var title = doc.data().name;
                var store = doc.data().store;
                var timeget = doc.data().time;
                var p_before = doc.data().price_before.toFixed(2);
                var p_after = doc.data().price_after.toFixed(2);
                var itemCode = doc.data().code;
                var button = "button" + i;
                var cartItem = 'secondServeCart' + i
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
                console.log("addProduct", addProduct)
                addProduct.addEventListener("click", function () {
                    productCart = `{ "${title}": { "quantity": 1, "store": "${store}", "price": "${p_after}", "img": "${itemCode}" } }`
                    console.log(productCart)
                    localStorage.setItem(cartItem, productCart);

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
            displayStoreInfo()
            displayProductCardsDynamically(4);

        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}
doAll();
