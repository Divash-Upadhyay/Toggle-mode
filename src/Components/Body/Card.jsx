import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContexts"
import "./Card.css"
export const Card = () =>{
    const {color,change} = useContext(CartContext)

    return (
    <div className="dv"  id={color ? "black": "white"}>
        <h1>My Dashboard</h1>
        <div class="rigt">
            <p>Dark Mode</p>
        <label class="switch">
       <input type="checkbox" onChange={change}/>
       <span class="slider round"></span>
</label>
</div>
       
    </div>
    )

}