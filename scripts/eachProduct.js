function writeProducts() {
    //define a variable for the collection you want to create in Firestore to populate data
    
    const cafeLocations = ["H805KLm1ZWGvQ2QCdd2N", "nr9WjToY7qNgEOQNB7Gg"]
    for (i in cafeLocations) {
        var cafeRef = db.collection("stores").doc(cafeLocations[i]).collection("products");

        cafeRef.doc("Donut").set({
            code: "c_donut",
            name: "Donut",
            price_before: 2.00,
            price_after: 1.00,
            quantity: 4,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Cookie").set({
            code: "c_cookie",
            name: "Cookie",
            price_before: 2.00,
            price_after: 1.00,
            quantity: 5,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Muffin").set({
            code: "c_muffin",
            name: "Muffin",
            price_before: 2.50,
            price_after: 1.25,
            quantity: 3,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Bagel").set({
            code: "c_bagel",
            name: "Bagel",
            price_before: 2.25,
            price_after: 1.00,
            quantity: 2,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };

    const groceryLocations = ["tyahWbEI2wf0dNL4fHQu"]
    for (i in groceryLocations) {
        var cafeRef = db.collection("stores").doc(groceryLocations[i]).collection("products");

        cafeRef.doc("Apple").set({
            code: "g_apple",
            name: "Apple",
            price_before: 3.50,
            price_after: 1.50,
            quantity: 3,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Orange").set({
            code: "g_orange",
            name: "Orange",
            price_before: 3.75,
            price_after: 1.50,
            quantity: 4,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Cereal").set({
            code: "g_cereal",
            name: "Cereal",
            price_before: 5.99,
            price_after: 2.99,
            quantity: 5,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Bread").set({
            code: "g_bread",
            name: "Bread",
            price_before: 3.99,
            price_after: 1.99,
            quantity: 5,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };

    const restaurantLocations = ["mIS23qiUQ05AirsQtxiL", "vZsAtwrRpc8veHq5czoj"]
    for (i in restaurantLocations) {
        var cafeRef = db.collection("stores").doc(restaurantLocations[i]).collection("products");

        cafeRef.doc("Meal Set").set({
            code: "r_meal_set",
            name: "Meal Set",
            price_before: 12.50,
            price_after: 5.25,
            quantity: 2,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Sandwich").set({
            code: "r_sandwich",
            name: "Sandwich",
            price_before: 5.50,
            price_after: 2.50,
            quantity: 4,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        cafeRef.doc("Fries").set({
            code: "r_fries",
            name: "Fries",
            price_before: 1.50,
            price_after: 0.99,
            quantity: 3,
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };


};