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
        <h4 className="res-card-cuisines">{cuisines.slice(0, 2).join(", ")}</h4>
        <div className="res-card-rating">
          <p>{avgRating} stars </p>
          <p> - {deliveryTime} mins</p>
        </div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
