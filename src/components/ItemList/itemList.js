import Item from "../Item/item";

const itemList = ({products}) => {
  return products.map ((product)=> 
  <div key={product.id} className="container d-flex justify-content-center">
    <div style={{width:"350px", margin:"20px"}}>
          <Item product ={product}/>
    </div>
  </div>)
}


export default itemList;