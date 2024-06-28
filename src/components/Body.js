import { useState } from "react";
import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_LIST);
  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="filter">
        <p>Filter : </p>
        <button
          className={
            btnClicked ? "filter-btn filter-btn-selected" : "filter-btn"
          }
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );

            setBtnClicked(!btnClicked);

            btnClicked
              ? setListOfRestaurants(RESTAURANT_LIST)
              : setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
