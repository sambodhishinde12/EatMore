import React from "react";
import BodyLogic from "./BodyLogic";
import RestroCard, { deal } from "../Card/RestroCard";
import Shimmer from "../ShimmerUI/Shimmer";
import styles from "./Body.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  const {
    filteredRestaurants,
    searchText,
    setSearchText,
    filterTopRatedRestaurants,
  } = BodyLogic();
  const RestaurantDeal = deal(RestroCard);
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(
      <div className={styles.statusContainer}>
        <h1>No Internet Connection</h1>
        <button  onClick={()=>{
          if(onlineStatus === true){
            window.location.reload();
          }
          else{
            <useOnlineStatus/>
          }
        }} className={styles.statusbtn}>Try Again!</button>
      </div>
    )
  }
  return (
    <div className="body">
      <div className={styles.searchcontainer}>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className={styles.search}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="filter">
          <button className={styles.filterbtn} onClick={filterTopRatedRestaurants}>
            Top Rated
          </button>
        </div>
      </div>
      {filteredRestaurants.length === 0 ? (
        searchText !== "" ? ( // If there are no matches and searchText is not empty
          <p>No matches found.</p>
        ) : (
          <Shimmer /> // Show shimmer while data is being fetched
        )
      ) : (
        <div className={styles.cardcontainer}>
          {filteredRestaurants.map((res) => (
            <Link key={res.info.id} to={"/restaurant/"+res.info.id}>
              
              <RestaurantDeal  resData={res} /></Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;