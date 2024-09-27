import { useEffect, useState } from "react";
import RestroCard, { deal } from "../Card/RestroCard";

const BodyLogic = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantDeal = deal(RestroCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.610623&lng=73.92686330000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      const filteredList = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filteredList);
    }
  }, [searchText, listOfRestaurants]);

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurants(filteredList);
  };

  return {
    filteredRestaurants,
    searchText,
    setSearchText,
    filterTopRatedRestaurants,
  };
};

export default BodyLogic;