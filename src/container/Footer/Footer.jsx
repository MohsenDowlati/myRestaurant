import React from 'react';
import {FooterOverlay,Newsletter} from "../../components";
import {FiFacebook , FiTwitter ,FiInstagram} from 'react-icons/fi';
import {images} from "../../constants";
import './Footer.css';

const Footer = () => (
  <div className={"app_footer section_padding"}>
    <FooterOverlay/>
    <Newsletter/>

      <div className={"app_footer_links"}>
          <div className={"app_footer_links_contact"}>
                <h1 className={"app_footer_headtext"}>Contact Us</h1>
              <p className={"p_opensans"}>dowmohsen@gmail.com</p>
              <p className={"p_opensans"}>github.com/MohsenDowlati</p>
              <p className={"p_opensans"} style={{color:'#ecbb6d'}}>This Shit Developed By MOHSEN.</p>
          </div>
          <div className={"app_footer_links_logo"}>
            <img src={images.gericht} alt={"logo"}/>
              <p className={"p_opensans"}>"The best way to find yourself is to lose yourself in the service of others.</p>
              <img src={images.spoon} alt={"spoon"} className={"spoon_img"} style={{marginTop:15}}/>
              <div className={"app_footer_links_icons"}>
                  <FiFacebook/>
                  <FiTwitter/>
                  <FiInstagram/>
              </div>
          </div>
          <div className={"app_footer_links_work"}>
              <h1 className={"app_footer_headtext"}>Working Hours</h1>
              <p className={"p_opensans"}>Monday-Friday</p>
              <p className={"p_opensans"}>08:00 am - 12:00 am</p>
              <p className={"p_opensans"}>Saturday-Sunday</p>
              <p className={"p_opensans"}>07:00 am - 11:00 pm</p>
          </div>
      </div>
      <div className={"app_footer_copyright"}>
          <p className={"p_opensans"}>2023 Gericht. All Rights reserved.</p>
      </div>
  </div>
);

export default Footer;
