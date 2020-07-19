import React, { useState, useEffect } from "react";
import './Team.css';

// material-ui
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Members from './Members';
import {DATA}  from './DATA';
import Newsletter from '../../main/Newsletter';
import Download from '../download/Download';

export default function Team() {
  const [items,setItems] = useState(DATA);
  
  return (
    <div className="wrapper" >
      <div className="center" >
        <div className="sub_title">
          <h1>Our Team</h1>
          <p>Kovan is brought to you by 7 talented people. <br />
          This team is dedicated to bring a new experience with 2 designers who bring amazing styles <br />
          and 5 developers who have experience from different platforms.
          <span style={{fontWeight:'bold'}}>Reach Out To Us!</span></p>
        </div>
        <div className="itemContainer">
          {items.map((item) => (
            <Members
              id={item.id}
              imgtitle={item.imgtitle}
              src={item.src}
              alt={item.alt}
              name={item.name}
              title={item.title}
              ahref={item.ahref}
              gahref={item.gahref}
            />
          ))}
        </div>
      </div>
      <Download />
      <Newsletter />
    </div>
  );
}


