import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className={"app_menuItem"}>
      <div className={"app_menuItem_head"}>
        <div className={"app_menuItem_name"}>
          <p className={"p_cormorant"} style={{color:'#DCCA87'}}>{title}</p>
        </div>
          <div className={"app_menuItem_dash"}/>
          <div className={"app_menuItem_price"}>
              <p className={"p_cormorant"}>{price}</p>
          </div>
      </div>
      <div className={"app_menuItem_sub"}>
          <p className={"p_opensans"} style={{color:'#AAA'}}>{tags}</p>
      </div>
  </div>
);

export default MenuItem;
