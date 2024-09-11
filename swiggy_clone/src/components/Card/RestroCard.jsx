import { CDN_URL } from "../../utils/constants";
import styles from "./RestroCard.module.css"
import rating from "../../utils/images/rating.png"
const RestroCard =({resData})=>{    
    const {
       name,
       cuisines,
       avgRating
      
    }=resData?.info;
    return(
       <div className={styles.card}>
         <div>
          <img className={styles.reslogo} alt="ResLogo" src={CDN_URL+resData.info.cloudinaryImageId}></img>
          </div>
          <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.ratingLogo}>
            <div><img alt="rating" src={rating} className={styles.logoParams}/></div>
            <div className={styles.ratingAndTime}>
               <div>{avgRating} </div> 
               <div>• {resData?.info.sla.deliveryTime} minutes </div>    
            </div>
            </div>
          <div className={styles.cuisines}>{cuisines.join(", ")}</div>
          </div>
       </div>
    )
 }

 export default RestroCard;