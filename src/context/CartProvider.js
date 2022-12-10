import {createContext, useState} from "react";

export const cartContext = createContext([]);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const isInCart = (id) =>{
        return cart.some((product) => product.id === id)
    };

    const addToCart = (product, quantity) =>{
        if (isInCart(product.id)){
            alert("El producto ya se encuentra en el carrito");
        } else{
            setCart([...cart, {...product, quantity}])
            alert("PRODUCTO AGREGADO AL CARRITO")
        }
    }

    
    const clearCart = () => setCart ([]);

    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    //NO PUDE LOGRAR DARLE LA FUNCIONALIDAD CORRECTA AL REMOVE ITEM

    return (
        <cartContext.Provider value = {{cart, addToCart, clearCart, removeProduct}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider