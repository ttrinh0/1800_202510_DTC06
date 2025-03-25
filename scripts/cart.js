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