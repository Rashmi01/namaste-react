import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



//Normal JS variables
/*let listOfRestaurantJS = [
    {
        "id": "25621",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Intermediate Ring Road",
        "areaName": "Ejipura",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        "avgRating": 3.1,
        "feeDetails": {
        "restaurantId": "25620",
        "totalFee": 3600
        },
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "0.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        
        "badges": {},
        "isOpen": true,
        "type": "F",
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    {
        "id": "25620",
        "name": "KFC4*rating",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Intermediate Ring Road",
        "areaName": "Ejipura",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "25620",
        "totalFee": 3600
        },
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "0.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        
        "badges": {},
        "isOpen": true,
        "type": "F",
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    }
]*/
const Body = () =>{
    //State variable 
const [listOfRestaurant, setListOfRestaurant] = useState(resList);
const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState(resList);

const [searchText, setSearchText] = useState("");
useEffect(()=>{
    console.log("useEfect fetch Data Called"); fetchData();
}, []);

const fetchData = async() => {
        //way to access swiggy api datas.
    //fetch will return promise.
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json data" ,json);
    //setListOfRestaurant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.info)
} 


/*//conditional rendering
if (listOfRestaurant.length === 0){
    return <Shimmer/>
}*/
console.log("Body rendered");

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search"> 
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        console.log(setSearchText);
                    }}></input>
                    <button onClick={()=>{
                        //Filter the restaurant card and updated the UI
                        //searchText
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter(
                            (res)=>res.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurant(filteredRestaurant);
                    }}> Search </button>
                </div>
                <button className="filter-btn" onClick={()=>{
                        //filter logic
                        const filteredListOfRestaurant = listOfRestaurant.filter(
                            (res) => res.avgRating > 4.3
                        ); 
                        setListOfRestaurant(filteredListOfRestaurant);
                        console.log(filteredListOfRestaurant);
                    }}
                    >
                        Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredListOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;