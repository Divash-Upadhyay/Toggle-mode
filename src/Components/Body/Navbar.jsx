import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContexts"

export const Navbar = () =>{
    const {color} =useContext(CartContext)
    // const {cart} = useContext(CartContext); 
    return <nav  className='sidenav'  id={color ? "black": "white"} >
        <a>Home</a>
        <a>Stats</a>
        <a>Guide</a>
        <a>About</a>
    </nav>
} 