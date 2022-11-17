import {data} from "../../data/data"
import {useState, useEffect} from "react";
import ItemList from "../ItemList/itemList"
import './ItemsListContainer.css'
import { useParams } from "react-router-dom";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams ();

  const getProducts = new Promise ((resolve, rejected) => {
    setTimeout(() =>{
      if (categoryName){
        const filteredData = data.filter((product) =>{
          return  product.category  === categoryName;
        });
        resolve (filteredData);
      }else {
        resolve(data)
      }
    }, 300);
  })

  useEffect(()=>{
    getProducts
    .then((res)=> setItems(res))
    .catch((error) => console.log(error))
  }, [categoryName]);
  
  return(
    <div>
      <ItemList products={items}/>
    </div>
  )
};

export default ItemsListContainer