import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import EmptyCart from "../img/emptyCart.svg";
import CartList from "./CartList";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCartShow, resetCart } from "../redux/cartslice";
import { toast } from "react-toastify";

const CartContainer = () => {
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const { cartShow, cartItems, user } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(setCartShow(!cartShow));
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTot(totalPrice);
  }, [cartItems, flag]);

  const clearCart = () => {
    dispatch(resetCart());
  };

  const handleCheckout = async () => {
    if (user) {
      try {
        // Create a Stripe session on the server
        const response = await axios.post(
          "http://localhost:8000/api/create-payment-intent",
          {
            cartItems: cartItems,
          }
        );

        // Redirect to the Stripe checkout page
        const stripe = await loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
        const { error } = await stripe.redirectToCheckout({
          sessionId: response.data.sessionId,
        });
        if (error) {
          console.error("Error redirecting to Stripe:", error);
        }
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    } else {
      toast.error("Please sign in to checkout", {
        hideProgressBar: true,
        style: {
          fontSize: "14px",
        },
      });
      dispatch(setCartShow(!cartShow));
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="md:w-375 fixed right-0 top-0 z-[101] flex h-screen w-full flex-col bg-white drop-shadow-md"
    >
      <div className="flex w-full cursor-pointer items-center justify-between p-4">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-customBlack text-4xl hover:text-customGreen" />
        </motion.div>
        <p className="text-customBlack text-3xl font-semibold">Cart</p>
        <motion.p
          onClick={clearCart}
          whileTap={{ scale: 0.75 }}
          className="text-customBlack my-2 flex cursor-pointer items-center gap-2 rounded-md bg-gray-100 p-1 px-2 text-2xl hover:shadow-md hover:bg-customGreen hover:text-white "
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="bg-cartBg flex h-full w-full flex-col rounded-t-[2rem]">
          <div className="h-340 md:h-42 scrollbar-none flex w-full flex-col gap-3 overflow-y-scroll px-6 py-10">
            {/* cart item list*/}
            {cartItems &&
              cartItems.map((item) => (
                <CartList
                  item={item}
                  key={item.id}
                  flag={flag}
                  setFlag={setFlag}
                />
              ))}
          </div>
          {/* cart total section */}
          <div className="bg-cartTotal flex w-full flex-1 flex-col items-center justify-evenly rounded-t-[2rem] px-8 py-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-2xl text-gray-400 font-semibold">Sub Total</p>
              <p className="text-2xl text-gray-400 font-semibold">
                &#8377; {tot}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-2xl text-gray-400 font-semibold">Delivery</p>
              <p className="text-2xl text-gray-400 font-semibold">&#8377; 70</p>
            </div>

            <div className="my-2 w-full border-b border-gray-600"></div>

            <div className="flex w-full items-center justify-between">
              <p className="text-3xl font-semibold text-gray-200">Total</p>
              <p className="text-3xl font-semibold text-gray-200">
                &#8377; {tot + 70}
              </p>
            </div>

            {user ? (
              <motion.button
                onClick={handleCheckout}
                whileTap={{ scale: 0.8 }}
                type="button"
                className="my-2 w-full rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 p-2 text-3xl text-gray-50  hover:shadow-lg  "
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                onClick={handleCheckout}
                whileTap={{ scale: 0.8 }}
                type="button"
                className="my-2 w-full rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 p-2 text-3xl text-gray-50  hover:shadow-lg  "
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 ">
          <img src={EmptyCart} alt="" className="w-300" />
          <p className="text-customBlack text-3xl font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
