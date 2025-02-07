import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0); // Step 3
  const cartItems = useSelector((state) => state.cart.cartItems); // Step 4
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Step 5

  useEffect(() => { // Step 6
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return ( // Step 7
    <div className="super-coins" style={{ textAlign: "center" }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
    </div>
  );
};

export default SuperCoin;