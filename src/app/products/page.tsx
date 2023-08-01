'use client'
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./products.css";
import camisa1 from "../../assets/camisa1.png";
import camisa2 from "../../assets/camisa2.png";
import camisa3 from "../../assets/camisa3.png";

export default function Products() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
      
    },
  });
  return (
    <div className="productCard keen-slider" ref={sliderRef}>
      <div className="product keen-slider__slide">
        <Image
          src={camisa1}
          alt="camisa1"
          width={520}
          height={480}
          className="imgCamiseta"
        />
        <footer className="footerCard">
          <strong>Camiseta x</strong>
          <span>99,90</span>
        </footer>
      </div>
      <div className="product keen-slider__slide">
        <Image
          src={camisa2}
          alt="camisa2"
          width={520}
          height={480}
          className="imgCamiseta"
        />
        <footer className="footerCard">
          <strong>Camiseta x</strong>
          <span>99,90</span>
        </footer>
      </div>
      <div className="product keen-slider__slide">
        <Image
          src={camisa3}
          alt="camisa2"
          width={520}
          height={480}
          className="imgCamiseta"
        />
        <footer className="footerCard">
          <strong>Camiseta x</strong>
          <span>99,90</span>
        </footer>
      </div>
      <div className="product keen-slider__slide">
        <Image
          src={camisa3}
          alt="camisa2"
          width={520}
          height={480}
          className="imgCamiseta"
        />
        <footer className="footerCard">
          <strong>Camiseta x</strong>
          <span>99,90</span>
        </footer>
      </div>
    </div>
  );
}
