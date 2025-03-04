//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // If the "user" variable is not null, then someone is logged in
            // User is signed in.
            // Do something for the user here.
            console.log($('#navbarTop').load('./components/nav_top.html'));
            console.log($('#navbarBottom').load('./components/nav_bottom.html'));
            console.log($('#footer').load('./components/footer.html'));
        } else {
            // No user is signed in.
            console.log($('#navbarTop').load('./components/nav_top_non_user.html'));
            console.log($('#navbarBottom').load('./components/nav_bottom.html'));
            console.log($('#footer').load('./components/footer.html'));
        }
    });
}
loadSkeleton(); //invoke the function