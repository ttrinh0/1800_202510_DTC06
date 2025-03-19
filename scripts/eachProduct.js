function writeProducts() {
    //define a variable for the collection you want to create in Firestore to populate data

    const timHortons = ["FMAj2BiGSZdMUOyhd2fA", "H805KLm1ZWGvQ2QCdd2N"]
    const breka = ["iyrqHUb1OpjodEdZV1Zp", "nr9WjToY7qNgEOQNB7Gg"]
    for (i in timHortons) {
        var storeRef = db.collection("stores").doc(timHortons[i]).collection("products");
        storeRef.doc("Donut").set({
            store: "Tim Hortons",
            code: "c_donut",
            name: "Donut",
            price_before: 2.00,
            price_after: 1.00,
            quantity: 4,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Cookie").set({
            store: "Tim Hortons",
            code: "c_cookie",
            name: "Cookie",
            price_before: 2.00,
            price_after: 1.00,
            quantity: 3,
            time: "Monday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Muffin").set({
            store: "Tim Hortons",
            code: "c_muffin",
            name: "Muffin",
            price_before: 2.50,
            price_after: 1.25,
            quantity: 4,
            time: "Monday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Bagel").set({
            store: "Tim Hortons",
            code: "c_bagel",
            name: "Bagel",
            price_before: 2.25,
            price_after: 1.00,
            quantity: 3,
            time: "Thursday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };
    for (i in breka) {
        var storeRef = db.collection("stores").doc(breka[i]).collection("products");
        storeRef.doc("Donut").set({
            store: "Breka Bakery",
            code: "c_donut",
            name: "Donut",
            price_before: 2.00,
            price_after: 1.00,
            quantity: 4,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Cookie").set({
            store: "Breka Bakery",
            code: "c_cookie",
            name: "Cookie",
            price_before: 2.00,
            price_after: 1.00,
            quantity: 3,
            time: "Monday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Muffin").set({
            store: "Breka Bakery",
            code: "c_muffin",
            name: "Muffin",
            price_before: 2.50,
            price_after: 1.25,
            quantity: 4,
            time: "Monday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Bagel").set({
            store: "Breka Bakery",
            code: "c_bagel",
            name: "Bagel",
            price_before: 2.25,
            price_after: 1.00,
            quantity: 3,
            time: "Thursday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };

    const saveOn = ["tyahWbEI2wf0dNL4fHQu", "GAF04PBpq6yEcU7kQTI8"]
    for (i in saveOn) {
        var storeRef = db.collection("stores").doc(saveOn[i]).collection("products");

        storeRef.doc("Apple").set({
            store: "Save-on-Foods",
            code: "g_apple",
            name: "Apple",
            price_before: 3.50,
            price_after: 1.50,
            quantity: 3,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Orange").set({
            store: "Save-on-Foods",
            code: "g_orange",
            name: "Orange",
            price_before: 3.75,
            price_after: 1.50,
            quantity: 4,
            time: "Thursday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Cereal").set({
            store: "Save-on-Foods",
            code: "g_cereal",
            name: "Cereal",
            price_before: 5.99,
            price_after: 2.99,
            quantity: 5,
            time: "Friday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Bread").set({
            store: "Save-on-Foods",
            code: "g_bread",
            name: "Bread",
            price_before: 3.99,
            price_after: 1.99,
            quantity: 5,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };

    const jollibee = ["o7ZvbwVJ4uSP8adV92iT", "vZsAtwrRpc8veHq5czoj"]
    const freshslice = ["mIS23qiUQ05AirsQtxiL", "I3JOq94DSdqN4uzu5cgg"]
    for (i in jollibee) {
        var storeRef = db.collection("stores").doc(jollibee[i]).collection("products");

        storeRef.doc("Meal Set").set({
            store: "Jollibee",
            code: "r_meal_set",
            name: "Meal Set",
            price_before: 12.50,
            price_after: 5.25,
            quantity: 2,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Sandwich").set({
            store: "Jollibee",
            code: "r_sandwich",
            name: "Sandwich",
            price_before: 5.50,
            price_after: 2.50,
            quantity: 4,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Fries").set({
            store: "Jollibee",
            code: "r_fries",
            name: "Fries",
            price_before: 1.50,
            price_after: 0.99,
            quantity: 3,
            time: "Tomorrow",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };

    for (i in freshslice) {
        var storeRef = db.collection("stores").doc(freshslice[i]).collection("products");

        storeRef.doc("Pizza").set({
            store: "Freshslice Pizza",
            code: "r_pizza",
            name: "Pizza",
            price_before: 3.50,
            price_after: 1.25,
            quantity: 2,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Frozen Pizza").set({
            store: "Freshslice Pizza",
            code: "r_frozen_pizza",
            name: "Frozen Pizza",
            price_before: 12.50,
            price_after: 5.50,
            quantity: 4,
            time: "Friday",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
        storeRef.doc("Fries").set({
            store: "Freshslice Pizza",
            code: "r_fries",
            name: "Fries",
            price_before: 1.50,
            price_after: 0.99,
            quantity: 3,
            time: "Today",
            last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
        });
    };


}