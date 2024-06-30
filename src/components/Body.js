import { useEffect, useState } from "react";
import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      {listOfRestaurants.length ? (
        <>
          <div className="search">
            <input
              type="text"
              placeholder="Search restaurant here... "
              className="search-input"
              value={searchText}
              onChange={({ target: { value } }) => {
                setSearchText(value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const result = listOfRestaurants.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );

                setFilteredRestaurants(result);
              }}
            >
              Search
            </button>
          </div>
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
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
          </div>
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
