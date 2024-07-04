import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantsList();
  }, []);

  const fetchRestaurantsList = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants;
};

export default useRestaurantsList;
