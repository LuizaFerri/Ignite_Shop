"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import camisa1 from "../../assets/camisa1.png";
import camisa2 from "../../assets/camisa2.png";
import camisa3 from "../../assets/camisa3.png";
import { Key } from "react";

interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export function Carrousel({ products }: ProductsProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <div className="productCard keen-slider" ref={sliderRef}>
      {products.map((product) => (
        <div key={product.id} className="product keen-slider__slide">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={520}
            height={480}
            className="imgCamiseta"
          />
          <footer className="footerCard">
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </div>
      ))}
    </div>
  );
}
