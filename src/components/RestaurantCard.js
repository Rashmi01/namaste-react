import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = (props) => {
    const {resData } = props;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src ={
                CDN_URL
                +resData.cloudinaryImageId
            } />
            <h3>{resData.name}</h3>
            <h5>{resData.cuisines.join(", ")}</h5>
            <h5>{resData.avgRatingString} stars</h5>
            <h5>{resData.sla.deliveryTime} min</h5>
            <h5>Rs{resData.feeDetails.totalFee} for two</h5>
        </div>
    )
}

export default RestaurantCard;