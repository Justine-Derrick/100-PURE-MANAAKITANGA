console.log("howdy");

// define map key 
let script = "<script src='https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places&callback=initMap' async defer >";

// document query selectors
const applyFiltersBtn = document.querySelector("#applyFiltersBtn");


// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------



// append map key to body

$(document).ready(function(){
    $('body').append(script);
});


// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


// object array - accomodation details
let accommodation = [

    {
        id: 10,
        mainImage: "./img/CarltonMain.png",
        name: "The Carlton Hotel",
        type: "Hotel", 
        location: "Whitianga, Coromandel, NZ",
        latitude: -36.83898421622976, 
        longitude: 175.69179517137826,
        rating: 4.7,
        reviewsNo: 84,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Gym Facilities", "Late Check Out", "Free Parking"],

    },

    {
        id: 20,
        mainImage: "./img/MorlandMain.png",
        name: "Morland Hotel",
        type: "Hotel", 
        location: "Opito Bay, Coromandel, NZ",
        latitude: -36.71498397906826,
        longitude: 175.7945025259624,
        rating: 4.5,
        reviewsNo: 123,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
                
    },

    {
        id: 30,
        mainImage: "./img/PeninsulaMain.png",
        name: "The Peninsula Hotel",
        type: "Hotel", 
        location: "Matarangi, Coromandel, NZ",
        latitude: -36.73275387156286,
        longitude:  175.6446552829269, 
        rating: 4.2,
        reviewsNo: 72,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
       
    },

    {
        id: 40,
        mainImage: "./img/CathedralMain.jpg",
        name: "The Cathedral",
        type: "Hotel", 
        location: "Hahei, Coromandel, NZ",
        latitude: -36.84091593931837, 
        longitude: 175.80844929618638, 
        rating: 4.9,
        reviewsNo: 200,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
       
    },

    {
        id: 50,
        mainImage: "./img/OptioMain.jpg",
        name: "The Ocean View Hotel",
        type: "Hotel", 
        location: "Whitianga, Coromandel, NZ",
        latitude: -36.82994337395195,
        longitude: 175.7049525979734, 
        rating: 3.5,
        reviewsNo: 64,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        
    },

    {
        id: 60,
        mainImage: "./img/SeaviewMain.jpg",
        name: "Seaview Motel",
        type: "Motel", 
        location: "Whitianga, Coromandel, NZ",
        latitude: -36.82515425566253, 
        longitude: 175.70227305787188,
        rating: 3.7,
        reviewsNo: 157,
        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Pool", "Free Cancelation","Free Parking"],
       
    },

    {
        id: 70,
        mainImage: "./img/CarltonMain.png",
        name: "Cook's Beach Motel",
        type: "Motel", 
        location: "Cook's Beach, Coromandel, NZ",
        latitude: -36.83763932778573, 
        longitude: 175.74035469061513,
        rating: 4.1,
        reviewsNo: 52,
        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Late Check Out"],
        
    },

    {
        id: 80,
        mainImage: "./img/YouthMain.png",
        name: "Coromandel Youth Hostel",
        type: "Hostel", 
        location: "Whitianga, Coromandel, NZ",
        latitude: -36.83949375865749,
        longitude: 175.69138491931892,
        rating: 3.9,
        reviewsNo: 313,
        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Free Cancelation"],
        
    },

    {
        id: 90,
        mainImage: "./img/OptioMain.jpg",
        name: "Optio Bay Backpackers",
        type: "Hostel", 
        location: "Opito Bay, Coromandel, NZ",
        latitude: -36.72296194864805, 
        longitude: 175.80564070167569,
        rating: 4.3,
        reviewsNo: 202,
        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Free Cancelation"],
      
    },

    {
        id: 100,
        mainImage: "./img/RelaxationCove.png",
        name: "Relaxation on the Cove",
        type: "House", 
        location: "Hahei, Coromandel, NZ",
        latitude: -36.8435427107329, 
        longitude: 175.8018675620926,
        rating: 4.6,
        reviewsNo: 322,
        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking"],
       
    },

    {
        id: 110,
        mainImage: "./img/SeasideMain.png",
        name: "Seaside Stay",
        type: "House", 
        location: "Matarangi, Coromandel, NZ",
        latitude: -36.843780488706656, 
        longitude: 175.8148605326123,
        rating: 4.6,
        reviewsNo: 79,
        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking", "Spa"],
       
    },

];

console.log(accommodation);


// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


// initialise map

let map;
let markers = [];

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, 
        center: {lat:-36.7667, lng:175.5000},
    });
}


// initial filtering options

function filterOptions(event){
    event.preventDefault();
    console.log("clicked");

    let msDay = 100 * 36000 * 24;

    let checkInDate = new Date($("#checkInDate").val());
    let checkOutDate = new Date($("#checkOutDate").val());
    console.log(checkInDate);
    console.log(checkOutDate);

    let dateDifference = checkOutDate.getTime() - checkInDate.getTime();
    let numberOfDays = dateDifference/msDay;
    console.log(numberOfDays);

    let numberOfPeople = $("#guestsNumber").val();
    console.log(numberOfPeople);

    displayOptions(numberOfDays, numberOfPeople);

}


// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

// detais div


function accommodationDetails(){
    $(".card-link").on("click", function(){
        for (let i=0; i < accommodation.length; i++){
            if (parseInt(this.id) === accommodation[i].id){
                console.log(accommodation[i].name);

                $("#accommodationDetails").empty().append(
                    `
                    
                    `
                )

            }
        } 
    });
}




// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


// dsiplaying options

function displayOptions(nights, guests){

    reloadMarkers();

    console.log(nights);
    console.log(guests);

    $("#cardContainerSearchResults").empty();
    $("#cardContainerTopStay").empty();

    for (let i=0; i < accommodation.length; i++){
        if ((nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest)){
            generateResultCard(i);

            let location = {lat: accommodation[i].latitude, lng: accommodation[i].longitude};
            console.log(location);
            
            let marker = new google.maps.Marker({
                position: location,
                map:map,
            });

            // console.log(marker);
            markers.push(marker);

        }
        
        if ((nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest) && (accommodation[i].rating >= 4)){
            generateTopCard(i);
        } 
    }

    accommodationDetails();
    
}



console.log(markers);

function reloadMarkers() {

    for (let i=0; i < markers.length; i++){
        markers[i].setMap(null);
    };

    markers = [];

}





// card generators

function generateTopCard(x){
    $("#cardContainerTopStay").append(
        `
        <div class="card" style="width: 25rem;">
            <img class="card-img-top" src="${accommodation[x].mainImage}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${accommodation[x].name}</h5>
                <h6 class="card-location"><i>${accommodation[x].location}</i></h5>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a id="${accommodation[x].id}" class="card-link"><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    );
}


function generateResultCard(x){
    $("#cardContainerSearchResults").append(
        `
        <div class="card">
            <img class="card-img-top" src="${accommodation[x].mainImage}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[x].name}</h5>
            </div>
                <h6 class="card-location">${accommodation[x].location}</h5>
                <div class="reviews">
                    <p class="rating-text"><i class="fas fa-star"></i>  ${accommodation[x].rating}</p> <p class="review-number"><i>(${accommodation[x].reviewsNo} reviews)</i></p>
                </div>
                <p class="price-text">$${accommodation[x].costPerNight}/night</p>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a class="card-link" id="${accommodation[x].id}"><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    );

}


// event listeners

applyFiltersBtn.addEventListener("click", filterOptions);















// click to show filters

// function showFilters(){
//     let show = document.getElementById("searchFilters");

//     show.style.display = "block";

// }

// $("#locationSearch").click(function(){
//     showFilters();
// });

// function hideFilters(){
//     let show = document.getElementById("whereTo");

//     show.style.display = "none";
// }

// function showSummary(){
//     let show = document.getElementById("searchSummary");

//     show.style.display = "block";
// }

// $("#applyFiltersBtn").click(function(){
//     hideFilters();
//     showSummary();
// });


// create top stay cards
// function topStays(){
//     for(let i = 0; i < accommodation.length; i++){
//         if(accommodation[i].rating >= 4.5){
//             generateTopCard(i);
//         }
//     }
// }

// topStays();



