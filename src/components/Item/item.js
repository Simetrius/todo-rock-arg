import { Link } from "react-router-dom";

const item = ({product}) => {
  return (
    <div className="card">
        <img alt = {product.title} src={`/images/${product.image}`}/>
      <div className="card-body"> 
        <h2 className="card-title">{product.title}</h2>
        <h2>{product.category}</h2>
        <h2>Precio: $ {product.price}</h2>
        <h2>Stock: ({product.stock})</h2>
        <Link to ={`/item/${product.id}`}>
          <button>VER ARTÍCULO</button>
        </Link>

      </div>
    </div>
  )
}

export default item;