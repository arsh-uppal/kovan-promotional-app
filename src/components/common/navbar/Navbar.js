import React from 'react';
import clsx from 'clsx';
// react-router
import {Link} from 'react-router-dom';
// material-ui
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// css
import './Navbar.css';
import './../../../App.css';

// material-ui-styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor:'#A53BBA',
  },
  toolbar: {
    // width:'80%',
    margin:'0 auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingTop:8,
  },
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
}));
export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="h1" className="logo_sidem">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="97.365" height="106.401" viewBox="0 0 97.365 106.401">
            <g id="Group_1485" data-name="Group 1485" transform="translate(-14158.135 -160.89)">
              <path id="Path_16" data-name="Path 16" d="M495.707,3410.732v-48.646a2.435,2.435,0,0,1,2.437-2.437h1.219a2.4,2.4,0,0,1,.932.185,2.44,2.44,0,0,1,1.5,2.251v48.646a2.444,2.444,0,0,1-.714,1.723,2.433,2.433,0,0,1-1.723.714h-1.219a2.435,2.435,0,0,1-2.437-2.437Z" transform="translate(13698.626 -3169.88)" fill="#a53bba"/>
              <path id="Path_17" data-name="Path 17" d="M519.753,3406.8l-16.044-22.913a2.439,2.439,0,0,1,.6-3.394l1-.7a2.435,2.435,0,0,1,2.707-.059,2.4,2.4,0,0,1,.687.658l16.044,22.913a2.439,2.439,0,0,1-.6,3.394l-1,.7a2.437,2.437,0,0,1-3.395-.6Z" transform="translate(13700.278 -3165.575)" fill="#a53bba"/>
              <path id="Path_18" data-name="Path 18" d="M503.709,3374.082l8.629-12.325a2.419,2.419,0,0,1,.687-.658,2.435,2.435,0,0,1,1.837-.324,2.4,2.4,0,0,1,.87.384l1,.7a2.411,2.411,0,0,1,.658.687,2.443,2.443,0,0,1,.345.886,2.449,2.449,0,0,1-.4,1.822l-8.629,12.325a2.439,2.439,0,0,1-3.395.6l-1-.7a2.438,2.438,0,0,1-.981-2.523A2.4,2.4,0,0,1,503.709,3374.082Z" transform="translate(13700.278 -3169.646)" fill="#a53bba"/>
              <path id="Path_19" data-name="Path 19" d="M507.51,3385.2h-6.424a2.435,2.435,0,0,1-2.251-1.5,2.4,2.4,0,0,1-.186-.932v-1.219a2.437,2.437,0,0,1,2.437-2.437h6.424a2.435,2.435,0,0,1,2.437,2.437v1.219a2.438,2.438,0,0,1-1.5,2.252A2.434,2.434,0,0,1,507.51,3385.2Z" transform="translate(13699.269 -3165.628)" fill="#a53bba"/>
              <path id="Path_25" data-name="Path 25" d="M557.955,3402.888a19.491,19.491,0,0,1-9.736,16.865l-23.8,13.74a19.446,19.446,0,0,1-19.473,0l-23.8-13.74a19.468,19.468,0,0,1-9.736-16.865v-27.48a19.481,19.481,0,0,1,9.736-16.865l23.8-13.74a19.448,19.448,0,0,1,19.473,0l23.8,13.74a19.5,19.5,0,0,1,9.736,16.865Zm-4.327-47.471-29.21-16.856a19.448,19.448,0,0,0-19.473,0l-29.21,16.856A19.481,19.481,0,0,0,466,3372.282v33.731a19.482,19.482,0,0,0,9.736,16.866l29.21,16.865a19.5,19.5,0,0,0,19.473,0l29.21-16.865a19.506,19.506,0,0,0,9.737-16.866v-33.731A19.505,19.505,0,0,0,553.628,3355.417Z" transform="translate(13692.135 -3175.058)" fill="#a53bba"/>
            </g>
          </svg>
          </Link>
        </Typography>
        <div className="linksContainerHidden">
            <Link to="/">Features</Link>
            <Link to="/price">Price</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/download">Download</Link>
          </div>
      </List>
      <div onClick={toggleDrawer(anchor, false)} className="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.914" height="19.914" viewBox="0 0 19.914 19.914">
          <g id="Group_1488" data-name="Group 1488" transform="translate(-1255.793 -125.793)">
            <line id="Line_31" data-name="Line 31" x2="18.5" y2="18.5" transform="translate(1256.5 126.5)" fill="none" stroke="#a53bba" stroke-width="2"/>
            <line id="Line_51" data-name="Line 51" x1="18.5" y2="18.5" transform="translate(1256.5 126.5)" fill="none" stroke="#a53bba" stroke-width="2"/>
          </g>
        </svg>
      </div>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}> 
        <div className='center'>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{color:'white',textDecoration:'none'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="138.906" height="53.384" viewBox="0 0 138.906 53.384" className="logo">
                <g id="Group_374" data-name="Group 374" transform="translate(-30 -8)">
                  <g id="Group_346" data-name="Group 346" transform="translate(1 -9)">
                    <path id="Path_181" data-name="Path 181" d="M486.707,3180.278v-24.407a1.225,1.225,0,0,1,.358-.865,1.223,1.223,0,0,1,.4-.265,1.207,1.207,0,0,1,.468-.093h.611a1.206,1.206,0,0,1,.468.093,1.217,1.217,0,0,1,.661.662,1.208,1.208,0,0,1,.094.468v24.407a1.223,1.223,0,0,1-1.223,1.223h-.611a1.222,1.222,0,0,1-1.223-1.223Z" transform="translate(-439.546 -3123.16)" fill="#fff"/>
                    <path id="Path_182" data-name="Path 182" d="M502.539,3188.122l-8.05-11.5a1.225,1.225,0,0,1,.3-1.7l.5-.35a1.223,1.223,0,0,1,1.7.3l8.05,11.5a1.224,1.224,0,0,1-.3,1.7l-.5.35a1.222,1.222,0,0,1-1.7-.3Z" transform="translate(-442.484 -3130.817)" fill="#fff"/>
                    <path id="Path_183" data-name="Path 183" d="M494.489,3162.422l4.33-6.184a1.221,1.221,0,0,1,1.7-.3l.5.351a1.21,1.21,0,0,1,.33.345,1.225,1.225,0,0,1,.173.444,1.23,1.23,0,0,1-.2.914l-4.33,6.184a1.223,1.223,0,0,1-1.7.3l-.5-.351a1.219,1.219,0,0,1-.5-.789,1.223,1.223,0,0,1,.2-.913Z" transform="translate(-442.484 -3123.575)" fill="#fff"/>
                    <path id="Path_184" data-name="Path 184" d="M494.095,3177.166h-3.223a1.224,1.224,0,0,1-1.223-1.223v-.611a1.222,1.222,0,0,1,1.223-1.223h3.223a1.222,1.222,0,0,1,1.223,1.223v.611a1.224,1.224,0,0,1-.754,1.13A1.218,1.218,0,0,1,494.095,3177.166Z" transform="translate(-440.689 -3130.723)" fill="#fff"/>
                    <path id="Path_185" data-name="Path 185" d="M503.136,3164.534a9.779,9.779,0,0,1-4.885,8.461l-11.941,6.894a9.756,9.756,0,0,1-9.77,0L464.6,3173a9.767,9.767,0,0,1-4.885-8.461v-13.787a9.773,9.773,0,0,1,4.885-8.461l11.941-6.894a9.756,9.756,0,0,1,9.77,0l11.941,6.894a9.784,9.784,0,0,1,4.885,8.461Zm-2.171-23.817-14.655-8.457a9.756,9.756,0,0,0-9.77,0l-14.655,8.457a9.774,9.774,0,0,0-4.885,8.462V3166.1a9.775,9.775,0,0,0,4.885,8.462l14.655,8.461a9.783,9.783,0,0,0,9.77,0l14.655-8.461a9.787,9.787,0,0,0,4.885-8.462v-16.924A9.787,9.787,0,0,0,500.965,3140.716Z" transform="translate(-428 -3113.949)" fill="#fff"/>
                  </g>
                  <path id="Path_5" data-name="Path 5" d="M461.089,3239.094l-1.408,1.463a.8.8,0,0,0-.224.554v5.176a.8.8,0,0,1-.8.8H457.8a.8.8,0,0,1-.8-.8v-17.036a.8.8,0,0,1,.8-.8h.857a.8.8,0,0,1,.8.8v6.328a.8.8,0,0,0,1.395.534l6.648-7.4a.8.8,0,0,1,.6-.264h.828a.8.8,0,0,1,.6,1.332l-5.709,6.406a.8.8,0,0,0-.039,1.016l6.535,8.6a.8.8,0,0,1-.637,1.284h-.935a.8.8,0,0,1-.636-.315l-5.8-7.608A.8.8,0,0,0,461.089,3239.094Z" transform="translate(-368 -3203.194)" fill="#fff"/>
                  <path id="Path_6" data-name="Path 6" d="M484.929,3237.167a8.352,8.352,0,0,0-1.332-5.088,4.392,4.392,0,0,0-3.724-1.773,4.348,4.348,0,0,0-3.668,1.773A8.185,8.185,0,0,0,474.83,3237v1.369a8.368,8.368,0,0,0,1.35,5.049,4.732,4.732,0,0,0,7.4.1,8.326,8.326,0,0,0,1.344-4.973Zm2.444,1.2a11.535,11.535,0,0,1-.921,4.781,6.99,6.99,0,0,1-2.612,3.117,7.189,7.189,0,0,1-3.942,1.074,6.949,6.949,0,0,1-6.547-4.167,11.052,11.052,0,0,1-.966-4.638v-1.345a11.394,11.394,0,0,1,.934-4.749,6.913,6.913,0,0,1,6.554-4.249,7.223,7.223,0,0,1,3.948,1.082,6.971,6.971,0,0,1,2.631,3.136,11.583,11.583,0,0,1,.921,4.78Z" transform="translate(-368 -3203.194)" fill="#fff"/>
                  <path id="Path_7" data-name="Path 7" d="M497.7,3241.634l4.38-12.646a.8.8,0,0,1,.756-.537h.969a.8.8,0,0,1,.75,1.077l-6.319,17.037a.8.8,0,0,1-.75.522h-1.062a.8.8,0,0,1-.75-.522l-6.307-17.038a.8.8,0,0,1,.75-1.076h.956a.8.8,0,0,1,.756.539l4.359,12.643A.8.8,0,0,0,497.7,3241.634Z" transform="translate(-368 -3203.194)" fill="#fff"/>
                  <path id="Path_8" data-name="Path 8" d="M518.917,3247.082h-.8a.8.8,0,0,1-.751-.525l-1.589-4.347-.73-2.006-2.423-6.657a.8.8,0,0,0-1.5,0L508.7,3240.2l-.741,2.006-1.559,4.343a.8.8,0,0,1-.753.529h-.807A.8.8,0,0,1,504.1,3246l6.5-17.03a.8.8,0,0,1,.747-.514h1.045a.8.8,0,0,1,.747.513l6.524,17.03A.8.8,0,0,1,518.917,3247.082Z" transform="translate(-368 -3203.194)" fill="#fff"/>
                  <path id="Path_9" data-name="Path 9" d="M536.106,3247.087h-1.237a.8.8,0,0,1-.67-.363l-7.675-11.749a.8.8,0,0,0-1.47.438v10.874a.8.8,0,0,1-.8.8h-.871a.8.8,0,0,1-.8-.8v-17.036a.8.8,0,0,1,.8-.8h1.237a.8.8,0,0,1,.671.363l7.7,11.808a.8.8,0,0,0,1.47-.437v-10.934a.8.8,0,0,1,.8-.8h.844a.8.8,0,0,1,.8.8v17.036A.8.8,0,0,1,536.106,3247.087Z" transform="translate(-368 -3203.194)" fill="#fff"/>
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="40.268" height="44.005" viewBox="0 0 40.268 44.005" className="logo_m">
                <g id="Group_346" data-name="Group 346" transform="translate(-29 -17)">
                  <path id="Path_181" data-name="Path 181" d="M486.707,3175.776v-20.119a1.009,1.009,0,0,1,.295-.713,1.011,1.011,0,0,1,.327-.218,1,1,0,0,1,.386-.076h.5a1,1,0,0,1,.385.076,1,1,0,0,1,.545.545,1,1,0,0,1,.077.386v20.119a1.008,1.008,0,0,1-1.008,1.008h-.5a1.007,1.007,0,0,1-1.008-1.008Z" transform="translate(-442.736 -3125.705)" fill="#fff"/>
                  <path id="Path_182" data-name="Path 182" d="M501.086,3185.7l-6.635-9.476a1.009,1.009,0,0,1,.247-1.4l.413-.289a1.008,1.008,0,0,1,1.4.248l6.635,9.476a1.008,1.008,0,0,1,.024,1.12.988.988,0,0,1-.272.284l-.413.289a1.008,1.008,0,0,1-1.4-.247Z" transform="translate(-446.487 -3135.479)" fill="#fff"/>
                  <path id="Path_183" data-name="Path 183" d="M494.45,3161.244l3.569-5.1a1.006,1.006,0,0,1,1.4-.247l.413.289a1,1,0,0,1,.272.284,1.011,1.011,0,0,1,.143.366,1.014,1.014,0,0,1-.167.754l-3.569,5.1a1.008,1.008,0,0,1-1.4.247l-.413-.289a1,1,0,0,1-.414-.651,1.008,1.008,0,0,1,.167-.753Z" transform="translate(-446.487 -3126.235)" fill="#fff"/>
                  <path id="Path_184" data-name="Path 184" d="M493.314,3176.629h-2.657a1.009,1.009,0,0,1-1.008-1.008v-.5a1.007,1.007,0,0,1,1.008-1.008h2.657a1.007,1.007,0,0,1,1.008,1.008v.5a1.008,1.008,0,0,1-.622.931A1,1,0,0,1,493.314,3176.629Z" transform="translate(-444.196 -3135.359)" fill="#fff"/>
                  <path id="Path_185" data-name="Path 185" d="M495.031,3158.634a8.061,8.061,0,0,1-4.027,6.975l-9.844,5.682a8.042,8.042,0,0,1-8.054,0l-9.844-5.682a8.052,8.052,0,0,1-4.026-6.975v-11.365a8.056,8.056,0,0,1,4.026-6.975l9.844-5.683a8.042,8.042,0,0,1,8.054,0l9.844,5.683a8.065,8.065,0,0,1,4.027,6.975ZM493.241,3139l-12.081-6.971a8.042,8.042,0,0,0-8.054,0L461.027,3139a8.057,8.057,0,0,0-4.027,6.975v13.95a8.058,8.058,0,0,0,4.027,6.976l12.081,6.975a8.065,8.065,0,0,0,8.054,0l12.081-6.975a8.068,8.068,0,0,0,4.027-6.976v-13.95A8.067,8.067,0,0,0,493.241,3139Z" transform="translate(-428 -3113.949)" fill="#fff"/>
                </g>
              </svg>
            </Link>
          </Typography>
          <div className="linksContainer">
            <Link to="/">Features</Link>
            <Link to="/price">Price</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/download">Download</Link>
          </div>
          <span className="hamburger">
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                <IconButton>
                  <MenuIcon  style={{ color:'white' }} />
                </IconButton>
                </Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </span>
        </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}