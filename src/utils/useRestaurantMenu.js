import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  console.log("useRestaurant Hook start");
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("useRestaurant Hook useEffect");
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    console.log("useRestaurant Hook fetchData");
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();

    setResInfo(json?.data);
  };

  console.log("useRestaurant Hook end");
  return resInfo;
};

export default useRestaurantMenu;
