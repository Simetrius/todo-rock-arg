import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemsListContainer/>}/>    
        <Route path='/category/:categoryName' element={<ItemsListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryName/item/:id' element={<ItemDetailContainer/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
