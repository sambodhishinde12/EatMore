import { useSelector } from "react-redux";
import styles from "./CartDrawer.module.css";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from "react";
import edit from "../../utils/images/pencil.png";
import gpay from "../../utils/images/google-pay.png";
import cod from "../../utils/images/cash-on-delivery.png";
import card from "../../utils/images/credit-card.png";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e45622',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderBottomColor: '#000000',
          },
          minWidth: 270,
        },
      },
    },
  },
});

const Cart = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const cartItems = useSelector((store) => store.cart.items);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const calculateItemPrice = (item) => {
    const price =
      item?.card?.info?.finalPrice ||
      item?.card?.info?.price ||
      item?.card?.info?.defaultPrice ||
      0; // Default to 0 if no price is available
  
    const totalItemPrice = (price / 100) * item.quantity;
    return isNaN(totalItemPrice) ? 0 : totalItemPrice; // Fallback to 0 if calculation fails
  };
  
  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) return 0; // Handle empty cart
    const total = cartItems.reduce(
      (total, item) => total + calculateItemPrice(item),
      0
    );
    return total;
  };
  
  const handleApplyCoupon = () => {
    setIsDiscountApplied(true);
  };

  const calculateFinalPrice = () => {
    const totalPrice = calculateTotalPrice();
    const discount = isDiscountApplied ? 100 : 0; // Apply discount only if enabled
    const deliveryFee = 60; // Fixed delivery fee
    return totalPrice + deliveryFee - discount;
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.cartPage}>
        <div className={styles.userInfo}>
          <div className={styles.Billheader}>Billing Details</div>
          {!submittedData ? (
            <div className={styles.details}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row1}>
                  <div>
                    <TextField
                      label="FirstName"
                      {...register("firstName", { required: "FirstName is required" })}
                      variant="standard"
                    />
                    {errors.firstName && (
                      <span className={styles.error}>{errors.firstName.message}</span>
                    )}
                  </div>
                  <div>
                    <TextField
                      label="LastName"
                      {...register("lastName", { required: "LastName is required" })}
                      variant="standard"
                    />
                    {errors.lastName && (
                      <span className={styles.error}>{errors.lastName.message}</span>
                    )}
                  </div>
                </div>
                <div className={styles.row1}>
                  <div>
                    <TextField
                      label="Address Line 1"
                      {...register("Address1", { required: "Address 1 is required" })}
                      variant="standard"
                    />
                    {errors.Address1 && (
                      <span className={styles.error}>{errors.Address1.message}</span>
                    )}
                  </div>
                  <div>
                    <TextField
                      label="Address Line 2"
                      {...register("Address2")}
                      variant="standard"
                    />
                  </div>
                </div>
                <div className={styles.row1}>
                  <div>
                    <TextField
                      label="Landmark"
                      {...register("Landmark")}
                      variant="standard"
                    />
                  </div>
                  <div>
                    <TextField
                      label="City"
                      {...register("City", { required: "City is required" })}
                      variant="standard"
                    />
                    {errors.City && (
                      <span className={styles.error}>{errors.City.message}</span>
                    )}
                  </div>
                </div>
                <div className={styles.row1}>
                  <div>
                    <TextField
                      label="Pincode"
                      {...register("Pincode", { required: "Pincode is required" })}
                      variant="standard"
                    />
                    {errors.Pincode && (
                      <span className={styles.error}>{errors.Pincode.message}</span>
                    )}
                  </div>
                  <div>
                    <TextField
                      label="Mobile"
                      {...register("Mobile", { required: "Mobile is required" })}
                      variant="standard"
                    />
                    {errors.Mobile && (
                      <span className={styles.error}>{errors.Mobile.message}</span>
                    )}
                  </div>
                </div>
                <div className={styles.submitbtn}>
                  <Button variant="contained" type="submit" sx={{ minWidth: 250 }}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <div className={styles.summaryBlock}>
                <div className={styles.summaryAddress}>
                  <p className={styles.name}>
                    {submittedData.firstName} {submittedData.lastName}
                  </p>
                  <p className={styles.address}>
                    {submittedData.Address1} {submittedData.Address2}
                  </p>
                  {submittedData.Landmark ? (
                    <p className={styles.landmark}>
                      LandMark: {submittedData.Landmark}
                    </p>
                  ) : null}
                  <p className={styles.cityPincode}>
                    {submittedData.City} - {submittedData.Pincode}
                  </p>
                  <p className={styles.mobile}>{submittedData.Mobile}</p>
                </div>
                <div>
                  <img
                    src={edit}
                    alt="edit"
                    className={styles.edit}
                    onClick={() => setSubmittedData(null)}
                  />
                </div>
              </div>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentHeader}>Payment Methods</div>
                <div className={styles.gateways}>
                  <label className={styles.paymentOption}>
                    <input type="radio" name="paymentMethod" value="gpay" />
                    <img src={gpay} alt="Google Pay" className={styles.payment} />
                  </label>
                  <label className={styles.paymentOption}>
                    <input type="radio" name="paymentMethod" value="card" />
                    <img src={card} alt="Credit or Debit Card" className={styles.payment} />
                  </label>
                  <label className={styles.paymentOption}>
                    <input type="radio" name="paymentMethod" value="cod" />
                    <img src={cod} alt="Cash on Delivery" className={styles.payment} />
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.cartSummary}>
  {/* Header */}
  <div className={styles.billHeader}>Cart Summary</div>

  {/* Scrollable Cart Items */}
  <ul className={styles.cartItemsList}>
    {cartItems.map((item) => (
      <li key={item.card.info.id} className={styles.cartItem2}>
        <span className={styles.itemName}>{item.card.info.name}</span>
        <span className={styles.itemQuantity}>x {item.quantity}</span>
        <span className={styles.itemPrice}>
          <span>&#8377;</span>
          {calculateItemPrice(item).toFixed(2)}
        </span>
      </li>
    ))}
  </ul>

  {/* Apply Coupon */}
  <div className={styles.couponSection}>
        <button
          className={styles.couponButton}
          onClick={handleApplyCoupon}
          disabled={isDiscountApplied} // Prevent multiple clicks
        >
          {isDiscountApplied ? "Discount Applied" : "Apply Coupon"}
        </button>
      </div>

  {/* Bill Calculation */}
  <div className={styles.calculationBill}>
        <p className={styles.billRow}>
          <span>Total Price:</span>
          <span>&#8377; {calculateTotalPrice().toFixed(2)}</span>
        </p>
        <p className={styles.billRow}>
          <span>Delivery Fee:</span>
          <span>&#8377; 60</span>
        </p>
        <p className={styles.billRow}>
          <span>Discount:</span>
          <span>
            &#8377; {isDiscountApplied ? 100 : 0}
          </span>
        </p>
      </div>

      {/* Total Amount */}
      <div className={styles.totalPriceSection}>
        <p className={styles.totalPriceRow}>
          <span>To Pay:</span>
          <span>&#8377; {calculateFinalPrice().toFixed(2)}</span>
        </p>
      </div>
    </div>

      </div>
    </ThemeProvider>
  );
};

export default Cart;
