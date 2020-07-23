import React, {useState} from 'react';
import Download from '../download/Download';
import {CardData} from './CardData';

// material-ui
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';

// css
import './Price.css';

import Newsletter from '../../main/Newsletter';

//image
import Bgimg from "../../../images/bg_price_2.png";

// material-ui-styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    border:'2px solid #a559ba',
  },
  title: {
    backgroundColor:'#a559ba',
    color:'white',
    textAlign:'center',
    paddingTop:'15px',
    paddingBottom:'15px',
    textTransform:'uppercase',
    fontSize:'28px',
    fontWeight:'bold',
    textTransform:'capitalize',
    "&:nth-child(2)": {
      backgroundColor:'red',
    }
  },
  price : {
      textAlign:'center',
      fontWeight:'bold',
      paddingTop:'45px',
      paddingBottom:'35px',
      fontSize:'36px',
  },
  pos: {
    marginBottom: 50,
    textAlign:'center',
    lineHeight:1.2,
    minHeight:'45px',
    padding:'0 10px',
  },
  container: {
      paddingTop:90,
      paddingBottom:80,
      paddingLeft:20,
      paddingRight:20,
  },
  btnStyle: {
    width:'70%',
    color:'white',
    backgroundColor:'#A53BBA',
    '&:hover': {
      backgroundColor:'#A53BBA',
    },
    margin:'0 auto',
    marginBottom: 35,
    paddingTop:7,
    paddingBottom:7,
    textTransform:'capitalize',
    fontSize:'16px',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [price,setPrice] = useState(CardData);

  const PriceCard = (props) => (
    <>
      <Grid item sm={4} xs={12} >
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                  {props.title}
                </Typography>
                <Typography className={classes.price} variant="h5" component="h2">
                  {props.price}
                </Typography>
                <Typography className={classes.pos}>
                  {props.des}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" className={classes.btnStyle}>{props.btn}</Button>
            </CardActions>
        </Card>
    </Grid>
    </>
  );




  return (
    <div className={classes.root}>
      <div className="bg">
      <div className="center">
        <div className="sub_title">
          <h1>Price</h1>
          <p>Try Calendar, To-do lists, and Message for free<br />
          Upgrade plan to all Kovan features</p>
        </div>
      <Grid 
        container 
        spacing={5}
        className={classes.container}
      >
        {price.map((item) => (
            <PriceCard
              id={item.id}
              title={item.title}
              price={item.price}
              des={item.des}
              btn={item.btn}
            />
          ))}
        {/* <Grid item sm={4} xs={12} >
            <Card className={classes.card} style={{border:'2px solid #a53bba'}}>
                <CardContent>
                    <Typography 
                    className={classes.title} 
                    style={{backgroundColor:'#a53bba'}}
                    gutterBottom>
                       Basic
                    </Typography>
                    <Typography className={classes.price} variant="h5" component="h2">
                        $8.99
                    </Typography>
                    <Typography className={classes.pos}>
                        Get 2 Add-Ons<br />For 1 Year
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={classes.btnStyle}>Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item sm={4} xs={12} >
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Pro
                    </Typography>
                    <Typography className={classes.price} variant="h5" component="h2">
                        $89
                    </Typography>
                    <Typography className={classes.pos}>
                        Fully Customize User<br />For 1 Year
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={classes.btnStyle}>Buy Now</Button>
                </CardActions>
            </Card>
        </Grid> */}
      </Grid>
      </div>
      </div>
      <Download />
      <Newsletter />
    </div>
  );
}
