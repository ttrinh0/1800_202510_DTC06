

function showItemInCart() {
    let cart = document.getElementById("cart")
    let cartEmpty = document.getElementById("cartEmpty")

    if ('secondServeCart' in localStorage) {
        cartEmpty.innerHTML = ""
        cart.classList.toggle("flex-grow")
    }

    let subtotal = parseFloat(localStorage.getItem('subtotal'))
    // subtotal = 0

    productInfo = JSON.parse(localStorage.getItem('secondServeCart'))
    cartLength = Object.keys(productInfo).length

    for (i = 0; i < cartLength; i++) {
        title = Object.keys(productInfo)[i]
        price = Object.values(productInfo)[i]["price"]
        img = Object.values(productInfo)[i]["img"]
        quantity = Object.values(productInfo)[i]["quantity"]
        // subtotal += Number(price)
        cardNumberID = "cartCard" + i
        cardNumberRemoveID = "cartCardRemove" + i

        let cartCard = `<div id="${cardNumberID}" class="border-2 border-black/15 rounded-md bg-white drop-shadow-sm mt-4">
            <div class="p-4 flex justify-between">
                <img src="/images/${img}.jpg" alt=""
                    class="border-2 border-black/10 drop-shadow-sm rounded-md object-cover object-center w-30 h-30">
                <div class="my-auto flex-grow ml-4">
                    <p class="name-item text-left col-span-2 font-semibold">${title}</p>
                    <p class="text-sm">Quantity: <span>${quantity}</span></p>
                    <p class="text-sm">Price: $${price}</p>
                </div>
                <button id="${cardNumberRemoveID}">
                    <i class="mr-2 drop-shadow-sm fa-solid fa-xmark fa-lg my-auto cursor-pointer p-2"></i>
                </button>
            </div>
        </div>`
        cart.innerHTML += cartCard;
    }

    let subtotaldiv = document.getElementById("subtotal")
    subtotaldiv.innerHTML = "Subtotal: $" + subtotal
    let checkoutdiv = document.getElementById("checkout")
    checkoutdiv.innerHTML = `<button
    class="cursor-pointer w-[120px] bg-[#439189] text-white font-semibold py-2 px-4 rounded-lg transition hover:bg-[#f6d276] hover:text-[#276861]"
    onclick="storeItemsToOrderHistory()">Checkout</button>`

    for (i = 0; i < cartLength; i++) {
        let subtotal = parseFloat(localStorage.getItem('subtotal'))
        console.log("subtotal", subtotal)
        let cartCard = document.getElementById("cartCard" + i)
        let cartEmpty = document.getElementById("cartEmpty")
        newCounter = localStorage.getItem('counter');
        let cardNumberRemove = document.getElementById("cartCardRemove" + i)
        let numberi = i
        let title = Object.keys(productInfo)[numberi]
        let price = parseFloat(Object.values(productInfo)[numberi]["price"])
        console.log("price", price)
        let newPrice = 0
        console.log("new", newPrice)

        cardNumberRemove.addEventListener("click", () => {
            const updatedObj = Object.fromEntries(
                Object.entries(productInfo).filter(([key]) => key !== title)
            );
            productInfo = updatedObj
            cartCard.remove()

            newCounter--

            subtotal = parseFloat(localStorage.getItem('subtotal'))
            newPrice = subtotal - price
            localStorage.setItem('counter', newCounter);
            localStorage.setItem('subtotal', newPrice);
            subtotaldiv.innerHTML = "Subtotal: $" + newPrice.toFixed(2)
            if (newCounter == 0) {
                localStorage.removeItem('secondServeCart');
                localStorage.removeItem('subtotal');
                subtotaldiv.innerHTML = ""
                checkoutdiv.innerHTML = ""
                cartEmpty.innerHTML = `<i class="fa-solid fa-cart-shopping text-3xl mx-auto"></i>
                    <h4 class="font-semibold text-lg pt-5 mx-auto">Your cart is empty</h4>
                    <p class="text-center mx-auto">Once you add items from a restaurant or store, your cart will appear
                        here.
                    </p>`
                cart.classList.toggle("flex-grow")
            } else {
                localStorage.setItem('secondServeCart', JSON.stringify(updatedObj));
            }

        })
    }
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
        localStorage.removeItem("counter");
        localStorage.removeItem("subtotal");
        alert("Checkout successful!");
        window.location.href = "orders.html";
    } catch (error) {
        console.error("Error writing orders: ", error);
        alert("Failed to complete checkout. Please try again.");
    }
}
getNameFromAuth();

