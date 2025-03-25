function addItemToCart() {
    title = document.getElementsByClassName('.card-title');
    console.log(title)
    storename = document.getElementsByClassName('.store-title');
    p_after = document.getElementsByClassName('.p_after');
    productCart = { "Bagel": { "quantity": 1, "store": "Tim Hortons", "price": "1.00" } }
    // store = cards.querySelector('.store-title')
    // p_after = cards.querySelector('.store-title')
    // return {
    //     title: title.textContext
    // }
    localStorage.setItem('secondServeCart', JSON.stringify(productCart));
}

function showItemInCart() {
    const cart = document.getElementById("cart")
    productInfo = JSON.parse(localStorage.getItem("secondServeCart"))
    title = Object.keys(productInfo)[0]
    price = Object.values(productInfo)[0]
    console.log(productInfo)
    console.log(title)
    console.log("price", price)
    if (localStorage.length > 0) {
        cart.innerHTML = ""
        cart.classList.toggle("flex-grow")
    }
    for (var i = 0; i < localStorage.length; i++) {
        let cartCard = `<div class="border-2 border-black/15 rounded-md bg-white drop-shadow-sm m-4">
                    <div class="grid grid-cols-7 items-center text-center p-4">
                        <img src="/images/c_bagel.jpg" alt=""
                            class="border-2 border-black/10 drop-shadow-sm rounded-md object-cover object-center w-30 h-30">
                        <p class="name-item text-left col-span-2 ml-4">${title}</p>
                        <p>Quantity: <span>3</span></p>
                        <p>Price: <span>3</span></p>
                        <p>Total: <span>3</span></p>
                        <i class="drop-shadow-sm fa-solid fa-xmark fa-lg text-right mr-5"></i>
                    </div>
                </div>`
        cart.innerHTML += cartCard;
        counter++
    }
}
showItemInCart()