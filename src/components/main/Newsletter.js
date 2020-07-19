import React from 'react';

// material-ui
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// style
import './Newsletter.css';

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#707070',
        },
        '&:hover fieldset': {
          borderColor: '#707070',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#707070',
        },
      },
    },
    btnStyle: {
      color:'white',
      backgroundColor:'#A53BBA',
      '&:hover': {
        backgroundColor:'#A53BBA',
      },
      textTransform:'capitalize',
      marginLeft:'10px',
    },
  }));
  
export default function Newsletter() {
    const classes = useStyles();
    return (
    <div className="wrapper">
    <div className={classes.root}>   
      <div>
        <div className="center" >
          <div className="footer">
            <span className="newsletter">
                <span style={{fontSize:'20px', display:'block'}}>Subscribe to our newsletter</span>
                <span style={{fontSize:'16px', display:'block', marginTop:'5px'}}>Keep up to date with Kovan</span>
            </span>
            <span className="email">
              <TextField
                className={classes.inputStyle}
                id="outlined-size-normal"
                placeholder="Your Email"
                variant="outlined"
              />
              <Button 
                variant="contained" 
                // color="primary" 
                className={classes.btnStyle}
              >
                Send
            </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}