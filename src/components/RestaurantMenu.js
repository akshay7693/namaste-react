import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { MENU_IMG_URL, RES_DETAIL_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log("resmenu start");
  const resInfo = useRestaurantMenu(resId);

  console.log("resmenu after useRestaurant Hook");

  if (resInfo === null) {
    console.log("resmenu shimmer");
    return (
      <div className="res-detail">
        <Shimmer />
      </div>
    );
  }

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    feeDetails: { amount },
    sla: { slaString, lastMileTravelString },
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { itemCards: item } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log("resmenu menu");

  return (
    <div className="res-detail">
      <p className="res-detail-name">{name}</p>
      <div className="res-detail-container">
        <div className="res-detail-rating-price">
          <p className="res-detail-rating">
            {" "}
            {avgRating + " (" + totalRatingsString + ")"}
          </p>
          <p>•</p>
          <p className="res-detail-price">{costForTwoMessage}</p>
        </div>
        <p className="res-detail-cuisine">{cuisines.join(" , ")}</p>
        <div className="res-detail-outlet">
          <h4>Outlet</h4>
          <p>{areaName}</p>
        </div>
        <div className="res-detail-outlet">
          <h4>{slaString}</h4>
        </div>
        <hr />
        <div className="res-detail-outlet">
          <p>{lastMileTravelString}</p>
          <p>|</p>
          <p>{"₹" + (amount / 100).toFixed(2) + " Delivery fee will apply"}</p>
        </div>
      </div>
      <div className="res-detail-menu">
        <h4>Recommended meals</h4>
        <div className="res-detail-menu-list">
          {(itemCards || item).map((item) => {
            const { id, name, imageId, description, defaultPrice } =
              item?.card?.info;
            return (
              <div key={id} className="res-detail-menu-card">
                <div className="res-detail-menu-details">
                  <h4>{name}</h4>
                  <h5>₹{(defaultPrice / 100).toFixed(2)}</h5>
                  <p>{description}</p>
                </div>
                <div className="res-detail-menu-img">
                  <img src={MENU_IMG_URL + imageId} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
