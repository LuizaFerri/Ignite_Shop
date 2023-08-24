"use client";

import axios from "axios";
import "./styles.css";

interface ButtonProps {
  priceId: string;
}

export default function Button(priceId: ButtonProps) {
  async function handleBuyProduct() {
    try {
      const response = await axios.post("/api/checkout", {
        priceId: priceId.priceId
      },{
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { checkoutSession } = response.data;
      window.location.href = checkoutSession;
    } catch (error) {
      console.error(error);
      
    }
  }
  return <button onClick={handleBuyProduct}>Comprar agora</button>;
}
