console.log("howdy");

// map key
let script = "<script src='https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places&callback=initMap' async defer >";


// -------------------------------------------------------------------------------------------------------------------------------------------


//query selectors

const initialSearch = document.querySelector("#initialSearch");
//const applyFilters = document.querySelector("#applyFilters");


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

        mainImage: "./img/motels/seaview-main-img.png",
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

        breakfastImg1: "./img/food/cereal-selection.png",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/pastry-selection.png",
        breakfastOption2: "Pastry of the Day",
        breakfastDescription2: "Selection of pastries, made in house daily",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 6,

        breakfastImg3: "./img/food/fruit-salad.png",
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
       
    },

    {

        id: 107,
        name: "Cook's Beach Motel",
        type: "Motel", 
        locationName: "Cook's Beach",
        reigonName: "Coromandel",
        location: "Cook's Beach, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1:  "./img/food/fruit-salad.png",
        breakfastOption1: "Fruit Salad",
        breakfastDescription1: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement1:  ["VG", "V", "GF"],
        breakfastPrice1: 5,

        breakfastImg2: "./img/food/cooked-breakfast.png",
        breakfastOption2: "Cooked Breakfast Buffet",
        breakfastDescription2: "Selection of cooked breakfast items",
        breakfastRequirement2: ["V"],
        breakfastPrice2: 10,

        breakfastImg3: "./img/food/toast-selection.png",
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
    },

    {
        id: 108,
        name: "",
        type: "Motel", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1:  "./img/food/cereal-selection.png",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,
        
        breakfastImg2: "./img/food/cooked-breakfast.png",
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

        latitude: "", 
        longitude: "",
    },

    {
        id: 109,
        name: "",
        type: "Motel", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1: "./img/food/cereal-selection.png",
        breakfastOption1: "Selection of Cereals",
        breakfastDescription1: "Cereal buffet with seasonal fresh fruit",
        breakfastRequirement1: ["VG", "V"],
        breakfastPrice1: 5,

        breakfastImg2:  "./img/food/fruit-salad.png",
        breakfastOption2: "Fruit Salad",
        breakfastDescription2: "Seasonal fruits, served with greek yoghurt",
        breakfastRequirement2:  ["VG", "V", "GF"],
        breakfastPrice2: 5,

        breakfastImg3: "./img/food/toast-selection.png",
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

        latitude: "", 
        longitude: "",
    },

    {
        id: 110,
        name: "",
        type: "Motel", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

        costPerNight: 90,
        minGuest: 2,
        maxGuest: 4,
        minNight: 3,
        maxNight: 10,
        descriptionShort: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: "", 
        longitude: "",
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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

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
        
    },

    {
        id: 113,
        name: "",
        type: "", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

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
        
    },

    {
        id: 114,
        name: "",
        type: "", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

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
    },

    {
        id: 115,
        name: "",
        type: "", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

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

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
       
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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

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
       
    },

    {
        id: 117,
        name: "Seaside Stay",
        type: "House", 
        locationName: "Matarangi",
        reigonName: "Coromandel",
        location: "Matarangi, New Zealand",
        reigon: "Coromandel, New Zealand", 

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
       
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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: ["Free Wifi", "Late Check Out", "Free Parking", "Spa"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.843780488706656, 
        longitude: 175.8148605326123,       
    },

    {
        id: 118,
        name: "",
        type: "House", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
       
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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: "", 
        longitude: "",       
    },

    {
        id: 119,
        name: "",
        type: "House", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
       
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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: "", 
        longitude: "",       
    },

    {
        id: 120,
        name: "",
        type: "House", 
        location: "",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
       
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

        breakfastImg1: "",
        breakfastOption1: "",
        breakfastDescription1: "",
        breakfastRequirement1: "",

        breakfastImg2: "",
        breakfastOption2: "",
        breakfastDescription2: "",
        breakfastRequirement2: "",

        breakfastImg3: "",
        breakfastOption3: "",
        breakfastDescription3: "",
        breakfastRequirement3: "",

        costPerNight: 240,
        minGuest: 1,
        maxGuest: 4,
        minNight: 2,
        maxNight: 15,
        descriptionShort: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolore explicabo rem iste et perferendis itaque autem aut a inventore nam, temporibus ab quasi voluptate dignissimos error qui nulla sequi?",
        ammenities: [],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: "", 
        longitude: "",       
    },


];

console.log(accommodation);


// -------------------------------------------------------------------------------------------------------------------------------------------


// initialise map

let map;
let autoComp;
let locations = [];
let markers = [];

function initMap(){


    let coromandel = {lat: -36.80307354850859,  lng: 175.65618764138338};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10, 
        center: coromandel,
    });
    
    // Auto Complete Form
    autoComp = new google.maps.places.Autocomplete(
        document.getElementById('searchBar'),
        {
            types: ['(cities)']
        }
    );

    // for(let i=0; i<accommodation.length; i++){
    //     let location = {lat: accommodation[i].latitude,  lng: accommodation[i].longitude};

    //     map = new google.maps.Map(document.getElementById("accommodationMap"), {
    //         zoom: 10, 
    //         center: location,
    //     });
    // }

}

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
    console.log(checkInDate);
    console.log(checkOutDate);

    let dateDifference = checkOutDate.getTime() - checkInDate.getTime();
    let numberOfDays = dateDifference/msDay;
    console.log(numberOfDays);

    let numberOfPeople = $("#guestsNumber").val();
    console.log(numberOfPeople);

    let accommodationLocation = $("#searchBar").val();

   
    
    

    // $("#searchForm").empty().append(
    //     `
    //     <div id="searchSummary" class="search-summary">
    //         <div class="search-summary__details-container">
    //             <input class="search-summary__details" type="text" placeholder=${accommodationLocation}>
    //             <i class="far fa-question-circle"></i>
    //             <div class="search-summary__check-in-summary">${checkInDate}</div>
    //             <div class="search-summary__check-out-summary">${checkOutDate}</div>
    //             <button id="displayFilters" class="search-summary__filters">
    //                 <i class="fas fa-filter"></i>
    //             </button>
    //         </div>
    //     </div>
    //     `
    // )

    // $(".header__search").css("display", "none");
    // $(".further-filters").css("display", "block");

    // if (accommodationLocation === ""){
    //     alert("please enter a location")
    // } else if (numberOfDays < 0){
    //     alert("your check in and check out dates can not be the same day! please adjust your dates")
    // } else if (numberOfDays > 15) {
    //     alert("sorry! your stay cannot be more than 15 nights. please adjust your dates")
    // } else if ((accommodationLocation === "") && (checkInDate === "") && (checkOutDate === "")){
    //     alert("looks like we need more info. please make sure you fill in all fields!")
    // } else { 
    // }


    displayInitialOptions(numberOfDays, numberOfPeople, accommodationLocation);
}


// -------------------------------------------------------------------------------------------------------------------------------------------


// display initial results


let results = [];

function displayInitialOptions(nights, guests, city){

    reloadMarkers();

    console.log(nights);
    console.log(guests);

    $(".home-container").css("display", "none");
    $(".content").css("display", "block");

    $("#cardContainerSearchResults").empty();
    $("#cardContainerTopStay").empty();

    for (let i=0; i < accommodation.length; i++){

        let totalNightsCost = nights * accommodation[i].costPerNight;

        if ((city === accommodation[i].location || city === accommodation[i].reigon) && (nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest)){
            generateResultCard(i, totalNightsCost);
            console.log(totalNightsCost);

            let accommodationResult = accommodation[i];
            results.push(accommodationResult);


            let location = {lat: accommodation[i].latitude, lng: accommodation[i].longitude};
            // console.log(location);
            console.log(location);
            locations.push(location);
            
            let marker = new google.maps.Marker({
                position: location,
                map:map,
            });

            console.log(marker);
            markers.push(marker);
        } 
        
        if ((city === accommodation[i].location || city === accommodation[i].reigon) && (nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest) && (accommodation[i].rating >= 4)){
            generateTopCard(i);
        } 

    }




    // if (nights === 0){
    //     alert("sorry! your check in and check out date can't be the same day. please enter two different dates.")
    // }

    // if ( === ""){
    //     alert("please enter a location")
    // }

    // if (city === ""){
    //     alert("please enter a location")
    // }

    console.log(results);

    accommodationDetails();
   
}


// -------------------------------------------------------------------------------------------------------------------------------------------


// // further filters

// function furtherFilterOptions(event){
   
    
//     event.preventDefault();
//     console.log("clicked");

//     $("#cardContainerSearchResults").empty();

//     let selectedAmmenities = [];
//     console.log(selectedAmmenities)

//     $('input[name="ammenity"]:checked').each(function(){

//         selectedAmmenities.push(this.value);
      
//     });

//     // checkFilters(selectedAmmenities, results);
    
// }

// function checkFilters(y, z){
    
    // let matchingAccom = [];

    // matchingAccom.forEach((c) => {
    //     if (!matchingAccomUnique.includes(c)) {
    //         matchingAccomUnique.push(c);
    //     }
    // });
    
    // let zLength = z.length;
    // let yLength = y.length
    
    //     if (zLength<=yLength){
    //         for(let i = 0; i < z.length; i++){
    //             if(!(y.indexOf(z[i])>=0)){
    //                 console.log(z[i].name)
    //             } else {
           
    //             console.log(z[i].id)
    //         }
    //     } 
    // }

    // for (let x=0; x < z.length; x++){
    //     let arr1 = z[x].ammenities;
    //     let arr2 = y[x];

    //     for (let i=0; i<arr1.length; i++){
    //         if($.inArray(arr1[i], arr2) > 0){
    //             console.log("yes")
    //         } else {
    //             console.log(z[i].name)
    //         }
    //     }
    // }
// }

    


    
        


    //     for (let h = 0; h < results.length; h++){
    //         for (let j=0; j < z.length; j++){
    //             if (results[i].ammenities[h] === z[j]){
    //                 matchingAccom.push(results[i].name);
    //             }
    //         }
    //     }

   // output: true
    
    


// -------------------------------------------------------------------------------------------------------------------------------------------


// further filter options

// function displayFurtherFilterOptions(){

//     reloadMarkers();

//     $("#cardContainerSearchResults").empty();
//     $("#cardContainerTopStay").empty();

//     console.log("success")

// }


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

function accommodationDetails(){

    // let totalCost;
    // let totalNights;
    // let firstNight;
    // let lastNight;

    $(".card-link").on("click", function(){

        $("#body").empty().append(
            `
            <section class="body">
            <div class="accommodation-details" id="accommodationDetails">
            </section>
            `
        );

        for (let i=0; i < accommodation.length; i++){
            if (parseInt(this.id) === accommodation[i].id){
                console.log(accommodation[i].name);

                accommodationDetailsAppend(i);
            }
        } 
    });
    
}


// -------------------------------------------------------------------------------------------------------------------------------------------


// select meals

function selectMeals(price1, price2, price3, option1, option2, option3){
    
    let mealOrder = [];

    let breakfastInfo1 = [option1, price1];
    let breakfastInfo2 = [option2, price2];
    let breakfastInfo3 = [option3, price3];

    
    $("#breakfastImage1").on("click", function(){
            console.log(breakfastInfo1);       
            mealOrder.push(breakfastInfo1);
            // mealOrder.push(price1)     
    });
    
    $("#breakfastImage2").on("click", function(){
        

        console.log(breakfastInfo2);  
        mealOrder.push(breakfastInfo2);
    });
        
    $("#breakfastImage3").on("click", function(){
        
        console.log(breakfastInfo3); 
        mealOrder.push(breakfastInfo3);
      
    });
    
    console.log(mealOrder)
}




// -------------------------------------------------------------------------------------------------------------------------------------------

// total bill calculation

// function yourBillTotal(){
//     // (cost per day * nights) + meal cost

//     for(let i=0; i<accommodation.length; i++){
//         let nightsCost =  nights * accommodation[i].costPerNight;
//         let mealCostOne = meal *  accommodation[i].breakfastPrice1;
//         let mealCostTwo = meal *  accommodation[i].breakfastPrice2;
//         let mealCostThree = meal *  accommodation[i].breakfastPrice2;



//     }


// }





// booking details modal


// -------------------------------------------------------------------------------------------------------------------------------------------


// confirmation screen


// ----------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------------------------


// thank you screen


// -------------------------------------------------------------------------------------------------------------------------------------------


function accommodationDetailsAppend(x, y, z, p, h){

    $("#accommodationDetails").empty().append(
        `
    <div class="accommodation-details__img-container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${accommodation[x].mainImage}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${accommodation[x].img1}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${accommodation[x].img2}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${accommodation[x].img3}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${accommodation[x].img4}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
              <img src="${accommodation[x].img1}" class="d-block w-100" alt="...">
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
            <h1 class="accommodation-name"><b>${accommodation[x].name}</b></h1>
            <i class="fa-solid fa-heart"></i>
        </div>              
        <h3 class="accommodation-location">${accommodation[x].locationName}, ${accommodation[x].reigonName}, NZ</h3>
        <div class="accommodation-reviews">
            <p class="rating-text"><i class="fas fa-star"></i>${accommodation[x].rating}</p> <p class="review-number"><i>(${accommodation[x].reviewsNo} reviews)</i></p>
        </div>
        <div class="accommodation-description">
            <p class="description">${accommodation[x].descriptionShort}</p>
        </div>
    </div>

    <div class="accommodation-ammenities">
        <h2 class="ammenities-heading"><b>AMMENITIES</b></h2>
        <div class="ammenities-details"></div>
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
            </div
        </div>
    </div>

        <div class="accommodation-dates">

        <h2 class="dates-heading"><b>YOUR DATES</b></h2>
        <div class="dates-container">
            <div class="accommodation-dates__check-in">
                <p class="check-in-date">November 22nd 2021</p>
                <p class="check-in-time">After 2pm</p>
            </div>
            <div class="accommodation-dates__check-out">
                <p class="check-out-date">November 23rd 2021</p>
                <p class="check-out-time">Before 11am</p>
            </div>
        </div>
    </div>

        <div class="accommodation-cancellation-policy">
            <h2 class="cancellation-heading"><b>CANCELLATION POLICY</b></h2>
            <p class="cancellation-text">${accommodation[x].cancellation}</p>
        </div>


        <div class="accommodation-details__footer">
            <div class="cost-summary">
                <h4>${y}</h4>
                <div class="cost-breakdown">
                    <p>${z}</p>
                    <i class="fa-solid fa-circle"></i>
                    <p>${p} - ${h}</p>
                </div>
            </div>
            <button type="button" class="btn book-now btn-primary" id="${accommodation[x].id}" data-toggle="modal" data-target="#detailsModal">
                Book Now
            </button>
        </div>
    </div>
    `
    );

    generateMealCard(x);
    generateReviewCard(x);
 
    
}



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


function generateMealCard(y){

    let priceOne = accommodation[y].breakfastPrice1;
    let priceTwo = accommodation[y].breakfastPrice2;
    let priceThree = accommodation[y].breakfastPrice3;

    let mealNameOne = accommodation[y].breakfastOption1;
    let mealNameTwo = accommodation[y].breakfastOption2;
    let mealNameThree = accommodation[y].breakfastOption3;

    $("#breakfastOptions").append(
        `

        
        <div class="card meal-one">
            <input type="image" class="card-img-top" id="breakfastImage1" value="meal-one" src="${accommodation[y].breakfastImg1}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title" id="breakfastName1">${accommodation[y].breakfastOption1}</h5>
            </div>
                <p class="price-text" id="breakfastPrice1">$${accommodation[y].breakfastPrice1}</p>
                <p class="card-text">${accommodation[y].breakfastDescription1}</p>
                <p class="card-text">${accommodation[y].breakfastRequirement1}</p>
            </div>
        </div>

        <div class="card meal-one">
            <input type="image" class="card-img-top" id="breakfastImage2" value="meal-two" src="${accommodation[y].breakfastImg2}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title" id="breakfastName2">${accommodation[y].breakfastOption2}</h5>
            </div>
                <p class="price-text"  id="breakfastPrice2">$${accommodation[y].breakfastPrice2}</p>
                <p class="card-text">${accommodation[y].breakfastDescription2}</p>
                <p class="card-text">${accommodation[y].breakfastRequirement2}</p>
            </div>
        </div>

       <div class="card meal-one">
            <input type="image" class="card-img-top" id="breakfastImage3" value="meal-three" src="${accommodation[y].breakfastImg3}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title" id="breakfastName3">${accommodation[y].breakfastOption3}</h5>
            </div>
                <p class="price-text" id="breakfastPrice3">$${accommodation[y].breakfastPrice3}</p>
                <p class="card-text">${accommodation[y].breakfastDescription3}</p>
                <p class="card-text">${accommodation[y].breakfastRequirement3}</p>
            </div>
        </div>
        `
    );

    selectMeals(priceOne, priceTwo, priceThree, mealNameOne, mealNameTwo, mealNameThree);
}


// -------------------------------------------------------------------------------------------------------------------------------------------





// event listeners

initialSearch.addEventListener("click", initialFilterOptions);
// applyFilters.addEventListener("click", furtherFilterOptions);
// displayFilters.addEventListener("click", furtherFilters);
// filteredSearch.addEventListener("click", displayFilteredOptions);