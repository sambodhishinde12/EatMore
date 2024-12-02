import { useDispatch, useSelector } from "react-redux";
import styles from "./CartDrawer.module.css";
import { MENU_IMG } from "../../utils/constants";
import { clearCart, decreaseItem, increaseItem } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const CartDrawer = ({ onClose, isOpen }) => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const increaseQuantity = (itemId) => {
        dispatch(increaseItem(itemId));
    };

    const decreaseQuantity = (itemId) => {
        dispatch(decreaseItem(itemId));
    };

    const calculateItemPrice = (item) => {
        const totalItemPrice =
            ((item?.card?.info?.finalPrice ||
                item?.card?.info?.price ||
                item?.card?.info?.defaultPrice) /
                100) *
            item.quantity;
        return totalItemPrice;
    };
   
    return (
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
            <button className={styles.closeButton} onClick={onClose}>X</button>
            <h2 className={styles.header}>Cart</h2>

            {cartItems.length > 0 ? (
                <>
                    <div className={styles.cartListContainer}>
                        <ul className={styles.cartList}>
                            {cartItems.map((item) => (
                                <li key={item.card.info.id} className={styles.cartItem}>
                                    <div>
                                        <h3>{item.card.info.name}</h3>
                                        <p>Rs. {calculateItemPrice(item)}</p>
                                    </div>
                                    <div className={styles.quantity}>
                                        <button
                                            onClick={() => decreaseQuantity(item.card.info.id)}
                                            className={styles.incdecBtn}
                                        >
                                            -
                                        </button>
                                        {item.quantity}
                                        <button
                                            onClick={() => increaseQuantity(item.card.info.id)}
                                            className={styles.incdecBtn}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        {item?.card?.info?.imageId && (
                                            <img
                                                src={MENU_IMG + item.card.info.imageId}
                                                alt={item.card.info.name}
                                                className={styles.menuImage}
                                            />
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                            
                    <div className={styles.footer}>
                        <button className={styles.footerBtn} onClick={handleClearCart}>Clear Cart</button>
                    <Link to="/cart"> <button className={styles.footerBtn} onClick={onClose}>Proceed</button> </Link>
                    </div>
                </>
            ) : (
                <p className={styles.emptyMessage}>Your cart is empty!!!</p>
            )}
        </div>
    );
};

export default CartDrawer;
