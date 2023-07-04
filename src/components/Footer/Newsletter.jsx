import React from 'react';
import {SubHeading} from "../index";
import './Newsletter.css';

const Newsletter = () => (
  <div className={"app_newsLetter"}>
      <div className={"app_newsLetter_heading"}>
          <SubHeading title={"Newsletter"}/>
          <h1 className={"headtext_cormorant"}>Subscribe to Our Newsletter</h1>
          <p className={"p_opensans"}>And never miss latest Updates!</p>
      </div>
      <div className={"app_newsLetter_input flex_center"}>
          <input type={"email"} placeholder={"Enter Your E-mail Address"}/>
          <button className={"custom_button"}>Subscribe</button>
      </div>
  </div>
);

export default Newsletter;
