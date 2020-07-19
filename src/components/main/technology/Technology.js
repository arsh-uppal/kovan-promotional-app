import React from 'react';
import Download from './../download/Download';
import Newsletter from '../../main/Newsletter';

// css
import './Technology.css';


export default function Technology() {

  return (
    <>
    <div className="wrapper">
      <div className="center">

        <div className="sub_title">
          <h1 style={{color:'#A53BBA'}}>Technology</h1>
          <p>Technology we used</p>
        </div>

        <div className="sub_sub_title">
          <h2>Design</h2>
          <p>
          {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem  */}
          </p>
        </div>

        <div className="techImages"><img src={require('../../../images/tech_design_w.png')} /></div>
        <div className="techImages_mb"><img src={require('../../../images/tech_design_m.png')} /></div>

        <div className="sub_sub_title">
          <h2>Development</h2>
          <p>
             {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem  */}
            </p>
        </div>

        <div className="techImages"><img src={require('../../../images/tech_dev_w.png')} /></div>
        <div className="techImages_mb"><img src={require('../../../images/tech_dev_m.png')} /></div>

      </div>{/* center */}
    </div>{/* wrapper */}
    
    <Download />
    <Newsletter />
    </>
  );
}
