import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    let btnName ="Login"
    const [btnNameReact, setBtnNameReact] = useState(btnName)
    return (
        <div className="header">
            <div className="Logo-container">
                <img className="Logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                        onClick={()=>{
                            btnNameReact ==="Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login")
                            console.log("btnNameReact",btnNameReact)
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;