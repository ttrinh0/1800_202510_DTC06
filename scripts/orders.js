function getOrderFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            getUserOrders(user.uid);
        }
    });
}

function getUserOrders(user) {
    orders.innerHTML = "";
    db.collection('users')
        .doc(user)
        .collection('orders')
        .get()
        .then(allOrders => {
            allOrders.forEach(doc => {
                orderData = doc.data();
                // orderData = JSON.stringify(orderData);
                console.log("Order found: " + orderData);
                const itemsString = orderData.items.map(obj =>
                    Object.entries(obj).map(([key, value]) => `${ key }: ${ value }`).join(", ")
                ).join("; ");

                const li = document.createElement('li');
                li.textContent = `store: ${orderData.store} - ${ itemsString }`;
                orders.appendChild(li);
            })
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    
}
const orders = document.getElementById('orders');
getOrderFromAuth();