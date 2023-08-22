"use client";

import "./styles.css";

interface ButtonProps {
  paymentId: string;
}

export default function Button(paymentId: ButtonProps) {
  function handleBuy() {
    console.log(paymentId);
  }
  return <button onClick={handleBuy}>Comprar agora</button>;
}
