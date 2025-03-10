function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid); //print the uid in the browser console
            console.log(user.displayName);  //print the user name in the browser console
            userName = user.displayName;

            //method #1:  insert with JS
            document.getElementById("name-goes-here").innerText = userName;

            //method #2:  insert using jquery
            //$("#name-goes-here").text(userName); //using jquery

            //method #3:  insert using querySelector
            //document.querySelector("#name-goes-here").innerText = userName
        }
    });
}

// Declare html id to variables
const page1Btn = document.getElementById('page1Btn');
const page2Btn = document.getElementById('page2Btn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const carousel = document.getElementById('store_carousel');

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

getNameFromAuth(); 