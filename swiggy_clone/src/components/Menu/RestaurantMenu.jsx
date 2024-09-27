import { useEffect, useState } from "react";
import Shimmer from "../ShimmerUI/Shimmer";
import { useParams } from "react-router-dom";

import styles from "./RestaurantMenu.module.css"
import rating from "../../utils/images/rating.png"
import useRestautantMenu from "../../utils/useRestaurantMenu";
import RestaurantItems from "./RestaurantItems";
const RestaurantMenu = () => {

const {resId} = useParams();
const menu = useRestautantMenu(resId);


if(menu === null) return <Shimmer/>

const {name, totalRatingsString , cuisines , areaName, costForTwoMessage,sla} = menu?.cards[2]?.card?.card?.info;

const {itemCards,title} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (res)=>res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" 
    || res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 


    return(
        <div className={styles.position}>
            <div>
                <div className={styles.namePos}>
                    <h1>{name}</h1>
                </div> 
                <div className={styles.boxPosition}>
                    <div className={styles.boxParam}>
                    <div className={styles.boxContent}>
                        <div className={styles.rate}>
                            <img alt="rating" src={rating} className={styles.ratingLogo}/>
                            <h3>{totalRatingsString}</h3>
                        </div>
                        <div>
                            <h3>• {costForTwoMessage}</h3>
                        </div>
                    </div>
                    <div className={styles.cuisines}>
                        <span>{cuisines.join(", ")}</span>
                    </div>
                    <div className={styles.area}>
                        <h4>Outlet - {areaName}</h4>
                        <h4>Delivery Time - {sla.slaString}</h4>
                    </div>
               
                </div>
                </div>
            </div>
            <div className={styles.menuCard}>
                <h1>Menu</h1>
            </div>
               
            <div className={styles.menuContainer}>
            {categories.map((category)=><RestaurantItems key={category?.card?.info?.id} data={category?.card?.card}/>)}
            
            </div>
        </div>
       
        
    )
}

export default RestaurantMenu;