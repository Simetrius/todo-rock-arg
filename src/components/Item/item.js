import { Link } from "react-router-dom";

const item = ({product}) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <h2>{product.category}</h2>
      <h2>{product.precio}</h2>
      <Link to ={`item/${product.id}`}>
        <button>VER ARTÍCULO</button>
      </Link>
    </div>
  )
}

export default item;