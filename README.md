
# SecondServe

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
SecondServe is a food service web application that offers food surplus at a discounted price.

## Technologies

* HTML
* CSS
* JavaScript
* Tailwind
* Netlify
* Firebase

## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── login.html               # login HTML file, the log-in page
├── account.html             # account HTML file, the account page
├── cart.html                # cart HTML file, the cart page
├── eachStoreLanding.html    # store landing page HTML file, the template for each store landing page
├── favourites.html          # favourites HTML file, the favourite stores page
├── orders.html              # orders HTML file, the orders page where the user can view their previous orders
├── stores.html              # stores HTML file, the browse stores page
├── template.html            # template HTML file, the user doesn't see this, this is the base template for every page
├── main.html                # main HTML file, the landing page after log-in or user set-up
└── README.md                # README file with project information

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images

        /BB.jpg
        /c_bagel.jpg
        /c_cookie.jpg
        /c_donut.jpg
        /c_muffin.jpg
        /cafe.jpg
        /foodbag.jpg
        /FSP.jpg
        /g_apple.jpg
        /g_bread.jpg
        /g_cereal.jpg
        /g_orange.jpg
        /grocery.jpg
        /JB.jpg
        /pastries.jpg
        /r_fries.jpg
        /r_frozen_pizza.jpg
        /r_meal_set.jpg
        /r_pizza.jpg
        /r_sandwich.jpg
        /restaurant.jpg
        /SOF.jpg
        /store.jpg
        /TH.jpg
        
├── scripts                         # Folder for scripts
  
        /firebaseAPI_dtc06.js       # firebase API stuff, shared across pages
        /account.js                 # JS for account.html
        /authentication.js          # firebase authentication
        /cart.js                    # JS for cart.html
        /eachProduct.js             # JS to write products to Firestore
        /eachStore.js               # JS to write stores to Firestore
        /eachStoreLanding.js        # JS for eachStoreLanding.html
        /favourites.js              # JS for favourites.html
        /favouritesCards.js         # JS for favourites.html store cards
        /main.js                    # JS for main.html
        /nav.js                     # JS for the sidebar in the nav
        /orders.js                  # JS for orders.html
        /script.js                  # JS to logout and load certain elements
        /skeleton.js                # JS to load the site navigation/footer
        /storeCards.js              # JS for to populate the store cards
        /tailwind.config.js         # tailwind config file

├── styles                          # Folder for styles

        /style.css                  # style for the add/remove to favourites pop up

├── components                      # Folder for html components to load into html

        /favourites_carousel.html       # favourites store cards
        /footer.html                    # footer
        /nav_bottom.html                # bottom navication
        /nav_top_non_user.html          # style for main.htm
        /nav_top.html                   # style for main.htm
        /store_carousel.html            # store cards
        /store_page_stores.html         # store cards in stores
        /store_product_carousel.html    # product item cards

```

## Limitations and Bugs
- You are not able to add more than one of the same product to your cart.
- The "Offers Left" feature on the store cards are static and do not change depending on available store products.
- There is no way to search stores or products.

## Resources

- Code snippets were adapted from resources such as [Stack Overflow](https://stackoverflow.com/), [MDN Web Docs](https://developer.mozilla.org/), and class demos.
- Icons sourced from [FontAwesome](https://fontawesome.com/) and images from [Unsplash](https://unsplash.com/).
- Logic to use batch from DB in cart.js was generated using AI


## Contact 
* Joshua Sopena
* Courtney Lum
* Tin Trinh - ttrinh25@my.bcit.ca

## Acknowledgments
* <a href="https://fontawesome.com/">Font Awesome</a>
* <a href="https://fonts.google.com/">Google Fonts</a>
* <a href="https://stackoverflow.com/">Stack Overflow</a>
* <a href="https://tailwindcss.com/">Tailwind</a>
* <a href="https://unsplash.com/">Unsplash</a>
* <a href="https://developer.mozilla.org/">MDN Web Docs</a>
* <a href="https://www.w3schools.com/">W3 Schools</a>

