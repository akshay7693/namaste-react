import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantsList from "../utils/useRestaurantsList.js";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const listOfRestaurants = useRestaurantsList();

  const [filteredRes, setFilteredRes] = useState(listOfRestaurants);
  const [btnClicked, setBtnClicked] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      {onlineStatus ? (
        <>
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

                    setFilteredRes(result);
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
                      ? setFilteredRes(listOfRestaurants)
                      : setFilteredRes(filteredList);
                  }}
                >
                  Top Rated Restaurants
                </button>
              </div>
              <div className="res-container">
                {(filteredRes.length ? filteredRes : listOfRestaurants).map(
                  (restaurant) => (
                    <Link
                      key={restaurant.info.id}
                      to={"/restaurants/" + restaurant.info.id}
                    >
                      <RestaurantCard resData={restaurant} />
                    </Link>
                  )
                )}
              </div>
            </>
          ) : (
            <Shimmer />
          )}
        </>
      ) : (
        <div>
          <h4>Looks like your internet connection lost</h4>
          <p>{"Please check your network connection and try again :)"}</p>
        </div>
      )}
    </div>
  );
};

export default Body;
