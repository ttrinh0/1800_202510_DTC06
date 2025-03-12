function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            userName = user.displayName;
            getUserInformation("users", user.uid); //pass the collection name and the user ID
            //method #1:  insert with JS
            document.getElementById("name-goes-here").innerText = userName;

            //method #2:  insert using jquery
            //$("#name-goes-here").text(userName); //using jquery

            //method #3:  insert using querySelector
            //document.querySelector("#name-goes-here").innerText = userName
        }
    });
}

//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
async function getUserInformation(collection, user) {
    await db.collection(collection).get()   //the collection called "users"
        .then(allUsers => {
            //var i = 1;  //Optional: if you want to have a unique ID for each user
            allUsers.forEach(doc => { //iterate thru each doc
                ///console.log(doc.uid)
                userData = doc.data();
                if (doc.id == user) {
                    console.log("User found: " + userData.name);
                    document.getElementById("user-id-goes-here").innerText = doc.id;
                    if (userData.name) {
                        document.getElementById("user-name-firebase").innerText = userData.name;
                    }
                    if (userData.email) {
                        document.getElementById("email-goes-here").innerText = userData.email;
                    }
                    if (userData.address) {
                        document.getElementById("address-goes-here").innerText = userData.address;
}
                    else {
                        document.getElementById("address-goes-here").innerText = "No address provided";

                    }
                    if (userData.city) {
                        document.getElementById("city-goes-here").innerText = userData.city;
                    }
                    else {
                        document.getElementById("city-goes-here").innerText = "No city provided";   
                    }
                    if (userData.province) {
                        document.getElementById("province-state-goes-here").innerText = userData.province;
                    }
                    else {
                        document.getElementById("province-state-goes-here").innerText = "No province or state provided";   
                    }
                    if (userData.postal) {
                        document.getElementById("postal-zip-goes-here").innerText = userData.postal;
                    }
                    else {
                        document.getElementById("postal-zip-goes-here").innerText = "No postal or zip code provided";      
                    }
                    if (userData.phone) {
                        document.getElementById("phone-goes-here").innerText = userData.phone;
                    }
                    else {
                        document.getElementById("phone-goes-here").innerText = "No phone number provided";  
                    }
                    if (userData.country) {
                        document.getElementById("country-goes-here").innerText = userData.country;
                    }
                    else { 
                        document.getElementById("country-goes-here").innerText = "No country provided";  
                    }
                    return;
                }
            })
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });

}

async function saveUserNameToFirestore(user, name) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        name: name
    }, { merge: true })
        .then(() => {
            console.log("Name successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}
async function saveUserAddressToFirestore(user, address) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        address: address
    }, { merge: true })
        .then(() => {
            console.log("Address successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}
async function saveUserCityToFirestore(user, city) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        city: city
    }, { merge: true })
        .then(() => {
            console.log("City successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}
async function saveUserProvinceToFirestore(user, province) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        province: province
    }, { merge: true })
        .then(() => {
            console.log("Province successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}
async function saveUserPostalToFirestore(user, postal) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        postal: postal
    }, { merge: true })
        .then(() => {
            console.log("Postal successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}

async function saveUserCountryToFirestore(user, country) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        country: country
    }, { merge: true })
        .then(() => {
            console.log("Country successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}
async function saveUserPhoneToFirestore(user, phone) {
    // Replace 'yourFirestoreCollection' and 'documentId' with your actual Firestore collection and document ID
    await firebase.firestore().collection('users').doc(user).set({
        phone: phone
    }, { merge: true })
        .then(() => {
            console.log("Phone successfully written to Firestore!");
        })
        .catch((error) => {
            console.error("Error writing date to Firestore: ", error);
        });
}

async function submitButton() {
    var user = document.getElementById("user-id-goes-here").innerText;
    var name = document.getElementById("user-name-form").value;
    var country = document.getElementById("user-country-form").value;
    var address = document.getElementById("user-home-address-form").value;
    var city = document.getElementById("user-city-form").value;
    var province = document.getElementById("user-province-state-form").value;
    var postal =document.getElementById("user-postal-zip-form").value;
    var phone = document.getElementById("user-phone-form").value;

    console.log("user: " + user);
    console.log("name: " + name);
    console.log("country: " + country);
    if (name) {
        await saveUserNameToFirestore(user, name);
    }
    if (address) {
        await saveUserAddressToFirestore(user, address);
    }
    if (city) { 
        await saveUserCityToFirestore(user, city);
    }
    if (province) {
        await saveUserProvinceToFirestore(user, province);
    }
    if (postal) {
        await saveUserPostalToFirestore(user, postal);
    }
    if (phone) {
        await saveUserPhoneToFirestore(user, phone);
    }
    if (country) {
        await saveUserCountryToFirestore(user, country);
    }
    await getUserInformation("users", user); //pass the collection name and the user ID

    userProfile.classList.remove('hidden');
    editAccountForm.classList.add('hidden');
    editAccountButton.classList.remove('hidden');
}

// Declare html id to variables
const page1Btn = document.getElementById('page1Btn');
const page2Btn = document.getElementById('page2Btn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const editAccountButton = document.getElementById('editAccountButton');
const carousel = document.getElementById('store_carousel');
const userProfile = document.getElementById('userProfile');
const editAccountForm = document.getElementById('editAccountForm');


// Click listeners to buttons
page1Btn.addEventListener('click', () => {
    // Hides previous page
    page1.classList.remove('hidden');
    page2.classList.add('hidden');
    page2.classList.remove('block');
    carousel.classList.remove('storeCarousel');
    carousel.innerHTML = ""

    // Change bg colour of btns
    page1Btn.classList.add('bg-slate-100');
    page2Btn.classList.remove('bg-slate-100');
});

page2Btn.addEventListener('click', () => {
    // Hides previous page
    page1.classList.add('hidden',);
    page2.classList.remove('hidden');
    page2.classList.add('block');
    carousel.classList.add('storeCarousel');
    Carousel()


    // Change bg colour of btns
    page2Btn.classList.add('bg-slate-100');
    page1Btn.classList.remove('bg-slate-100');
});

editAccountButton.addEventListener('click', () => {
    // Hides previous page
    userProfile.classList.add('hidden');
    editAccountForm.classList.remove('hidden');
    editAccountButton.classList.add('hidden');
    const name = document.getElementById("user-name-firebase").textContent.trim();
    const address = document.getElementById("address-goes-here").textContent.trim();
    const city = document.getElementById("city-goes-here").textContent.trim();
    const province = document.getElementById("province-state-goes-here").textContent.trim();    
    const postal = document.getElementById("postal-zip-goes-here").textContent.trim();
    const phone = document.getElementById("phone-goes-here").textContent.trim();
    const country = document.getElementById("country-goes-here").textContent.trim();
    document.getElementById("user-name-form").value = name;
    document.getElementById("user-home-address-form").value = address;
    document.getElementById("user-city-form").value = city;
    document.getElementById("user-province-state-form").value = province;
    document.getElementById("user-postal-zip-form").value = postal;
    document.getElementById("user-country-form").value = country;
    document.getElementById("user-phone-form").value = phone;
});

getNameFromAuth(); 