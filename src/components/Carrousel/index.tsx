"use client";
import Image from "next/image";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
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
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="product keen-slider__slide"
          prefetch={false}
        >
          <div key={product.id}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={520}
              height={480}
              className="imgCamiseta"
            />
            <div>
              <footer className="footerCard">
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
