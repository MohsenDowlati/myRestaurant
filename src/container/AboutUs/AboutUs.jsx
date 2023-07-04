import React from 'react';

import './AboutUs.css';
import {images} from "../../constants";

const AboutUs = () => (
  <div className={"app_aboutus app_bg flex_center section_padding"} id={"about"}>
    <div className={"app_aboutus_overlay flex_center"}>
        <img src={images.G} alt={'G'}/>
    </div>

    <div className={"app_aboutus_content flex_center"} >
        <div className={"app_aboutus_content_about"}>
            <h1 className={"headtext_cormorant"}>About Us</h1>
            <img src={images.spoon} alt={"spoon"} className={"spoon_img"}/>
            <p className={"p_opensans"}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
            <button type={"button"} className={"custom_button"}>Know more</button>
        </div>
        <div className={"app_aboutus_content_knife flex_center"}>
            <img src={images.knife} alt={"knife"}/>
        </div>
        <div className={"app_aboutus_content_history"}>
            <h1 className={"headtext_cormorant"}>Our History</h1>
            <img src={images.spoon} alt={"spoon"} className={"spoon_img"}/>
            <p className={"p_opensans"}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
            <button type={"button"} className={"custom_button"}>Know more</button>
        </div>
    </div>
  </div>
);

export default AboutUs;
