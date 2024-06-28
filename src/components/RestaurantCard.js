import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} alt="" />
      <div className="res-card-details">
        <h3 className="res-card-name">{name}</h3>
        <div className="res-card-rating">
          <p>{avgRating} stars </p>
          <p> - {deliveryTime} mins</p>
        </div>
        <p className="res-card-cuisines">{cuisines.slice(0, 3).join(", ")}</p>
        <p className="res-card-price">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
