// function addItemToCart() {
//     title = document.getElementsByClassName('.card-title');
//     storename = document.getElementsByClassName('.store-title');
//     p_after = document.getElementsByClassName('.p_after');
//     productCart = { "Bagel": { "quantity": 1, "store": "Tim Hortons", "price": "1.00" } }
//     // store = cards.querySelector('.store-title')
//     // p_after = cards.querySelector('.store-title')
//     // return {
//     //     title: title.textContext
//     // }
//     localStorage.setItem('secondServeCart', JSON.stringify(productCart));
// }

function showItemInCart() {
    const cart = document.getElementById("cart")
    // for (i = 1; i < localStorage.length; i++) {

    //     productInfo = JSON.parse(localStorage.getItem("secondServeCart" + i))
    //     console.log("product", productInfo)
    //     title = Object.keys(productInfo)[0]
    //     price = Object.values(productInfo)[0]
    //     console.log("title", title)
    //     // console.log(i)
    //     console.log("price", price)
    // }

    localStorageLength = localStorage.length
    if (localStorageLength > 1) {
        cart.innerHTML = ""
        cart.classList.toggle("flex-grow")
    }
    let subtotal = 0
    for (var i = 1; i < (localStorage.length); i++) {
        var cartItem = 'secondServeCart' + i
        console.log(cartItem)
        productInfo = JSON.parse(localStorage.getItem(cartItem))
        console.log("product: ", productInfo)
        title = Object.keys(productInfo)[0]
        price = Object.values(productInfo)[0]["price"]
        img = Object.values(productInfo)[0]["img"]
        quantity = Object.values(productInfo)[0]["quantity"]
        subtotal += Number(price)
        console.log("title", title)
        console.log(i)
        console.log("price", price)

        let cartCard = `<div class="border-2 border-black/15 rounded-md bg-white drop-shadow-sm mt-4">
                        <div class="grid grid-cols-6 items-center text-center p-4">
                            <img src="/images/${img}.jpg" alt=""
                                class="border-2 border-black/10 drop-shadow-sm rounded-md object-cover object-center w-30 h-30">
                            <p class="name-item text-left col-span-2 ml-4">${title}</p>
                            <p>Quantity: <span>${quantity}</span></p>
                            <p>Price: <span>${price}</span></p>
                            <i class="drop-shadow-sm fa-solid fa-xmark fa-lg text-right mr-5"></i>
                        </div>
                    </div>`
        cart.innerHTML += cartCard;
    }
    cart.innerHTML += `Subtotal: ` + subtotal
}

function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            localStorage.setItem("currentUser", user.uid);
            console.log(user.uid);
            showItemInCart()
        }
    });
}

async function storeItemsToOrderHistory() {
    // Get the cart from local storage
    const cart = JSON.parse(localStorage.getItem("secondServeCart"));
    console.log("Cart:", cart);

    if (!cart || Object.keys(cart).length === 0) {
        alert("Cart is empty.");
        return;
    }

    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        alert("No user logged in.");
        return;
    }

    // Group items by store
    let ordersByStore = {};
    for (const itemName in cart) {
        const item = cart[itemName];
        const itemToAdd = { [itemName]: item.quantity };

        if (ordersByStore[item.store]) {
            ordersByStore[item.store].push(itemToAdd);
        } else {
            ordersByStore[item.store] = [itemToAdd];
        }
    }

    const todayDate = new Date().toISOString().slice(0, 10);

    // Use Firestore batch to add multiple order documents
    // Logic to use batch from DB was generated using AI
    const batch = db.batch();
    const ordersRef = db.collection("users").doc(currentUser).collection("orders");

    for (const store in ordersByStore) {
        const newOrderRef = ordersRef.doc(); // creates a new doc with unique ID
        const order = {
            store: store,
            items: ordersByStore[store],
            date: todayDate
        };
        batch.set(newOrderRef, order);
    }

    try {
        await batch.commit();
        localStorage.removeItem("secondServeCart");
        alert("Checkout successful!");
        window.location.href = "orders.html";
    } catch (error) {
        console.error("Error writing orders: ", error);
        alert("Failed to complete checkout. Please try again.");
    }
}
getNameFromAuth();
