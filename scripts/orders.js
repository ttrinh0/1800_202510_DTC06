// Creates order history for user
document.addEventListener("DOMContentLoaded", () => {
    const ordersContainer = document.getElementById("orders");

    async function getUserOrders(userId) {
        ordersContainer.innerHTML = "<p class='text-gray-500'>Loading orders...</p>";

        try {
            const allOrders = await db.collection("users")
                .doc(userId)
                .collection("orders")
                .get();

            ordersContainer.innerHTML = ""; // Clear previous content

            if (allOrders.empty) {
                ordersContainer.innerHTML = "<p class='text-gray-500'>No orders found.</p>";
                return;
            }

            allOrders.forEach(doc => {
                const orderData = doc.data();

                // Create order box
                const orderDiv = document.createElement("div");


                // Convert timestamp to readable date
                let formattedDate = "Unknown Date";
                if (orderData.date) {
                    const timestamp = orderData.date;
                    const dateObject = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
                    formattedDate = dateObject.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    });
                }

                // Store title
                const storeTitle = document.createElement("h3");
                storeTitle.className = "text-lg font-bold text-gray-800 mb-2";
                storeTitle.textContent = `${orderData.store}`;

                // Order Date
                const dateDiv = document.createElement("div");
                dateDiv.className = "text-sm text-gray-600 mb-2";
                dateDiv.textContent = `Order Date: ${formattedDate}`;

                // Items list (stacked, no bullets)
                const ul = document.createElement("ul");
                ul.className = "list-none pl-0 flex flex-col gap-1 text-gray-700"; // Stacked layout

                orderData.items.forEach(item => {
                    const li = document.createElement("li");
                    
                    // Create a div for each key-value pair, stacked inside the <li>
                    Object.entries(item).forEach(([key, value]) => {
                        const itemDiv = document.createElement("div");
                        itemDiv.className = "text-gray-800"; // Normal text styling
                        itemDiv.textContent = `${key}: ${value}`;
                        li.appendChild(itemDiv);
                    });

                    ul.appendChild(li);
                });

                // Append elements to the order box
                orderDiv.appendChild(storeTitle);
                orderDiv.appendChild(dateDiv);
                orderDiv.appendChild(ul);
                ordersContainer.appendChild(orderDiv);
            });
        } catch (error) {
            console.error("Error getting orders:", error);
            ordersContainer.innerHTML = "<p class='text-red-500'>Error loading orders.</p>";
        }
    }

    function getOrderFromAuth() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getUserOrders(user.uid);
            } else {
                ordersContainer.innerHTML = "<p class='text-gray-500'>Please log in to see your orders.</p>";
            }
        });
    }

    getOrderFromAuth();
});
