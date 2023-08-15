import "./styles.css";
interface ProductProps {
  params: {
    Id: string;
  };
}

export default function Product({ params }: ProductProps) {
  return (
    <div className="product-container">
      <div className="image-container">imagem</div>
      <div className="product-details">
        <h1>Camiseta X</h1>
        <span>89,90</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa esse
          eum eaque. Cupiditate iusto voluptates laborum quisquam deserunt,
          fugit ratione harum possimus adipisci omnis unde rem consequuntur,
          pariatur excepturi accusamus.
        </p>
        <button>
            Comprar agora
        </button>
      </div>
    </div>
  );
}
