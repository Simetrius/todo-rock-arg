import Item from "../Item/item";

const itemList = ({products}) => {
  return products.map ((product)=> <Item product ={product} key={product.id}/>)
}


export default itemList;