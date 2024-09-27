import { MENU_IMG } from "../../utils/constants";
import styles from "./RestaurantMenu.module.css";

const Items = ({ data }) => {
  const handleAddItem = ()=>{
    console.log("Clicked")
  }
  return (
    <div>
      <div className={styles.menuContainer}>
        {/* Check if the data contains nested categories */}
        {data?.categories ? (
          // Case for NestedItemCategory
          data.categories.map((category) => (
            <div key={category.title}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <ul>
                {category.itemCards.map((item) => (
                  <li key={item?.card?.info?.id}>
                    <div className={styles.displayList}>
                      <div className={styles.details}>
                        <div className={styles.itemName}>
                          {item?.card?.info?.name}
                        </div>
                        <div className={styles.itemPrice}>
                          Rs.
                          {(
                            item?.card?.info?.finalPrice ||
                            item?.card?.info?.price ||
                            item?.card?.info?.defaultPrice
                          ) / 100}
                        </div>
                        <div className={styles.itemDes}>
                          {item?.card?.info?.description}
                        </div>
                      </div>
                      <div>
                        {item?.card?.info?.imageId && (
                          <img
                            src={MENU_IMG + item?.card?.info?.imageId}
                            alt="menuImage"
                            className={styles.menuImage}
                          />
                        )}
                        <button className={styles.addBtn} onClick={handleAddItem}>ADD +</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          // Case for ItemCategory (no nested categories)
          <div>
            <ul>
              {data?.itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>
                  <div className={styles.displayList}>
                    <div className={styles.details}>
                      <div className={styles.itemName}>
                        {item?.card?.info?.name}
                      </div>
                      <div className={styles.itemPrice}>
                        Rs.
                        {(
                          item?.card?.info?.finalPrice ||
                          item?.card?.info?.price ||
                          item?.card?.info?.defaultPrice
                        ) / 100}
                      </div>
                      <div className={styles.itemDes}>
                        {item?.card?.info?.description}
                      </div>
                    </div>
                    <div>
                      {item?.card?.info?.imageId && (
                        <img
                          src={MENU_IMG + item?.card?.info?.imageId}
                          alt="menuImage"
                          className={styles.menuImage}
                        />
                      )}
                       
                       <button className={styles.addBtn} onClick={handleAddItem}>ADD +</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
