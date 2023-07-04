import React, {useState} from 'react';

import './Navbar.css';
import {images} from "../../constants";
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from "react-icons/md";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <nav className={"app_navbar"}>
            <div className={"app_navbar_logo"}>
                <img src={images.gericht} alt={"LOGO"}/>
            </div>
            <ul className={"app_navbar_links"}>
                <li className={"p_opensans"}><a href={"#home"}>Home</a> </li>
                <li className={"p_opensans"}><a href={"#about"}>About</a> </li>
                <li className={"p_opensans"}><a href={"#menu"}>Menu</a> </li>
                <li className={"p_opensans"}><a href={"#awards"}>Awards</a> </li>
                <li className={"p_opensans"}><a href={"#contact"}>Contact</a> </li>
            </ul>
            <div className={"app_navbar_login"}>
                <a href={"#login"} className={"p_opensans"}>Log In / Register</a>
                <div/>
                <a href={"/"} className={"p_opensans"}>Book Table</a>
            </div>
            <div className={"app_navbar_smallscreen"}>
                <GiHamburgerMenu color={"#ffffff"} fontSize={27} onClick={()=>setToggleMenu(true)}/>
                {toggleMenu && (
                <div className={"app_navbar_smallscreen_overlay flex_center slide-bottom"}>
                    <MdOutlineRestaurantMenu fontSize={27} className={"overlay_close"} onClick={()=>setToggleMenu(false)}/>
                    <ul className={"app_navbar_smallscreen_links"}>
                        <li className={"p_opensans"}><a href={"#home"}>Home</a> </li>
                        <li className={"p_opensans"}><a href={"#about"}>About</a> </li>
                        <li className={"p_opensans"}><a href={"#menu"}>Menu</a> </li>
                        <li className={"p_opensans"}><a href={"#awards"}>Awards</a> </li>
                        <li className={"p_opensans"}><a href={"#contact"}>Contact</a> </li>
                    </ul>
                </div>
                    )}
            </div>
        </nav>
    );
}

export default Navbar;
