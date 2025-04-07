function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            checkFavourites(user.uid);
        }
    });
}

const carousel = document.getElementById('store_carousel');
const emptyMessage = document.getElementById('favouritesEmptyOuter');

function addFavourites() {
    carousel.classList.add('favouritesCarousel');
}

function checkFavourites(currentUserId) {
    db.collection("users").get()
        .then(allUsersDocuments => {
            allUsersDocuments.forEach(userDocument => {
                userData = userDocument.data();
                if (userDocument.id == currentUserId) {
                    var bookmarks = userDocument.data().bookmarks;
                    if (bookmarks.length == 0) {
                        emptyMessage.classList.remove('hidden');
                    }
                    else {
                        emptyMessage.classList.add('hidden');
                    }
                }
            });
        });
}

addFavourites();
getNameFromAuth();