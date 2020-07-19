import React, { useState, useEffect } from "react";
import './Team.css';

// material-ui
import { Typography } from '@material-ui/core';

import Git from '../../../images/git.png';
import Linkedin from '../../../images/linkedin.png';


const Members = (props) => (
    <div className="items0">
    <div className="tPic">
      <img title={props.imgtitle} src={props.src} alt={props.alt} />
    </div>
    <Typography variant="h5" className="itemTitle">{props.name}</Typography>
    <Typography className="itemDetail">{props.title}</Typography>
    <div className="link">
      <a href={props.ahref} target="_blank"><img title="linkedin" src={Linkedin} alt="linkedin" /></a>
      <a href={props.gahref} target="_blank"><img title="git" src={Git} alt="git" /></a>
    </div>
  </div>
);

export default Members;

