console.log("howdy");

// map key
let script = "<script src='https://maps.googleapis.com/maps/api/js?key=" + key + "&libraries=places&callback=initMap' async defer >";


// -------------------------------------------------------------------------------------------------------------------------------------------


//query selectors

const initialSearch = document.querySelector("#initialSearch");
// const displayFilters = document.querySelector("#displayFilters");
// const filteredSearch = document.querySelector("#filteredSearch")

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
        location: "Whitianga",
        reigon: "Coromandel",

        mainImage: "/img/hotels/carlton-main-img.png",
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
        ammenities: ["Free Wifi", "Gym Facilities", "Late Check Out", "Free Parking"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.83898421622976, 
        longitude: 175.69179517137826,

    },

    {
        id: 102,
        name: "Morland Hotel",
        type: "Hotel", 
        location: "Opito Bay",
        reigon: "Coromandel",

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
        ammenities: ["Free Wifi", "Late Check Out"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.71498397906826,
        longitude: 175.7945025259624,
               
    },

    {
        id: 103,
        name: "The Peninsula Hotel",
        type: "Hotel", 
        location: "Matarangi",
        reigon: "Coromandel",

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
        location: "Hahei",
        reigon: "Coromandel",

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

        breakfastImg1: "./img/food/spanish-eggs.png",
        breakfastOption1: "Spanish Eggs",
        breakfastDescription1: "Eggs poached in a tomato sauce. Servec with sourdough toast",
        breakfastRequirement1: ["V", "GF*"],
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
        location: "Whitianga",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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
        location: "Whitianga",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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
        ammenities: ["Pool", "Free Cancelation","Free Parking"],
        cancellation: "get a 50% refund, minus the first night and service fee",

        latitude: -36.82515425566253, 
        longitude: 175.70227305787188,
       
    },

    {

        id: 107,
        name: "Cook's Beach Motel",
        type: "Motel", 
        location: "Cook's Beach",
        reigon: "Coromandel",

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
        location: "Whitianga,",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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
        location: "Opito Bay",
        reigon: "Coromandel",

        mainImage: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",

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
        location: "Hahei",
        reigon: "Coromandel",

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
        location: "Matarangi",
        reigon: "Coromandel",

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
let markers = [];

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, 
        center: {lat:-36.7667, lng:175.5000},
    });
}


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

    $("#searchForm").empty().append(
        `
        <div id="searchSummary" class="search-summary">
            <div class="search-summary__details-container">
                <input class="search-summary__details" type="text" placeholder=${accommodationLocation}>
                <i class="far fa-question-circle"></i>
                <div class="search-summary__check-in-summary">${checkInDate}</div>
                <div class="search-summary__check-out-summary">${checkOutDate}</div>
                <button id="displayFilters" class="search-summary__filters">
                    <i class="fas fa-filter"></i>
                </button>
            </div>
        </div>

        <div id="furtherFilterOptions" class="further-filter-options">
        

        </div>

        `
    )

    $("#content").empty().append(

        `
        <div class="" id="cardContainerTopStay"></div>
        <div class="" id="cardContainerSearchResults"></div>
        
        `

    )


    displayInitialOptions(numberOfDays, numberOfPeople, accommodationLocation);
}


// -------------------------------------------------------------------------------------------------------------------------------------------


// display initial results

function displayInitialOptions(nights, guests, city){

    // reloadMarkers();

    console.log(nights);
    console.log(guests);

    $("#cardContainerSearchResults").empty();
    $("#cardContainerTopStay").empty();

    for (let i=0; i < accommodation.length; i++){
        if ((city === accommodation[i].location || city === accommodation[i].reigon) && (nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest)){
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
        
        if ((city === accommodation[i].location || city === accommodation[i].reigon) && (nights >= accommodation[i].minNight && nights <= accommodation[i].maxNight) && (guests >= accommodation[i].minGuest && guests <= accommodation[i].maxGuest) && (accommodation[i].rating >= 4)){
            generateTopCard(i);
        } 
    }

    accommodationDetails();
}


// -------------------------------------------------------------------------------------------------------------------------------------------


// further filters

function furtherFilters(event){
   
    event.preventDefault();
    console.log("clicked");

  

}


// -------------------------------------------------------------------------------------------------------------------------------------------


// further filter options

function displayFilteredOptions(){

    // reloadMarkers();

    $("#cardContainerSearchResults").empty();
    $("#cardContainerTopStay").empty();

}


// -------------------------------------------------------------------------------------------------------------------------------------------


// refresh markers

function reloadMarkers() {

    for (let i=0; i < markers.length; i++){
        markers[i].setMap(null);
    };

    markers = [];

}


// -------------------------------------------------------------------------------------------------------------------------------------------


// accommodation details

function accommodationDetails(){
    $(".card-link").on("click", function(){

        $("#body").empty().append(
            `
            <section class="body">
            <div class="accommodation-details" id="accommodationDetails">
            </section>
            `
        )

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


// -------------------------------------------------------------------------------------------------------------------------------------------


// booking details modal


// -------------------------------------------------------------------------------------------------------------------------------------------


// confirmation screen


// -------------------------------------------------------------------------------------------------------------------------------------------


// payment details


// -------------------------------------------------------------------------------------------------------------------------------------------


// thank you screen


// -------------------------------------------------------------------------------------------------------------------------------------------


function accommodationDetailsAppend(x){

    $("#accommodationDetails").empty().append(
        `
        <div class="accommodation-details__img-container">


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src=${accommodation[x].mainImage} class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${accommodation[x].img1} class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${accommodation[x].img2} class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${accommodation[x].img3} class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src=${accommodation[x].img4} class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                  <img src=${accommodation[x].img5} class="d-block w-100" alt="...">
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
            <h3 class="accommodation-location">${accommodation[x].location}, ${accommodation[x].reigon}, NZ</h3>
            <div class="accommodation-reviews">
                <p class="rating-text"><i class="fas fa-star"></i>${accommodation[x].rating}</p> <p class="review-number"><i>${accommodation[x].reviewsNo} reviews</i></p>
            </div>
            <div class="accommodation-description">
                <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt commodi inventore eligendi, laudantium tempora similique error! Asperiores quas aut ipsa!</p>
                <a class="description-link" id="${accommodation[x].id}">More Info <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="accommodation-ammenities">
            <h2 class="ammenities-heading"><b>AMMENITIES</b></h2>
            <div class="ammenities-details"></div>
            <a class="ammenities-link" id="${accommodation[x].id}"><u>Full list</u>  <i class="fas fa-angle-right"></i></a>
        </div>

        <div class="accommodation-reviews-details">
            <h2 class="reviews-heading"><b>REVIEWS</b></h2>
            <div class="reviews-cards" id="reviewsCards"></div>
            <a class="reviews-link" id="${accommodation[x].id}"><u>All reviews</u>  <i class="fas fa-angle-right"></i></a>
        </div>

        <div class="accommodation-map"></div>
        
        <div class="accommodation-breakfast">
            <h2 class="breakfast-heading"><b>BREAKFAST OPTIONS</b></h2>
            <div class="breakfast-options" id="breakfastOptions"></div>
        </div>

        <div class="accommodation-dates">

            <h2 class="dates-heading"><b>YOUR DATES</b></h2>
            <div class="dates-container">
                <div class="accommodation-dates__check-in">

                </div>
                <div class="accommodation-dates__check-out">

                </div>
            </div>
            <a class="accommodation-dates-link" id="${accommodation[x].id}"><u>Edit dates</u>  <i class="fas fa-angle-right"></i></a>
        </div>

        <div class="accommodation-cancellation-policy">
            <h2 class="cancellation-heading"><b>CANCELLATION POLICY</b></h2>
            <p>Cancel before ??? and ${accommodation[x].cancellation}</p>
        </div>


            <div class="accommodation-details__footer">
                <div class="cost-summary">
                    <h4>append cost</h4>
                    <div class="cost-breakdown">
                        <p>append night</p>
                        <i class="fa-solid fa-circle"></i>
                        <p>append dates</p>
                    </div>
                </div>
                <button class="book-now">Book Now</button>
            </div>
      
        </div>          
    </div>
    `
    )

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
                <h5 class="card-title">${accommodation[x].name}</h5>
                <h6 class="card-location"><i>${accommodation[x].location}, ${accommodation[x].reigon}, NZ</i></h5>
                <p class="card-text">${accommodation[x].descriptionShort}</p>
                <a class="card-link" id="${accommodation[x].id}" ><u>More Info</u>  <i class="fas fa-angle-right"></i></a>
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
                <h6 class="card-location">${accommodation[x].location}, ${accommodation[x].reigon}, NZ</h5>
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


function generateReviewCard(y){
    $("#reviewsCards").append(
        `
        <div class="card review-one">
            <img class="card-img-top" src="${accommodation[y].reviewImg1}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].reviewName1}</h5>
            </div>
                <p class="price-text">$${accommodation[y].reviewRating1}</p>
                <p class="card-text">${accommodation[y].reviewContent1}</p>
            </div>
        </div>

        <div class="card review-two">
            <img class="card-img-top" src="${accommodation[y].reviewImg2}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].reviewName2}</h5>
            </div>
                <p class="price-text">$${accommodation[y].reviewRating2}</p>
                <p class="card-text">${accommodation[y].reviewContent2}</p>
            </div>
        </div>

        <div class="card review-three">
            <img class="card-img-top" src="${accommodation[y].reviewImg3}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].reviewName3}</h5>
            </div>
                <p class="price-text">$${accommodation[y].reviewRating3}</p>
                <p class="card-text">${accommodation[y].reviewContent3}</p>
            </div>
        </div>

        <div class="card review-one">
            <img class="card-img-top" src="${accommodation[y].reviewImg4}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].reviewName4}</h5>
            </div>
                <p class="price-text">$${accommodation[y].reviewRating4}</p>
                <p class="card-text">${accommodation[y].reviewContent4}</p>
            </div>
        </div>
        `
    )
}


function generateMealCard(y){
    $("#breakfastOptions").append(
        `
        <div class="card meal-one">
            <img class="card-img-top" src="${accommodation[y].breakfastImg1}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].breakfastOption1}</h5>
            </div>
                <p class="price-text">$${accommodation[y].breakfastPrice1}</p>
                <p class="card-text">${accommodation[y].breakfastDescription1}</p>
                <p class="card-text">${accommodation[y].breakfastRequirement1}</p>
            </div>
        </div>

        <div class="card  meal-two">
            <img class="card-img-top" src="${accommodation[y].breakfastImg2}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].breakfastOption2}</h5>
            </div>
                <p class="price-text">$${accommodation[y].breakfastPrice2}</p>
                <p class="card-text">${accommodation[y].breakfastDescription2}</p>
                <p class="card-text">${accommodation[y].breakfastRequirement2}</p>
            </div>
        </div>

        <div class="card  meal-three">
            <img class="card-img-top" src="${accommodation[y].breakfastImg3}" alt="Card image cap">
            <div class="card-body">
            <div class="card-top-line">
                <h5 class="card-title">${accommodation[y].breakfastOption3}</h5>
            </div>
                <p class="price-text">$${accommodation[y].breakfastPrice3}</p>
                <p class="card-text">${accommodation[y].breakfastDescription3}</p>
                <p class="card-text">${accommodation[y].breakfastRequirement3}</p>
            </div>
        </div>
        `
    );

}


// -------------------------------------------------------------------------------------------------------------------------------------------


// event listeners

initialSearch.addEventListener("click", initialFilterOptions);
// displayFilters.addEventListener("click", furtherFilters);
// filteredSearch.addEventListener("click", displayFilteredOptions);