import React from 'react';

// material-ui
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// style
import './Footer.css';


const useStyles = makeStyles((theme) => ({
  footerWrap: {
    backgroundColor:'#A53BBA',
    overflow:'hidden',
    width:'100%',
  },
  root: {
    flexGrow: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FCEFFF',
      },
      '&:hover fieldset': {
        borderColor: '#FCEFFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FCEFFF',
      },
    },
  },
  btnStyle: {
    color:'white',
    backgroundColor:'#A53BBA',
    '&:hover': {
      backgroundColor:'#A53BBA',
    },
    textTransform:'capitalize'
  }
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <>
    <div className="wrapper" >
      <div className={classes.footerWrap}>
        <div className="center" >
          <div className="footer">
            <span className="copyright">&copy; Kovan All rights reseved</span>
            <span className="kraken">
              <svg xmlns="http://www.w3.org/2000/svg" width="42.2" height="47.953" viewBox="0 0 42.2 47.953">
                <g id="Layer_2" data-name="Layer 2" transform="translate(-0.007)">
                  <g id="Layer_2-2" data-name="Layer 2" transform="translate(0.007)">
                    <path id="Path_2120" data-name="Path 2120" d="M36.1,175.418a8.44,8.44,0,0,1-15.752,4.22H24.5a5.011,5.011,0,0,0,1.055.614,5.185,5.185,0,0,0,2.11.441,5.275,5.275,0,0,0,5.275-5.275,5.5,5.5,0,0,0-.03-.563l2.585-2.585a8.087,8.087,0,0,1,.344,1.038A8.5,8.5,0,0,1,36.1,175.418Z" transform="translate(-16.057 -135.919)" fill="#fff"/>
                    <path id="Path_2121" data-name="Path 2121" d="M120.727,179.654a8.44,8.44,0,0,1-15.486-6.33,8.232,8.232,0,0,1,.34-1.034l1.034,1.034,1.555,1.555a5.368,5.368,0,0,0-.03.555,5.275,5.275,0,0,0,5.275,5.275,5.184,5.184,0,0,0,2.11-.441,5.011,5.011,0,0,0,1.055-.614Z" transform="translate(-82.82 -135.935)" fill="#fff"/>
                    <path id="Path_2122" data-name="Path 2122" d="M42.207,32.706a8.44,8.44,0,0,1-11.88,7.708,8.335,8.335,0,0,1-1.981-1.243h0a8.206,8.206,0,0,1-1.055-1.055,8.385,8.385,0,0,1-1.91-4.421q-.015-.129-.025-.26c-.023-.243-.034-.487-.034-.736a8.5,8.5,0,0,1,.152-1.6l.012-.068A8.44,8.44,0,0,1,28.627,26c.044-.036.091-.07.137-.1a12.661,12.661,0,1,0-15.323,0c.046.034.093.068.137.1a8.44,8.44,0,0,1,3.14,5.026l.013.07a8.5,8.5,0,0,1,.156,1.608,5.332,5.332,0,0,1-.034.736,1.342,1.342,0,0,1-.025.26,8.386,8.386,0,0,1-1.9,4.421,8.206,8.206,0,0,1-1.055,1.055h0A8.443,8.443,0,1,1,3.029,26.235l2.251,2.251a5.276,5.276,0,1,0,8.44,4.4v-.175a5.275,5.275,0,0,0-2.082-4.2l-.028-.021a15.826,15.826,0,1,1,18.991,0l-.036.027a5.275,5.275,0,0,0-2.074,4.193v.175a5.252,5.252,0,0,0,2.11,4.045h0a5.275,5.275,0,0,0,6.33-8.44l2.251-2.251A8.419,8.419,0,0,1,42.207,32.706Z" transform="translate(-0.007)" fill="#fff"/>
                    <path id="Path_2123" data-name="Path 2123" d="M73.162,54.993a1.711,1.711,0,0,1-.032.325,1.583,1.583,0,1,1-2.4-1.648Z" transform="translate(-55.228 -42.345)" fill="#fff"/>
                    <path id="Path_2124" data-name="Path 2124" d="M118.112,55.026a1.595,1.595,0,0,1-2.5.962,1.561,1.561,0,0,1-.272-.255l-.04-.051a1.437,1.437,0,0,1-.127-.192,1.254,1.254,0,0,1-.061-.118,1.509,1.509,0,0,1-.112-.346l-.013-.072a.837.837,0,0,1-.013-.1,1.2,1.2,0,0,1,0-.124l2.3-1.429h0a1.6,1.6,0,0,1,.477.359c.03.034.057.07.084.106a1.3,1.3,0,0,1,.076.112,1.614,1.614,0,0,1,.141.291,1.344,1.344,0,0,1,.04.131,1.007,1.007,0,0,1,.03.133.858.858,0,0,1,.017.129A1.539,1.539,0,0,1,118.112,55.026Z" transform="translate(-90.714 -42.053)" fill="#fff"/>
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

