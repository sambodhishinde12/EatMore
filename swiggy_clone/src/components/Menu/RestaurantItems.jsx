import styles from "./RestaurantMenu.module.css";
import downArrow from "../../utils/images/down-arrow.png";
import Items from "./Items";

const RestaurantItems = ({ data,showMenu,setShowMenu }) => {
  const itemCount = data?.itemCards?.length || data?.categories?.reduce((count, category) => count + category.itemCards?.length, 0);
 
  
  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.positionMenu}  onClick={setShowMenu}>
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
