import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
interface SuccessProps {
  searchParams: {
    session_id: string;
  };
}

export default async function Success({ searchParams }: SuccessProps) {
  const { session_id } = searchParams;
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const customerName = session.customer_details?.name;
  const productName = session.line_items?.data[0]?.price
    ?.product as Stripe.Product;
  return (
    <main className="sucessContainer">
      <h1>Compra Efetuada!</h1>
      <div className="imageContainer">
        <Image
          src={productName.images[0]}
          alt={productName.name}
          width={120}
          height={110}
        />
      </div>
      <p>
        Uhuul, <strong>{customerName}</strong>, sua {productName.name} está a
        caminho!
      </p>
      <Link href="/">Voltar ao catálogo</Link>
    </main>
  );
}
