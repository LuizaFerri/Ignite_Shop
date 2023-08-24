import Image from "next/image";
import Link from "next/link";
import "./styles.css";

export default function Success() {
  return (
    <main className="sucessContainer">
      <h1>Compra Efetuada!</h1>
      <div className="imageContainer"></div>
      <p>
        Uhuul, <strong>Luiza</strong>, sua camiseta está a caminho!
      </p>
      <Link href="/">Voltar ao catálogo</Link>
    </main>
  );
}
