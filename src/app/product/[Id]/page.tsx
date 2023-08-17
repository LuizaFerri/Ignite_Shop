import { stripe } from "@/lib/stripe";
import "./styles.css";
import Stripe from "stripe";
import Image from "next/image";
interface ProductProps {
  params: {
    Id: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const { Id } = params;
  const response = await stripe.products.retrieve(Id, {
    expand: ["default_price"],
  });
  const price = response.default_price as Stripe.Price;
  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    description: response.description,
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
        />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </div>
    </div>
  );
}
