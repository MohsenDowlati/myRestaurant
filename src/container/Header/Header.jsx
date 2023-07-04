import React from 'react';

import './Header.css';
import {SubHeading} from "../../components";
import {images} from "../../constants";

const Header = () => (
  <div className={"app_header app_wrapper section_padding"} id={"home"}>
    <div className={"app_wrapper_info"}>
        <SubHeading title={"Chase the New Flavor"}/>
        <h1 className={"app_header_h1"}>The Key to Fine Dining</h1>
        <p className={"p_opensans"} style={{margin:'2rem 0'}}>All flavor text must be consistent with the lore of your game. To help with continuity between flavor texts, have one writer in charge of it. One person who oversees every line, even if multiple writers are producing them. If it doesn't mean anything, if it's just there to sound cool, then don't use it.</p>
        <button className={"custom_button"}>Explore Menu</button>
    </div>
    <div className={"app_wrapper_img"}>
        <img src={images.welcome} alt={"welcome"}/>
    </div>
  </div>
);

export default Header;
