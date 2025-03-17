function showMap() {
    //------------------------------------------
    // Defines and initiates basic mapbox data
    //------------------------------------------
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoidHRyaW5oIiwiYSI6ImNtODFhanJ6cTEydjQya3B0YmYyZXM5ZmoifQ.9XYzCTwby6zzdQOsuUxh0w';
    const map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Styling URL
        center: [-122.964274, 49.236082], // Starting position
        zoom: 8 // Starting zoom
    });

    // Add user controls to map, zoom bar
    map.addControl(new mapboxgl.NavigationControl());

    //------------------------------------------------
    // Add listener for when the map finishes loading.
    // After loading, we can add map features
    //------------------------------------------------
    map.on('load', () => {

        //---------------------------------
        // Add interactive pins for the hikes
        //---------------------------------
        addStorePins(map);

        //--------------------------------------
        // Add interactive pin for the user's location
        //--------------------------------------
        addUserPin(map);

    });
}

showMap();   // Call it! 

function addStorePins(map) {

    // READING information from "events" collection in Firestore
    db.collection('stores').get().then(allEvents => {
        const features = []; // Defines an empty array for information to be added to
        const cards = [];
        console.log
        allEvents.forEach(doc => {
            // Extract coordinates of the place
            coordinates = [doc.data().lng, doc.data().lat];
            console.log(coordinates);
            // Extract other addition fields that you want etc.
            storeName = doc.data().name; // Event Name
            desc = doc.data().details; // Text Preview
            storeAddress = doc.data().address; // Text Preview
            // img = doc.data().posterurl; // Image
            // url = doc.data().link; // URL


            // Push information (properties, geometry) into the features array
            features.push({
                'type': 'Feature',
                'properties': {
                    'description': `<strong>${storeName}</strong><p>${desc}</p> 
                            <br> <a href="/hike.html?id=${doc.id}" target="_blank" 
                            title="Opens in a new window">Read more</a>`
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': coordinates
                }
            });



        });

        // Adds features (in our case, pins) to the map
        // "places" is the name of this array of features
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': features
            }
        });

        // Creates a layer above the map displaying the pins
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle', // what the pins/markers/points look like
            'source': 'places',
            'paint': {   // customize colour and size
                'circle-color': '#55AD9B',
                'circle-radius': 6,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        // When one of the "places" markers are clicked,
        // create a popup that shows information 
        // Everything related to a marker is save in features[] array
        map.on('click', 'places', (e) => {
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple 
            // copies of the feature are visible, the popup appears over 
            // the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);

            result = document.getElementById("mapcard")
            mapCardDiv = `
                <div
                    class="lg:basis-1/4 p-6 m-4 lg:mr-0 lg:mt-0 lg:max-h-3/4 lg:h-[800px] bg-[#439189] rounded-lg drop-shadow-xl">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title font-semibold mb-4 text-xl">${storeName}</h5>
                            <div class="card-text">
                                <p class="mb-2">${storeAddress}</p>
                                <p class="mb-4">${desc}
                                </p>
                                <div class="flex flex-col my-6">
                                    <div class="bg-white p-6 m-2 lg:mx-0">Product card maybe</div>
                                    <div class="bg-white p-6 m-2 lg:mx-0">Product card maybe</div>
                                </div>
                                <button
                                    class="drop-shadow-sm border-2 rounded-md py-2 px-3 bg-[#f6d276] text-[#276861] border-[#f6d276] active:bg-green-700 hover:bg-[#3d8078] hover:text-[#fde8b2] cursor-pointer font-semibold hover:border-[#fde8b2]">
                                    Go to Store Page
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                `
            result.innerHTML = mapCardDiv
        });

        // Change the cursor to a pointer when the mouse hovers over the places layer.
        map.on('mouseenter', 'places', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Defaults cursor when not hovering over the places layer
        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
        });
    });
}


//-----------------------------------------------------
// Add pin for showing where the user is.
// This is a separate function so that we can use a different
// looking pin for the user.  
// This version uses a pin that is just a circle. 
//------------------------------------------------------
function addUserPin(map) {

    // Adds user's current location as a source to the map
    navigator.geolocation.getCurrentPosition(position => {
        const userLocation = [position.coords.longitude, position.coords.latitude];
        console.log(userLocation);
        if (userLocation) {
            map.addSource('userLocation', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': userLocation
                        },
                        'properties': {
                            'description': 'Your location'
                        }
                    }]
                }
            });

            // Creates a layer above the map displaying the pins
            // Add a layer showing the places.
            map.addLayer({
                'id': 'userLocation',
                'type': 'circle', // what the pins/markers/points look like
                'source': 'userLocation',
                'paint': { // customize colour and size
                    'circle-color': 'blue',
                    'circle-radius': 6,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });

            // Map On Click function that creates a popup displaying the user's location
            map.on('click', 'userLocation', (e) => {
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });

            // Change the cursor to a pointer when the mouse is over the userLocation layer.
            map.on('mouseenter', 'userLocation', () => {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Defaults
            // Defaults cursor when not hovering over the userLocation layer
            map.on('mouseleave', 'userLocation', () => {
                map.getCanvas().style.cursor = '';
            });
        }
    });
}