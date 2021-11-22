console.log("howdy");

// define map key 
let script = "<script src='https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places&callback=initMap' async defer >";



// append map key to body

$(document).ready(function(){
    $('body').append(script);
});


// initialise map

let map;
let markers = [];

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11, 
        center: {lat:-36.7667, lng:175.5000},
    });
}













// object array - accomodation details
let accommodation = [

    {
        id: 10,
        mainImage: "./img/CarltonMain.png",
        name: "The Carlton Hotel",
        type: "Hotel", 
        location: "Whitianga, Coromandel, NZ",
        rating: 4.7,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Gym Facilities", "Late Check Out", "Free Parking"],
        topStay: true,
    },

    {
        id: "20",
        mainImage: "./img/MorlandMain.png",
        name: "Morland Hotel",
        type: "Hotel", 
        location: "Opito Bay, Coromandel, NZ",
        rating: 4.5,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        topStay: false,
        
    },

    {
        id: "90",
        mainImage: "./img/PeninsulaMain.png",
        name: "The Peninsula Hotel",
        type: "Hotel", 
        location: "Matarangi, Coromandel, NZ",
        rating: 4.2,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        topStay: false,
    },

    {
        id: "100",
        mainImage: "./img/CathedralMain.jpg",
        name: "The Cathedral",
        type: "Hotel", 
        location: "Hahei, Coromandel, NZ",
        rating: 4.9,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        topStay: true,
    },

    {
        id: "110",
        mainImage: "",
        name: "The Ocean View Hotel",
        type: "Hotel", 
        location: "Whitianga, Coromandel, NZ",
        rating: 3.5,
        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        topStay: false,
    },

    {
        id: "30",
        mainImage: "./img/SeaviewMain.jpg",
        name: "Seaview Motel",
        type: "Motel", 
        location: "Whitianga, Coromandel, NZ",
        rating: 3.7,
        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Pool", "Free Cancelation","Free Parking"],
        topStay: false,

    },

    {
        id: "40",
        mainImage: "./img/CarltonMain.png",
        name: "Cook's Beach Motel",
        type: "Motel", 
        location: "Cook's Beach, Coromandel, NZ",
        rating: 4.1,
        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: "",
        ammenities: ["Late Check Out"],
        topStay: false,

    },

    {
        id: "50",
        mainImage: "./img/YouthMain.png",
        name: "Coromandel Youth Hostel",
        type: "Hostel", 
        location: "Whitianga, Coromandel, NZ",
        rating: 3.9,
        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Free Cancelation"],
        topStay: false,
    },

    {
        id: "60",
        mainImage: "./img/OptioMain.jpg",
        name: "Optio Bay Backpackers",
        type: "Hostel", 
        location: "Opito Bay, Coromandel, NZ",
        rating: 4.3,
        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Free Cancelation"],
        topStay: true,

    },

    {
        id: "70",
        mainImage: "./img/RelaxationCove.png",
        name: "Relaxation on the Cove",
        type: "House", 
        location: "Hahei, Coromandel, NZ",
        rating: 4.6,
        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking"],
        topStay: true,

    },

    {
        id: "80",
        mainImage: "./img/SeasideMain.png",
        name: "Seaside Stay",
        type: "House", 
        location: "Matarangi, Coromandel, NZ",
        rating: 4.6,
        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking", "Spa"],
        topStay: true,
    },

];

console.log(accommodation);


// click to show filters

function showFilters(){
    let show = document.getElementById("searchFilters");

    show.style.display = "block";

}

$("#locationSearch").click(function(){
    showFilters();
});

function hideFilters(){
    let show = document.getElementById("whereTo");

    show.style.display = "none";
}

function showSummary(){
    let show = document.getElementById("searchSummary");

    show.style.display = "block";
}

$("#applyFiltersBtn").click(function(){
    hideFilters();
    showSummary();
});



// create top stay cards
function topStays(){
    for(let i = 0; i < accommodation.length; i++){
        if(accommodation[i].topStay === true){
            generateTopCard(i);
        }
    }
}

topStays();



// create results cards

function searchResults(){
    for(let i = 0; i < accommodation.length; i++){
        if(accommodation[i].topStay === true){
            generateResultCard(i);
        }
    }
}

searchResults();


function generateTopCard(x){
    $("#cardContainerTopStay").append(
        `
        <div class="card" style="width: 25rem;">
            <img class="card-img-top" src="${accommodation[x].mainImage}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${accommodation[x].name}</h5>
                <h6 class="card-location"><i>${accommodation[x].location}</i></h5>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a href="#" class="card-link"><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
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
                <h5 class="card-title">${accommodation[x].name}</h5>
                <h6 class="card-location"><i>${accommodation[x].location}</i></h5>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a href="#" class="card-link"><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    );
}