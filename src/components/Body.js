import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



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
    return (
        <div className="body">
            <div className="filter">
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
                    listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
               


            </div>
        </div>
    )
}

export default Body;