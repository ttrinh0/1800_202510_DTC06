function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid); //print the uid in the browser console
            console.log(user.displayName);  //print the user name in the browser console
            userName = user.displayName;
            getUserName(user.uid)
        } else {
            // No user is signed in.
            console.log("No user is logged in");
        }
    });
}

 function getUserName(user) {
     db.collection("users").get()   //the collection called "users"
        .then(allUsers => {
            //var i = 1;  //Optional: if you want to have a unique ID for each user
            allUsers.forEach(doc => { //iterate thru each doc
                ///console.log(doc.uid)
                userData = doc.data();
                if (doc.id == user) {
                    document.getElementById("name-goes-here").innerText = userData.name;
                }});
            });
}

getNameFromAuth(); //run the function