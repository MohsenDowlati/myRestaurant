import React from 'react';

import './Chef.css';
import {images} from "../../constants";
import {SubHeading} from "../../components";

const Chef = () => (
  <div className={"app_chef app_bg app_wrapper section_padding"}>
    <div className={"app_wrapper_img app_wrapper_img_reverse"}>
      <img src={images.chef} alt={"chef"}/>
    </div>
    <div className={"app_wrapper_info"}>
      <SubHeading title={"Chef's Word"}/>
      <h1 className={"headtext_cormorant"}>What We Believe in</h1>
      <div className={"app_chef_content"}>
        <div className={"app_chef_content_quote"}>
          <img src={images.quote} alt={"quote"}/>
          <p className={"p_opensans"}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.</p>
        </div>
        <p className={"p_opensans"}>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque
            Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
      </div>
        <div className={"app_chef_sign"}>
            <p>Kevin Luo</p>
            <p className={"p_opensans"}>Chef & Founder</p>
            <img src={images.sign} alt={"sign"}/>
        </div>

    </div>
  </div>
);

export default Chef;
