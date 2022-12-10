import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';


function App() {
  return (
  <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemsListContainer/>}/>    
        <Route path='/category/:categoryName' element={<ItemsListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='cart' element={<Cart/>} />        
      </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
