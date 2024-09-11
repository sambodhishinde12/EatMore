import { useEffect, useState } from "react";
import Shimmer from "../ShimmerUI/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_IMG } from "../../utils/constants";
import styles from "./RestaurantMenu.module.css"
import rating from "../../utils/images/rating.png"
import useRestautantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {

const {resId} = useParams();
const menu = useRestautantMenu(resId);


if(menu === null) return <Shimmer/>

const {name, totalRatingsString , cuisines , areaName, costForTwoMessage,sla} = menu?.cards[2]?.card?.card?.info;

const {itemCards,title} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(itemCards);


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
                <h2 className={styles.recommended}>{title}</h2>
                <div className={styles.menuContainer}>
                <ul>
                    {itemCards.map((item)=>(
                        <li key={item?.card?.info?.id}> 
                        <div className={styles.displayList}>
                            <div className={styles.detials}>
                               <div className={styles.itemName}> {item?.card?.info?.name}  </div>
                               <div className={styles.itemPrice}> Rs.{(item?.card?.info?.finalPrice || item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}  </div>
                               <div className={styles.itemDes}> {item?.card?.info?.description} </div>
                            </div>
                            <div>
                                <img src={MENU_IMG + item?.card.info?.imageId} alt="menuImage" className={styles.menuImage}></img>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
       
        
    )
}

export default RestaurantMenu;