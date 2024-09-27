import styles from "./RestaurantMenu.module.css";
import downArrow from "../../utils/images/down-arrow.png";
import Items from "./Items";
import { useState } from "react";

const RestaurantItems = ({ data }) => {
  const itemCount = data?.itemCards?.length || data?.categories?.reduce((count, category) => count + category.itemCards?.length, 0);
  const [showMenu,setShowMenu] = useState(false);
  const handleClick = () =>{
    setShowMenu(!showMenu)
  }
  
  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.positionMenu}  onClick={handleClick}>
          <span>
            {data?.title} ({itemCount})
          </span>
          <span className={styles.arrow}>
            <img src={downArrow} alt="downarrow" />
          </span>
        </div>
        {/* Pass the full data object instead of ambiguous arrays */}
       {showMenu && <Items data={data} />}
      </div>
    </div>
  );
};

export default RestaurantItems;
