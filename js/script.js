console.log("howdy");

// map key
let script = "<script src='https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places&callback=initMap' async defer >";


// -------------------------------------------------------------------------------------------------------------------------------------------
//query selectors


const initialSearch = document.querySelector("#initialSearch");


// -------------------------------------------------------------------------------------------------------------------------------------------
// global variables


let map;
let mapDetail;
let autoComp;
let locations = [];
let markers = [];

let costCalcArray = [];
let results = [];


// -------------------------------------------------------------------------------------------------------------------------------------------
// append map key to body



$(document).ready(function(){
    $('body').append(script);
});


// -------------------------------------------------------------------------------------------------------------------------------------------
// object array  -  accommodation

let accommodation = [

    // hotels

    {
        id: 101,
        name: "The Carlton Hotel",
        type: "Hotel", 
        locationName: "Whitianga",
        reigonName: "Coromandel",
        location: "Whitianga, New Zealand",
        reigon: "Coromandel, New Zealand",

        mainImage: "./img/hotels/carlton-main-img.png",
        img1: "./img/hotels/carlton-img-1.png",
        img2: "./img/hotels/carlton-img-2.png",
        img3: "./img/hotels/carlton-img-3.png",
        img4: "./img/hotels/carlton-img-4.png",
        img5: "./img/hotels/carlton-img-5.png",

        rating: 4.7,
        reviewsNo: 84,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/avocado-toast.png",
        breakfastOption1: "Avocado Toast",
        breakfastDescription1: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement1: ["V", "VG*"],
        breakfastPrice1: 18.50,

        breakfastImg2: "./img/food/chia-seed-pudding.png",
        breakfastOption2: "Chia Seed Pudding",
        breakfastDescription2: "Coconut Chia Seed Pudding with seasonal fruit",
        breakfastRequirement2: ["V", "VG", "GF"],
        breakfastPrice2: 17.50,

        breakfastImg3: "./img/food/full-english.png",
        breakfastOption3: "Full English Style Breakfast",
        breakfastDescription3: "Bacon, Roasted Tomatoes, Baked Beans, and Eggs your way. Served with sourdough toast.",
        breakfastRequirement3: ["GF*"],
        breakfastPrice3: 20.50,

        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["wifi"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.83898421622976, 
        longitude: 175.69179517137826,
        marker: "./img/hotel.svg",

    },

    {
        id: 102,
        name: "Morland Hotel",
        type: "Hotel", 
        locationName: "Opito Bay",
        reigonName: "Coromandel",
        location: "Opito Bay, New Zealand",
        reigon: "Coromandel, New Zealand",

        mainImage: "./img/hotels/morland-main-img.png",
        img1: "./img/hotels/morland-img-1.png",
        img2: "./img/hotels/morland-img-2.png",
        img3: "./img/hotels/morland-img-3.png",
        img4: "./img/hotels/morland-img-4.png",
        img5: "./img/hotels/morland-img-5.png",

        rating: 4.5,
        reviewsNo: 123,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/spanish-eggs.png",
        breakfastOption1: "Spanish Eggs",
        breakfastDescription1: "Eggs poached in a tomato sauce. Servec with sourdough toast",
        breakfastRequirement1: ["V", "GF*"],
        breakfastPrice1: 20.50,

        breakfastImg2: "./img/food/pancakes.png",
        breakfastOption2: "American Pancakes",
        breakfastDescription2: "American style pancakes, served with seasonal fruit and maple syrup",
        breakfastRequirement2: ["V", "VG*"],
        breakfastPrice2: 19.50,

        breakfastImg3: "./img/food/porridge.png",
        breakfastOption3: "Homemade Porridge",
        breakfastDescription3: "Traditional homemade porridge with steel cut oats. Served with seasonal fruit.",
        breakfastRequirement3: ["v", "VG*"],
        breakfastPrice3: 17.50,

        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["late"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.71498397906826,
        longitude: 175.7945025259624,
        marker: "./img/hotel.svg",
    },

    {
        id: 103,
        name: "The Peninsula Hotel",
        type: "Hotel", 
        locationName: "Matarangi",
        reigonName: "Coromandel",
        location: "Matarangi, New Zealand",
        reigon: "Coromandel, New Zealand",

        mainImage: "./img/hotels/peninsula-main-img.png",
        img1: "./img/hotels/peninsula-img-1.png",
        img2: "./img/hotels/peninsula-img-2.png",
        img3: "./img/hotels/peninsula-img-3.png",
        img4: "./img/hotels/peninsula-img-4.png",
        img5: "./img/hotels/peninsula-img-5.png",

        rating: 4.2,
        reviewsNo: 72,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/chia-seed-pudding.png",
        breakfastOption1: "Chia Seed Pudding",
        breakfastDescription1: "Coconut Chia Seed Pudding with seasonal fruit",
        breakfastRequirement1: ["V", "VG", "GF"],
        breakfastPrice1: 17.50,

        breakfastImg2: "./img/food/full-english.png",
        breakfastOption2: "Full English Style Breakfast",
        breakfastDescription2: "Bacon, Roasted Tomatoes, Baked Beans, and Eggs your way. Served with sourdough toast.",
        breakfastRequirement2: ["GF*"],
        breakfastPrice2: 20.50,

        breakfastImg3: "./img/food/spanish-eggs.png",
        breakfastOption3: "Spanish Eggs",
        breakfastDescription3: "Eggs poached in a tomato sauce. Servec with sourdough toast",
        breakfastRequirement3: ["V", "GF*"],
        breakfastPrice3: 19.50,

        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.73275387156286,
        longitude:  175.6446552829269, 
        marker: "./img/hotel.svg",

    },

    {
        id: 104,
        name: "The Cathedral",
        type: "Hotel", 
        locationName: "Hahei",
        reigonName: "Coromandel",
        location: "Hahei, New Zealand",
        reigon: "Coromandel, New Zealand",    

        mainImage: "./img/hotels/cathedral-main-img.png",
        img1: "./img/hotels/cathedral-img-1.png",
        img2: "./img/hotels/cathedral-img-2.png",
        img3: "./img/hotels/cathedral-img-3.png",
        img4: "./img/hotels/cathedral-img-4.png",
        img5: "./img/hotels/cathedral-img-5.png",

        rating: 4.9,
        reviewsNo: 200,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/avocado-toast.png",
        breakfastOption1: "Avocado Toast",
        breakfastDescription1: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement1: ["V", "VG*"],
        breakfastPrice1: 18.50,

        breakfastImg2: "./img/food/spanish-eggs.png",
        breakfastOption2: "Spanish Eggs",
        breakfastDescription2: "Eggs poached in a tomato sauce. Servec with sourdough toast",
        breakfastRequirement2: ["V", "GF*"],
        breakfastPrice2: 19.50,

        breakfastImg3: "./img/food/chia-seed-pudding.png",
        breakfastOption3: "Chia Seed Pudding",
        breakfastDescription3: "Coconut Chia Seed Pudding with seasonal fruit",
        breakfastRequirement3: ["V", "VG", "GF"],
        breakfastPrice3: 17.50,

        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.84091593931837, 
        longitude: 175.80844929618638, 
        marker: "./img/hotel.svg",

    },

    {
        id: 105,
        name: "The Ocean View Hotel",
        type: "Hotel", 
        locationName: "Whitianga",
        reigonName: "Coromandel",
        location: "Whitianga, New Zealand",
        reigon: "Coromandel, New Zealand",    

        mainImage: "./img/hotels/oceanview-main-img.jpg",
        img1: "./img/hotels/oceanview-img-1.jpg",
        img2: "./img/hotels/oceanview-img-2.jpg",
        img3: "./img/hotels/oceanview-img-3.jpg",
        img4: "./img/hotels/oceanview-img-4.jpg",
        img5: "./img/hotels/oceanview-img-5.jpg",

        rating: 3.5,
        reviewsNo: 64,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/full-english.png",
        breakfastOption1: "Full English Style Breakfast",
        breakfastDescription1: "Bacon, Roasted Tomatoes, Baked Beans, and Eggs your way. Served with sourdough toast.",
        breakfastRequirement1: ["GF*"],
        breakfastPrice1: 20.50,

        breakfastImg2: "./img/food/avocado-toast.png",
        breakfastOption2: "Avocado Toast",
        breakfastDescription2: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement2: ["V", "VG*"],
        breakfastPrice2: 18.50,

        breakfastImg3: "./img/food/porridge.png",
        breakfastOption3: "Homemade Porridge",
        breakfastDescription3: "Traditional homemade porridge with steel cut oats. Served with seasonal fruit.",
        breakfastRequirement3: ["v", "VG*"],
        breakfastPrice3: 17.50,

        costPerNight: 157,
        minGuest: 1,
        maxGuest: 2,
        minNight: 1,
        maxNight: 5,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.82994337395195,
        longitude: 175.7049525979734, 
        marker: "./img/hotel.svg",
        
    },



    // Motels

    {
        id: 106,
        name: "Seaview Motel",
        type: "Motel", 
        locationName: "Whitianga",
        reigonName: "Coromandel",
        location: "Whitianga, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/motels/seaview-img-main.png",
        img1: "./img/motels/seaview-img-1.png",
        img2: "./img/motels/seaview-img-2.png",
        img3: "./img/motels/seaview-img-3.png",
        img4: "./img/motels/seaview-img-4.png",
        img5: "./img/motels/seaview-img-5.png",

        rating: 3.7,
        reviewsNo: 157,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/cereal-selection.jpg",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/pastry-selection.jpg",
        breakfastOption2: "Pastry of the Day",
        breakfastDescription2: "Selection of pastries, made in house daily",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 6,

        breakfastImg3: "./img/food/fruit-salad.jpg",
        breakfastOption3: "Fruit Salad",
        breakfastDescription3: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 5,

        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Pool", "Free Cancelation","Free Parking"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.82515425566253, 
        longitude: 175.70227305787188,
        marker: "./img/motel.svg",
       
    },

    {

        id: 107,
        name: "Cook's Beach Motel",
        type: "Motel", 
        locationName: "Cook's Beach",
        reigonName: "Coromandel",
        location: "Cook's Beach, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/motels/cooks-main-img.jpg",
        img1: "./img/motels/seaview-img-1.png",
        img2: "./img/motels/seaview-img-2.png",
        img3: "./img/motels/seaview-img-3.png",
        img4: "./img/motels/seaview-img-4.png",
        img5: "./img/motels/seaview-img-5.png",

        rating: 4.1,
        reviewsNo: 52,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1:  "./img/food/fruit-salad.jpg",
        breakfastOption1: "Fruit Salad",
        breakfastDescription1: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement1:  ["VG", "V", "GF"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/cooked-breakfast-buffet.jpg",
        breakfastOption2: "Cooked Breakfast Buffet",
        breakfastDescription2: "Selection of cooked breakfast items",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 10,

        breakfastImg3: "./img/food/toast-selection.jpg",
        breakfastOption3: "Toast Buffet",
        breakfastDescription3: "Toast, sereved with a range of spreads",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 4,


        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Late Check Out"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.83763932778573, 
        longitude: 175.74035469061513,
        marker: "./img/motel.svg",
    },

    {
        id: 108,
        name: "Whitianga Motel",
        type: "Motel", 
        locationName: "Whitianga",
        reigonName: "Coromandel",
        location: "Whitianga, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/motels/whitianga-main-img.jpg",
        img1: "./img/motels/seaview-img-1.png",
        img2: "./img/motels/seaview-img-2.png",
        img3: "./img/motels/seaview-img-3.png",
        img4: "./img/motels/seaview-img-4.png",
        img5: "./img/motels/seaview-img-5.png",

        rating: 3.9,
        reviewsNo: 400,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1:  "./img/food/cereal-selection.png",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,
        
        breakfastImg2: "./img/food/cooked-breakfast-buffet.jpg",
        breakfastOption2: "Cooked Breakfast Buffet",
        breakfastDescription2: "Selection of cooked breakfast items",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 10,

        breakfastImg3: "./img/food/pastry-selection.png",
        breakfastOption3: "Pastry of the Day",
        breakfastDescription3: "Selection of pastries, made in house daily",
        breakfastRequirement3: ["V"],
        breakfastPrice3: 6,

        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.83886835994253,
        longitude: 175.7030567484165, 
        marker: "./img/motel.svg",
    },

    {
        id: 109,
        name: "Beach Motel",
        type: "Motel", 
        locationName: "Matarangi",
        reigonName: "Coromandel",
        location: "Matarangi, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/motels/whitianga-main-img.jpg",
        img1: "./img/motels/seaview-img-1.png",
        img2: "./img/motels/seaview-img-2.png",
        img3: "./img/motels/seaview-img-3.png",
        img4: "./img/motels/seaview-img-4.png",
        img5: "./img/motels/seaview-img-5.png",

        rating: 4.1,
        reviewsNo: 80,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/cereal-selection.jpg",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2:  "./img/food/fruit-salad.jpg",
        breakfastOption2: "Fruit Salad",
        breakfastDescription2: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement2:  ["VG", "V", "GF"],
        breakfastPrice2: 5,

        breakfastImg3: "./img/food/toast-selection.jpg",
        breakfastOption3: "Toast Buffet",
        breakfastDescription3: "Toast, sereved with a range of spreads",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 4,

        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.73126530092602, 
        longitude: 175.67995474915972,
        marker: "./img/motel.svg",
    },

    {
        id: 110,
        name: "Whangapoua Motel",
        type: "Motel", 
        locationName: "Whangapoua",
        reigonName: "Coromandel",
        location: "Whangapoua, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/motels/whangapua-main-img.jpg",
        img1: "./img/motels/seaview-img-1.png",
        img2: "./img/motels/seaview-img-2.png",
        img3: "./img/motels/seaview-img-3.png",
        img4: "./img/motels/seaview-img-4.png",
        img5: "./img/motels/seaview-img-5.png",

        rating: 4.6,
        reviewsNo: 20,

        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1:  "./img/food/fruit-salad.jpg",
        breakfastOption1: "Fruit Salad",
        breakfastDescription1: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement1:  ["VG", "V", "GF"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/cooked-breakfast-buffet.jpg",
        breakfastOption2: "Cooked Breakfast Buffet",
        breakfastDescription2: "Selection of cooked breakfast items",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 10,

        breakfastImg3: "./img/food/toast-selection.jpg",
        breakfastOption3: "Toast Buffet",
        breakfastDescription3: "Toast, sereved with a range of spreads",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 4,

        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.71611409084271, 
        longitude: 175.6195579361934 ,
        marker: "./img/motel.svg",
    },


    // Hostels

    {
        id: 111,
        name: "Coromandel Youth Hostel",
        type: "Hostel", 
        locationName: "Whitianga",
        reigonName: "Coromandel",
        location: "Whitianga, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/hostel/cya-main-img.jpg",
        img1: "./img/hostel/cya-img-1.jpg",
        img2: "./img/hostel/cya-img-2.jpg",
        img3: "./img/hostel/cya-img-3.jpg",
        img4: "./img/hostel/cya-img-4.jpg",
        img5: "./img/hostel/cya-img-5.jpg",

        rating: 3.9,
        reviewsNo: 313,
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1:  "./img/food/fruit-salad.jpg",
        breakfastOption1: "Fruit Salad",
        breakfastDescription1: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement1:  ["VG", "V", "GF"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/cooked-breakfast-buffet.jpg",
        breakfastOption2: "Cooked Breakfast Buffet",
        breakfastDescription2: "Selection of cooked breakfast items",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 10,

        breakfastImg3: "./img/food/toast-selection.jpg",
        breakfastOption3: "Toast Buffet",
        breakfastDescription3: "Toast, sereved with a range of spreads",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 4,

        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Free Cancelation"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.83949375865749,
        longitude: 175.69138491931892,        
    },

    {
        id: 112,
        name: "Optio Bay Backpackers",
        type: "Hostel", 
        locationName: "Optio Bay",
        reigonName: "Coromandel",
        location: "Opito Bay, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/hostel/opito-main-img.jpg",
        img1: "./img/hostel/opito-img-1.jpg",
        img2: "./img/hostel/opito-img-2.jpg",
        img3: "./img/hostel/opito-img-3.jpg",
        img4: "./img/hostel/opito-img-4.jpg",
        img5: "./img/hostel/opito-img-5.jpg",

        rating: 4.3,
        reviewsNo: 202,
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        
        breakfastImg1: "./img/food/cereal-selection.jpg",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/pastry-selection.jpg",
        breakfastOption2: "Pastry of the Day",
        breakfastDescription2: "Selection of pastries, made in house daily",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 6,

        breakfastImg3: "./img/food/fruit-salad.jpg",
        breakfastOption3: "Fruit Salad",
        breakfastDescription3: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 5,

        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Free Cancelation"],
        cancellation: "get a 50% refund, minus the first night and service fee",
      
        latitude: -36.72296194864805, 
        longitude: 175.80564070167569,      
        marker: "./img/backpackers.svg",
        
    },

    {
        id: 113,
        name: "",
        type: "", 
        locationName: "Optio Bay",
        reigonName: "Coromandel",
        location: "Opito Bay, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "",
        img1: "./img/hostel/cya-img-1.jpg",
        img2: "./img/hostel/cya-img-2.jpg",
        img3: "./img/hostel/cya-img-3.jpg",
        img4: "./img/hostel/cya-img-4.jpg",
        img5: "./img/hostel/cya-img-5.jpg",

        rating: "",
        reviewsNo: "",
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1:  "./img/food/fruit-salad.jpg",
        breakfastOption1: "Fruit Salad",
        breakfastDescription1: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement1:  ["VG", "V", "GF"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/cooked-breakfast-buffet.jpg",
        breakfastOption2: "Cooked Breakfast Buffet",
        breakfastDescription2: "Selection of cooked breakfast items",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 10,

        breakfastImg3: "./img/food/toast-selection.jpg",
        breakfastOption3: "Toast Buffet",
        breakfastDescription3: "Toast, sereved with a range of spreads",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 4,

        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",
      
        latitude: "", 
        longitude: "",     
        marker: "./img/backpackers.svg", 
        
    },

    {
        id: 114,
        name: "",
        type: "", 
        locationName: "Optio Bay",
        reigonName: "Coromandel",
        location: "Opito Bay, New Zealand",
        reigon: "Coromandel, New Zealand", 


        mainImage: "",
        img1: "./img/hostel/cya-img-1.jpg",
        img2: "./img/hostel/cya-img-2.jpg",
        img3: "./img/hostel/cya-img-3.jpg",
        img4: "./img/hostel/cya-img-4.jpg",
        img5: "./img/hostel/cya-img-5.jpg",

        rating: "",
        reviewsNo: "",
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        
        breakfastImg1: "./img/food/cereal-selection.jpg",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/pastry-selection.jpg",
        breakfastOption2: "Pastry of the Day",
        breakfastDescription2: "Selection of pastries, made in house daily",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 6,

        breakfastImg3: "./img/food/fruit-salad.jpg",
        breakfastOption3: "Fruit Salad",
        breakfastDescription3: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 5,

        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",
      
        latitude: "", 
        longitude: "",      
        marker: "./img/backpackers.svg",
    },

    {
        id: 115,
        name: "",
        type: "", 
        locationName: "Optio Bay",
        reigonName: "Coromandel",
        location: "Opito Bay, New Zealand",
        reigon: "Coromandel, New Zealand", 


        mainImage: "",
        img1: "./img/hostel/cya-img-1.jpg",
        img2: "./img/hostel/cya-img-2.jpg",
        img3: "./img/hostel/cya-img-3.jpg",
        img4: "./img/hostel/cya-img-4.jpg",
        img5: "./img/hostel/cya-img-5.jpg",

        rating: "",
        reviewsNo: "",
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

       
        breakfastImg1: "./img/food/cereal-selection.jpg",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/pastry-selection.jpg",
        breakfastOption2: "Pastry of the Day",
        breakfastDescription2: "Selection of pastries, made in house daily",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 6,

        breakfastImg3: "./img/food/fruit-salad.jpg",
        breakfastOption3: "Fruit Salad",
        breakfastDescription3: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement3: ["VG", "V", "GF"],
        breakfastPrice3: 5,

        costPerNight: 30,
        minGuest: 1,
        maxGuest: 1,
        minNight: 1,
        maxNight: 10,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",
      
        latitude: "", 
        longitude: "",      
        marker: "./img/backpackers.svg",
    },



    // Houses

    {
        id: 116,
        name: "Relaxation on the Cove",
        type: "House", 
        locationName: "Hahei",
        reigonName: "Coromandel",
        location: "Hahei, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/houses/relaxation-main-img.jpg",
        img1: "./img/houses/relaxation-img-1.jpg",
        img2: "./img/houses/relaxation-img-2.jpg",
        img3: "./img/houses/relaxation-img-3.jpg",
        img4: "./img/houses/relaxation-img-4.jpg",
        img5: "./img/houses/relaxation-img-5.jpg",
       
        rating: 4.6,
        reviewsNo: 322,
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

       
        breakfastImg1: "./img/food/avocado-toast.png",
        breakfastOption1: "Avocado Toast",
        breakfastDescription1: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement1: ["V", "VG*"],
        breakfastPrice1: 18.50,

        breakfastImg2: "./img/food/spanish-eggs.png",
        breakfastOption2: "Spanish Eggs",
        breakfastDescription2: "Eggs poached in a tomato sauce. Servec with sourdough toast",
        breakfastRequirement2: ["V", "GF*"],
        breakfastPrice2: 19.50,

        breakfastImg3: "./img/food/chia-seed-pudding.png",
        breakfastOption3: "Chia Seed Pudding",
        breakfastDescription3: "Coconut Chia Seed Pudding with seasonal fruit",
        breakfastRequirement3: ["V", "VG", "GF"],
        breakfastPrice3: 17.50,

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking"],
        cancellation: "get a 50% refund, minus the first night and service fee",
      
        latitude: -36.8435427107329, 
        longitude: 175.8018675620926,  
        marker: "./img/house.svg",
    },

    {
        id: 117,
        name: "Seaside Stay",
        type: "House", 
        locationName: "Matarangi",
        reigonName: "Coromandel",
        location: "Matarangi, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "./img/houses/seaside-main-img.jpg",
        img1: "./img/houses/seaside-img-1.jpg",
        img2: "./img/houses/seaside-img-2.jpg",
        img3: "./img/houses/seaside-img-3.jpg",
        img4: "./img/houses/seaside-img-4.jpg",
        img5: "./img/houses/seaside-img-5.jpg",
       
        rating: 4.6,
        reviewsNo: 79,
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/full-english.png",
        breakfastOption1: "Full English Style Breakfast",
        breakfastDescription1: "Bacon, Roasted Tomatoes, Baked Beans, and Eggs your way. Served with sourdough toast.",
        breakfastRequirement1: ["GF*"],
        breakfastPrice1: 20.50,

        breakfastImg2: "./img/food/avocado-toast.png",
        breakfastOption2: "Avocado Toast",
        breakfastDescription2: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement2: ["V", "VG*"],
        breakfastPrice2: 18.50,

        breakfastImg3: "./img/food/porridge.png",
        breakfastOption3: "Homemade Porridge",
        breakfastDescription3: "Traditional homemade porridge with steel cut oats. Served with seasonal fruit.",
        breakfastRequirement3: ["v", "VG*"],
        breakfastPrice3: 17.50,

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking", "Spa"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.728934370800474,
        longitude:  175.6648067027582,    
        marker: "./img/house.svg",
    },

    {
        id: 118,
        name: "Paradise Retreat",
        type: "House", 
        locationName: "Whitianga",
        reigonName: "Coromandel",
        location: "Whitianga, New Zealand",
        reigon: "Coromandel, New Zealand", 
        

        mainImage: "./img/houses/paradise-main-img.jpg",
        img1: "./img/houses/paradise-img-1.jpg",
        img2: "./img/houses/paradise-img-2.jpg",
        img3: "./img/houses/paradise-img-3.jpg",
        img4: "./img/houses/paradise-img-4.jpg",
        img5: "./img/houses/paradise-img-5.jpg",
       
        rating: 3.9,
        reviewsNo: 200,
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/full-english.png",
        breakfastOption1: "Full English Style Breakfast",
        breakfastDescription1: "Bacon, Roasted Tomatoes, Baked Beans, and Eggs your way. Served with sourdough toast.",
        breakfastRequirement1: ["GF*"],
        breakfastPrice1: 20.50,

        breakfastImg2: "./img/food/avocado-toast.png",
        breakfastOption2: "Avocado Toast",
        breakfastDescription2: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement2: ["V", "VG*"],
        breakfastPrice2: 18.50,

        breakfastImg3: "./img/food/porridge.png",
        breakfastOption3: "Homemade Porridge",
        breakfastDescription3: "Traditional homemade porridge with steel cut oats. Served with seasonal fruit.",
        breakfastRequirement3: ["v", "VG*"],
        breakfastPrice3: 17.50,

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.84292034290379, 
        longitude: 175.68920835451485 ,       
        marker: "./img/house.svg",
    },

    {
        id: 119,
        name: "Cosy Cottage",
        type: "House", 
        locationName: "Hot Water Beach",
        reigonName: "Coromandel",
        location: "Hot Water Beach, New Zealand",
        reigon: "Coromandel, New Zealand",
        
        mainImage: "./img/houses/cosy-main-img.jpg",
        img1: "./img/houses/cosy-img-1.jpg",
        img2: "./img/houses/cosy-img-2.jpg",
        img3: "./img/houses/cosy-img-3.jpg",
        img4: "./img/houses/cosy-img-4.jpg",
        img5: "./img/houses/cosy-img-5.jpg",
       
        rating: "4.2",
        reviewsNo: "132",
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

       
        breakfastImg1: "./img/food/avocado-toast.png",
        breakfastOption1: "Avocado Toast",
        breakfastDescription1: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement1: ["V", "VG*"],
        breakfastPrice1: 18.50,

        breakfastImg2: "./img/food/spanish-eggs.png",
        breakfastOption2: "Spanish Eggs",
        breakfastDescription2: "Eggs poached in a tomato sauce. Servec with sourdough toast",
        breakfastRequirement2: ["V", "GF*"],
        breakfastPrice2: 19.50,

        breakfastImg3: "./img/food/chia-seed-pudding.png",
        breakfastOption3: "Chia Seed Pudding",
        breakfastDescription3: "Coconut Chia Seed Pudding with seasonal fruit",
        breakfastRequirement3: ["V", "VG", "GF"],
        breakfastPrice3: 17.50,

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.88943101338873, 
        longitude: 175.8268424102878,       
        marker: "./img/house.svg",
    },

    {
        id: 120,
        name: "Directors Stay",
        type: "House", 
        locationName: "Opito Bay",
        reigonName: "Coromandel",
        location: "Opito Bay, New Zealand",
        reigon: "Coromandel, New Zealand",

        mainImage: "./img/houses/directors-main-img.jpg",
        img1: "./img/houses/directors-img-1.jpg",
        img2: "./img/houses/directors-img-2.jpg",
        img3: "./img/houses/directors-img-3.jpg",
        img4: "./img/houses/directors-img-4.jpg",
        img5: "./img/houses/directors-img-5.jpg",
       
        rating: "4.9",
        reviewsNo: "320",
       
        reviewImg1: "./img/reviews/review-img-1.png",
        reviewName1: "Steve S.",
        reviewDate1: "4 months",
        reviewContent1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating1: "4.0",

        reviewImg2: "./img/reviews/review-img-2.png",
        reviewName2: "Marylin P.",
        reviewDate2: "2 weeks",
        reviewContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating2: "4.5",
        
        reviewImg3: "./img/reviews/review-img-3.png",
        reviewName3: "Martin L.",
        reviewDate3: "5 days",
        reviewContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating3: "5.0",

        reviewImg4: "./img/reviews/review-img-4.png",
        reviewName4: "Aaron G.",
        reviewDate4: "5 months",
        reviewContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating4: "4.0",

        reviewImg5: "./img/reviews/review-img-5.png",
        reviewName5: "Paul E.",
        reviewDate5: "1 year",
        reviewContent5: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut",
        reviewRating5: "4.5",

        breakfastImg1: "./img/food/full-english.png",
        breakfastOption1: "Full English Style Breakfast",
        breakfastDescription1: "Bacon, Roasted Tomatoes, Baked Beans, and Eggs your way. Served with sourdough toast.",
        breakfastRequirement1: ["GF*"],
        breakfastPrice1: 20.50,

        breakfastImg2: "./img/food/avocado-toast.png",
        breakfastOption2: "Avocado Toast",
        breakfastDescription2: "Smashed Avocado on Toast with Eggs your way",
        breakfastRequirement2: ["V", "VG*"],
        breakfastPrice2: 18.50,

        breakfastImg3: "./img/food/porridge.png",
        breakfastOption3: "Homemade Porridge",
        breakfastDescription3: "Traditional homemade porridge with steel cut oats. Served with seasonal fruit.",
        breakfastRequirement3: ["v", "VG*"],
        breakfastPrice3: 17.50,

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.721593830379874, 
        longitude: 175.80539364463525,       
        marker: "./img/house.svg",
    },


];

console.log(accommodation);


// -------------------------------------------------------------------------------------------------------------------------------------------
// initialise map


function initMap(){


    let coromandel = {lat: -36.80307354850859,  lng: 175.65618764138338};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11, 
        center: coromandel,
    });
  
    // Auto Complete Form
    autoComp = new google.maps.places.Autocomplete(
        document.getElementById('searchBar'),
        {
            types: ['(cities)']
        }
    );

    $("#checkInDate").datepicker({
        
        duration: "slow",
        showAnim: "drop", 
        showOptions: {direction: "up"}, 

        // date format will format the date
        dateFormat: 'yy-mm-dd',
        // changeMonth lets us change the month
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',
        onSelect: function(date){

            let selectDate = new Date(date);
            // ms in a day
            let msecInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msecInADay);

            $('#checkOutDate').datepicker('option', 'minDate', stDate);
            let enDate = new Date(selectDate.getTime() + 15 * msecInADay);

            $('#checkOutDate').datepicker('option','maxDate', enDate);

        }
    });

    $("#checkOutDate").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true, 
        duration: "slow",
        showAnim: "drop", 
        showOptions: {direction: "up"}, 
    });

    $("#calculateDays").click(function(){
        dateDiff();
    });

    function dateDiff(){
        let start = $(startDate).datepicker('getDate');
        let end = $(endDate).datepicker('getDate');
   
        // calculation to get readable days
        let days = (end - start)/1000/60/60/24;
        $("#days").val(days);

    }
}


// -------------------------------------------------------------------------------------------------------------------------------------------
// initialise map


function appendHomeCards(){

    for(let i=0; i<accommodation.length; i++){
       if(accommodation[i].rating >= 4.5)
         generateTopCardHome(i);
    }
    
}

appendHomeCards();


// -------------------------------------------------------------------------------------------------------------------------------------------
// initial filters


function initialFilterOptions(event){
    event.preventDefault();
    console.log("clicked");

    let msDay = 100 * 36000 * 24;

    let checkInDate = new Date($("#checkInDate").val());
    let checkOutDate = new Date($("#checkOutDate").val());

    let checkInDateShort = checkInDate.toDateString();
    let checkOutDateShort = checkOutDate.toDateString();
    
    console.log(checkInDate);
    console.log(checkOutDate);

    let dateDifference = checkOutDate.getTime() - checkInDate.getTime();
    let numberOfDays = dateDifference/msDay;
    console.log(numberOfDays);

    let numberOfPeople = $("#guestsNumber").val();
    console.log(numberOfPeople);

    let accommodationLocation = $("#searchBar").val();
    
   if ((accommodationLocation === "") && ((checkInDate == "Invalid Date") || (checkOutDate == "Invalid Date")) && (numberOfPeople === null)){
        alert("Please make sure you have filled all search fields");
    } else if (accommodationLocation === ""){
        alert("Please make sure you have entered a location");
    } else if ((checkInDate == "Invalid Date") || (checkOutDate == "Invalid Date")) {
        alert("Please make sure you have entered a check in and check out date");
    } else if (numberOfPeople === null) {
        alert("Please enter your number of guests");
    } else {
        displayInitialOptions(numberOfDays, numberOfPeople, accommodationLocation, checkInDateShort, checkOutDateShort);
    }      

}


// -------------------------------------------------------------------------------------------------------------------------------------------
// display initial results


function displayInitialOptions(nights, guests, city, first, last){

    reloadMarkers();

    console.log(nights);
    console.log(guests);
    console.log(city);

    let totalNightsCost;


    if (city === "Coromandel, New Zealand"){

        $(".home-container").css("display", "none");
        $(".content").css("display", "block");
    
        $("#cardContainerSearchResults").empty();
        $("#cardContainerTopStay").empty();

        for (let i=0; i < accommodation.length; i++){

            totalNightsCost = nights * accommodation[i].costPerNight;
           
            let markerImage = {
                url: accommodation[i].marker,
                scaledSize: new google.maps.Size(60, 60), // scaled size
                origin: new google.maps.Point(0,0), // origin
            };
          

            if ((city === accommodation[i].location || city === accommodation[i].reigon) && (nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest)){
                generateResultCard(i, totalNightsCost);
                console.log(totalNightsCost);

                let accommodationResult = accommodation[i];
                results.push(accommodationResult);


                let location = {lat: accommodation[i].latitude, lng: accommodation[i].longitude};
                console.log(location);
                locations.push(location);
                
                let marker = new google.maps.Marker({
                    position: location,
                    map:map,
                    icon: markerImage,
                });

                console.log(marker);
                markers.push(marker);
            } 
            
            if ((city === accommodation[i].location || city === accommodation[i].reigon) && (nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest) && (accommodation[i].rating >= 4)){
                generateTopCard(i);
            }  
        }

    } else {
        alert("No stays there sorry! Try searching Coromandel, New Zealand instead.");
    }

    console.log(results);
    costCalcArray.push(totalNightsCost);
    accommodationDetails(nights, first, last,totalNightsCost);
}


// -------------------------------------------------------------------------------------------------------------------------------------------
// refresh markers

function reloadMarkers() {

    for (let i=0; i < markers.length; i++){
        markers[i].setMap(null);
    }

    markers = [];

}


// -------------------------------------------------------------------------------------------------------------------------------------------
// accommodation details


function accommodationDetails(nightsTotal, checkIn, checkOut, total){

   
    let totalNights = nightsTotal;
    let firstNight = checkIn;
    let lastNight = checkOut;

    let totalBill = total;

    console.log(totalNights); 


    $(".card-link").on("click", function(){

        $("#body").empty().append(
            `
            <div class="accommodation-details" id="accommodationDetails">

            `
        );


        for (let i=0; i < accommodation.length; i++){

            let centerMap = {lat: accommodation[i].latitude,  lng: accommodation[i].longitude};
            let markerImage = {
                url: accommodation[i].marker,
                scaledSize: new google.maps.Size(60, 60), // scaled size
                origin: new google.maps.Point(0,0), // origin
            };
          
            priceOne = accommodation[i].breakfastPrice1;
            priceTwo = accommodation[i].breakfastPrice2;
            priceThree = accommodation[i].breakfastPrice3;
        
            mealNameOne = accommodation[i].breakfastOption1;
            mealNameTwo = accommodation[i].breakfastOption2;
            mealNameThree = accommodation[i].breakfastOption3;
        

            if (parseInt(this.id) === accommodation[i].id){
                console.log(accommodation[i].name);

                // function accommodationDetailsAppend(){

                    reloadMarkers();
                
                    $("#accommodationDetails").empty().append(
                        `
                        <div class="accommodation-details__img-container">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${accommodation[i].mainImage}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${accommodation[i].img1}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${accommodation[i].img2}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${accommodation[i].img3}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${accommodation[i].img4}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="${accommodation[i].img5}" class="d-block w-100" alt="...">
                                </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    
                        <div class="accommodation-details__info">
                            
                            <div class="accommodation-details__header">
                                <h1 class="accommodation-name"><b>${accommodation[i].name}</b></h1>
                                <i class="fa-solid fa-heart"></i>
                            </div>              
                            <h3 class="accommodation-location">${accommodation[i].locationName}, ${accommodation[i].reigonName}, NZ</h3>
                            <div class="accommodation-reviews">
                                <p class="rating-text"><i class="fas fa-star"></i>${accommodation[i].rating}</p> <p class="review-number"><i>(${accommodation[i].reviewsNo} reviews)</i></p>
                            </div>
                            <div class="accommodation-description">
                                <p class="description">${accommodation[i].descriptionShort}</p>
                            </div>
                        </div>
                                    
                        <div class="accommodation-reviews-details">
                            <h2 class="reviews-heading"><b>REVIEWS</b></h2>
                            <div class="review-cards-container">
                                <div class="review-cards" id="reviewsCards"></div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="accommodation-map" id="accommodationMap"></div>
                        
                        <div class="accommodation-breakfast">
                            <h2 class="breakfast-heading"><b>BREAKFAST OPTIONS</b></h2>
                    
                            <div class="breakfast-options-container">
                                <div class="breakfast-options" id="breakfastOptions"></div>
                                <div class="breakfast-order-summary" id="breakfastOrderSummary"></div>
                            </div>
                        </div>
                    
                        <div class="accommodation-dates">
                    
                            <h2 class="dates-heading"><b>YOUR DETAILS</b></h2>
                            <div class="dates-container">
                                <div class="accommodation-dates">
                                    <div class="check-in-date">
                                        <p class="check-in-date__heading"><b>CHECK IN:</b></p>
                                        <p class="date">${firstNight}</p> <br>
                                        <p class="time"> After 2pm</p>
                                    </div>
                                    <div class="check-out-date">
                                        <p class="check-out-date__heading"><b>CHECK OUT:</b></p>
                                        <p class="date">${lastNight}</p> <br>
                                        <p class="time"> Before 10am</p>
                                    </div>
                                </div>          
                            </div>
                            <div class="meals-container">
                                <h2 class="dates-heading"><b>YOUR MEAL ORDER</b></h2>
                                <div class="meal-summary" id="mealsContainer"></div> 
                                <button class="add-to-booking" id="addToBooking">Add selection to booking</button>
                            </div>
                            
                        </div>
                           
                        <div class="accommodation-details__footer">
                            <div class="cost-summary">
                                <h4 id="totalCost">$${totalBill}</h4>
                                <div class="cost-breakdown">
                                    <p>${totalNights} nights</p>
                                    <i class="fa-solid fa-circle"></i>
                                    <p>${firstNight} - ${lastNight}</p>
                                </div>
                            </div>
                            <button type="button" class="btn book-now btn-primary" id="thankYouLaunch">
                                Book Now
                            </button>
                        </div>
                    </div>
                    `
                    );
                
                    
                    $("#breakfastOptions").append(
                        `                       
                        <div class="card meal-one">
                            <input type="image" class="card-img-top"value="meal-one" src="${accommodation[i].breakfastImg1}" alt="Card image cap">
                            <div class="card-body">
                            <div class="card-top-line">
                                <h5 class="card-title" id="breakfastName1">${accommodation[i].breakfastOption1}</h5>
                            </div>
                                <p class="price-text" id="breakfastPrice1>$${accommodation[i].breakfastPrice1}</p>
                                <p class="card-text">${accommodation[i].breakfastDescription1}</p>
                                <p class="card-text">${accommodation[i].breakfastRequirement1}</p>
                                <div class="card-button-container">
                                <button class="card-add" id="breakfastImage1">ADD</button>
                                </div>
                            </div>
                        </div>
                
                        <div class="card meal-one">
                            <input type="image" class="card-img-top" value="meal-two" src="${accommodation[i].breakfastImg2}" alt="Card image cap">
                            <div class="card-body">
                            <div class="card-top-line">
                                <h5 class="card-title" id="breakfastName2">${accommodation[i].breakfastOption2}</h5>
                            </div>
                                <p class="price-text"  id="breakfastPrice2">$${accommodation[i].breakfastPrice2}</p>
                                <p class="card-text">${accommodation[i].breakfastDescription2}</p>
                                <p class="card-text">${accommodation[i].breakfastRequirement2}</p>
                                <div class="card-button-container">
                                <button class="card-add" id="breakfastImage2">ADD</button>
                                </div>
                            </div>
                        </div>
                
                       <div class="card meal-one">
                            <input type="image" class="card-img-top"  value="meal-three" src="${accommodation[i].breakfastImg3}" alt="Card image cap">
                            <div class="card-body">
                            <div class="card-top-line">
                                <h5 class="card-title" id="breakfastName3">${accommodation[i].breakfastOption3}</h5>
                            </div>
                                <p class="price-text" id="breakfastPrice3">$${accommodation[i].breakfastPrice3}</p>
                                <p class="card-text">${accommodation[i].breakfastDescription3}</p>
                                <p class="card-text">${accommodation[i].breakfastRequirement3}</p>
                                <div class="card-button-container">
                                <button class="card-add" id="breakfastImage3">ADD</button>
                                </div>
                            </div>
                        </div>
                        `  
                    );

                    selectMeals(i);
                    generateReviewCard(i);


                    mapDetail = new google.maps.Map(document.getElementById("accommodationMap"), {
                        zoom: 12, 
                        center: centerMap,
                    });

                    let markerDetail = new google.maps.Marker({
                        position: centerMap,
                        map:mapDetail,
                        icon: markerImage,
                    });

                    markers.push(markerDetail);
                }

            }
        });   

        console.log(costCalcArray);
    } 

     
// -------------------------------------------------------------------------------------------------------------------------------------------
// select meals


function selectMeals(x){

    let breakfastInfo1 = [accommodation[x].breakfastOption1, accommodation[x].breakfastPrice1];
    let breakfastInfo2 = [accommodation[x].breakfastOption2, accommodation[x].breakfastPrice2];
    let breakfastInfo3 = [accommodation[x].breakfastOption3, accommodation[x].breakfastPrice3];
    let costArray = [];

    $("#breakfastImage1").on("click", function(){
        console.log(breakfastInfo1);       
    
        $("#mealsContainer").append(
        `
            <div class="meal-selection">
                <p class="meal-name">${breakfastInfo1[0]}</p>
                <p class="meal-price" id="mealPrice">$${breakfastInfo1[1]}</p>
            </div>
        `
        );              
        
        costArray.push(breakfastInfo1[1]);
    
    });
    
    $("#breakfastImage2").on("click", function(){
        console.log(breakfastInfo2);  

        $("#mealsContainer").append(
            `
                <div class="meal-selection">
                    <p class="meal-name">${breakfastInfo2[0]}</p>
                    <p class="meal-price" id="mealPrice">$${breakfastInfo2[1]}</p>
                </div>
            `
            );       

            costArray.push(breakfastInfo2[1]);

    });
        
    $("#breakfastImage3").on("click", function(){
        console.log(breakfastInfo3); 

        $("#mealsContainer").append(
            `
                <div class="meal-selection">
                    <p class="meal-name">${breakfastInfo3[0]}</p>
                    <p class="meal-price" id="mealPrice">$${breakfastInfo3[1]}</p>
                </div>
            `
            );        

            costArray.push(breakfastInfo3[1]);
    });

    $("#addToBooking").on("click", function(){
        
        let mealSum = costArray.reduce(function(pv, cv) { return pv + cv; }, 0);
        console.log(mealSum);
        costCalcArray.push(mealSum);


        $("#mealsContainer").empty();
        totalBillCalc();
    });
}


// -------------------------------------------------------------------------------------------------------------------------------------------
// total bill calculation


function totalBillCalc(){

    let finalCost = costCalcArray.reduce(function(pv, cv) { return pv + cv; }, 0);
    let finalCostFormat = (Math.round(finalCost * 100) / 100).toFixed(2);

    console.log(finalCost);

    $("#totalCost").empty().append(
        `
            $${finalCostFormat}
        `
    );

    $("#thankYouLaunch").on("click", function(){
        $(".accommodation-details").css("display", "none");
        $(".thank-you-container").css("display", "block");
    });
}

$("#bookAgain").on("click", function(){
    window.location.reload();
});


// -------------------------------------------------------------------------------------------------------------------------------------------
// card generators


function generateTopCard(x){
    $("#cardContainerTopStay").append(
        `
        <div class="card" style="width: 25rem;">
            <img class="card-img-top" src="${accommodation[x].mainImage}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"><b>${accommodation[x].name}</b></h5>
                <h6 class="card-location"><i>${accommodation[x].locationName}, ${accommodation[x].reigonName}, NZ</i></h5>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a class="card-link" id="${accommodation[x].id}" ><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    );
}


function generateTopCardHome(x){
    $("#homeTopStays").append(
        `
        <div class="card home__top-stay-card" style="width: 25rem;">
            <img class="card-img-top" src="${accommodation[x].mainImage}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"><b>${accommodation[x].name}</b></h5>
                <h6 class="card-location"><i>${accommodation[x].locationName}, ${accommodation[x].reigonName}, NZ</i></h5>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a class="card-link" id="${accommodation[x].id}" ><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    );
}


function generateResultCard(x, y){

    $("#cardContainerSearchResults").append(
        `
        <div class="card">
            <img class="card-img-top" src="${accommodation[x].mainImage}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[x].name}</h5>
                <i class="far fa-heart"></i>
            </div>
                <h6 class="card-location">${accommodation[x].locationName}, ${accommodation[x].reigonName}, NZ</h5>
                <div class="reviews">
                    <p class="rating-text"><i class="fas fa-star"></i>  ${accommodation[x].rating}</p> <p class="review-number"><i>(${accommodation[x].reviewsNo} reviews)</i></p>
                </div>
                <div class="price-info">
                <p class="price-text">$${y} total</p>
                <p class="price-per-night">$${accommodation[x].costPerNight}/night</p>
                </div>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a class="card-link" id="${accommodation[x].id}"><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    );

}


function generateReviewCard(x){
    $("#reviewsCards").append(
        `
        
        <div class="card review-one">
            <div class="card-top">
                <img class="card-img-top" src="${accommodation[x].reviewImg1}"  alt="Card image cap">
                <div class="card-top-line">
                    <h5 class="card-name">${accommodation[x].reviewName1}</h5>
                    <h5 class="card-date">${accommodation[x].reviewDate1}</h5>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">${accommodation[x].reviewContent1}</p>                  
            </div>
            <div class="card-bottom">
                <p class="card-rating"><i class="fas fa-star"></i> ${accommodation[x].reviewRating1}</p>
            </div>    
        </div>

        <div class="card review-two">
            <div class="card-top">
                <img class="card-img-top" src="${accommodation[x].reviewImg2}"  alt="Card image cap">
                <div class="card-top-line">
                    <h5 class="card-name">${accommodation[x].reviewName2}</h5>
                    <h5 class="card-date">${accommodation[x].reviewDate2}</h5>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">${accommodation[x].reviewContent2}</p>                  
            </div>
            <div class="card-bottom">
                <p class="card-rating"><i class="fas fa-star"></i> ${accommodation[x].reviewRating2}</p>
            </div>    
        </div>

        <div class="card review-three">
            <div class="card-top">
            <img class="card-img-top" src="${accommodation[x].reviewImg3}"  alt="Card image cap">
            <div class="card-top-line">
                <h5 class="card-name">${accommodation[x].reviewName3}</h5>
                <h5 class="card-date">${accommodation[x].reviewDate3}</h5>
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">${accommodation[x].reviewContent3}</p>                  
            </div>
            <div class="card-bottom">
                <p class="card-rating"><i class="fas fa-star"></i> ${accommodation[x].reviewRating3}</p>
            </div>     
        </div>

        <div class="card review-four">
            <div class="card-top">
            <img class="card-img-top" src="${accommodation[x].reviewImg4}"  alt="Card image cap">
            <div class="card-top-line">
                <h5 class="card-name">${accommodation[x].reviewName4}</h5>
                <h5 class="card-date">${accommodation[x].reviewDate4}</h5>
            </div>
            </div>
            <div class="card-body">
                <p class="card-text">${accommodation[x].reviewContent4}</p>                  
            </div>
            <div class="card-bottom">
                <p class="card-rating"><i class="fas fa-star"></i> ${accommodation[x].reviewRating4}</p>
            </div>     
        </div>
        `
    );
}


// -------------------------------------------------------------------------------------------------------------------------------------------
// event listeners

initialSearch.addEventListener("click", initialFilterOptions);