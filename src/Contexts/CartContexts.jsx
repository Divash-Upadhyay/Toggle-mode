import { createContext,useState } from "react";

export const CartContext = createContext();

export const CartContextProvider =({children}) =>
{
    
    const [color,changeColor] = useState(false);
   
    const change = () =>{
        changeColor(!color);
    }
    return <CartContext.Provider value={{color,change}}>{children}</CartContext.Provider>
     
} 