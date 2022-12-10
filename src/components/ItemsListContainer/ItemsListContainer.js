import {useState, useEffect} from "react";
import ItemList from "../ItemList/itemList"
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams ();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection (db, "items");

    if (categoryName){
      const queryFilter = query(querySnapshot, where("category", "==", categoryName)
    );

      getDocs(queryFilter)
      .then((response) => {
        const data = response.docs.map((item) => {
          console.log(item.data());
          console.log(item.id);
          return { id: item.id, ...item.data()}
        });
        console.log(data);
        setItems(data);
      })
      .catch((error) => {})

    }else {
      getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((item) => {
          return { id: item.id, ...item.data()}
        });
        console.log(data);
        setItems(data);
      })
      .catch((error) => {})
    }
  }

  useEffect(() =>{
    getProducts();
  },[categoryName] )
  
  return(
    <div>
      <ItemList products={items}/>
    </div>
  )
};

export default ItemsListContainer