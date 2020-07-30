import React,{ useState } from 'react';
import ReactPlayer from 'react-player'
import { FEATURE_DATA } from "./FeatureData";

// css
import './Home.css';
import './../App.css';

// material-ui
import { Container, Typography, Grid, Button} from '@material-ui/core';

// component
import Newsletter from './main/Newsletter';

// images
import btn_apple from './../images/btn_apple.png'
import btn_google from './../images/btn_google.png'
import phone from './../images/Iphone-Mockup.png'
import video from "./../images/video.mp4";
import AvatarMove from './../images/AvatarMove.png'


export default function Home() {
  const [data, setData] = useState(FEATURE_DATA);

  const Features = (props) => (
    <>
      <div className="items">
        <div className={props.css}>
          <div className="featureIcon">
            <img src={props.icon} alt={props.icon} />
          </div>
          <Typography variant="h5" className="itemTitle">{props.title}</Typography>
          <Typography className="itemDetail">{props.content}</Typography>
        </div>
      </div>
    </>
  );

  return (
    <div className="wrapper">

      <div className="heroWrap">
        <div className="center">

          <Grid container>
            
            <Grid item xs={12} sm={6} className="leftImage">
              <div className="svgBox">
                <svg className="svgBee" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 416">
                <defs>
                  <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 270 416">
                    <image width="270" height="416" xlinkHref="data:image/png;base64,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"/>
                  </pattern>
                  <clipPath id="clip-path">
                    <ellipse id="Ellipse_41" data-name="Ellipse 41" cx="25.5" cy="25" rx="25.5" ry="25" transform="translate(0 0.224)" fill="#673bba"/>
                  </clipPath>
                  <clipPath id="clip-path-2">
                    <ellipse id="Ellipse_41-2" data-name="Ellipse 41" cx="25" cy="25.5" rx="25" ry="25.5" transform="translate(0.448 -0.316)" fill="#673bba"/>
                  </clipPath>
                  <clipPath id="clip-path-3">
                    <ellipse id="Ellipse_41-3" data-name="Ellipse 41" cx="25.5" cy="25" rx="25.5" ry="25" transform="translate(0.112 0.224)" fill="#673bba"/>
                  </clipPath>
                  <clipPath id="clip-path-4">
                    <circle id="Ellipse_41-4" data-name="Ellipse 41" cx="25.5" cy="25.5" r="25.5" transform="translate(0.112 -0.495)" fill="#673bba"/>
                  </clipPath>
                  <clipPath id="clip-path-5">
                    <circle id="Ellipse_41-5" data-name="Ellipse 41" cx="25.5" cy="25.5" r="25.5" transform="translate(0 -0.495)" fill="#673bba"/>
                  </clipPath>
                  <clipPath id="clip-path-6">
                    <circle id="Ellipse_41-6" data-name="Ellipse 41" cx="25.5" cy="25.5" r="25.5" transform="translate(-0.336 -0.316)" fill="#673bba"/>
                  </clipPath>
                  <clipPath id="clip">
                    <use xlinkHref="#fill"/>
                  </clipPath>
                  <clipPath id="clip-2">
                    <use xlinkHref="#fill-2"/>
                  </clipPath>
                </defs>
                <g id="Group_1486" data-name="Group 1486" transform="translate(-175 -171)">
                  <rect id="Avatar" width="220" height="340" transform="translate(226 247)" fill="url(#pattern)"/>
                  <g id="Group_1755" data-name="Group 1755" transform="translate(175 292.776)">
                    <g id="Mask_Group_6" data-name="Mask Group 6" clip-path="url(#clip-path)">
                      <g id="Group_1652" data-name="Group 1652" transform="translate(0)">
                        <g id="Group_1757" data-name="Group 1757" transform="translate(0 0)">
                          <ellipse id="Ellipse_43" data-name="Ellipse 43" cx="25.5" cy="25" rx="25.5" ry="25" transform="translate(0 0.224)" fill="#3bbab5"/>
                          <g id="Group_1522" data-name="Group 1522" transform="translate(9.213 9.213)">
                            <rect id="Rectangle_228" data-name="Rectangle 228" width="32.246" height="32.246" fill="none" opacity="0.315"/>
                            <g id="Rectangle_229" data-name="Rectangle 229" transform="translate(3.455)" fill="none" stroke="#fff" stroke-width="2.818">
                              <rect width="25.336" height="32.246" rx="4.227" stroke="none"/>
                              <rect x="1.409" y="1.409" width="22.518" height="29.428" rx="2.818" fill="none"/>
                            </g>
                            <g id="Group_1521" data-name="Group 1521" transform="translate(8.637 7.637)">
                              <g id="Ellipse_26" data-name="Ellipse 26" transform="translate(0)">
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="1.152" cy="1.152" r="1.152" fill="none"/>
                                <circle id="Ellipse_2" data-name="Ellipse 2" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                              <g id="Rectangle_230" data-name="Rectangle 230" transform="translate(4.607)">
                                <rect id="Rectangle_126" data-name="Rectangle 126" width="10.365" height="2.303" rx="1.152" fill="#fff"/>
                                <rect id="Rectangle_127" data-name="Rectangle 127" width="8.061" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                              <g id="Rectangle_427" data-name="Rectangle 427" transform="translate(0)">
                                <rect id="Rectangle_128" data-name="Rectangle 128" width="2.303" height="2.303" rx="1.152" fill="#fff"/>
                                <rect id="Rectangle_129" data-name="Rectangle 129" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                            </g>
                            <g id="Group_1521-2" data-name="Group 1521" transform="translate(8.637 14.547)">
                              <g id="Ellipse_26-2" data-name="Ellipse 26" transform="translate(0)">
                                <circle id="Ellipse_3" data-name="Ellipse 3" cx="1.152" cy="1.152" r="1.152" fill="none"/>
                                <circle id="Ellipse_4" data-name="Ellipse 4" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                              <g id="Rectangle_230-2" data-name="Rectangle 230" transform="translate(4.607)">
                                <rect id="Rectangle_130" data-name="Rectangle 130" width="10.365" height="2.303" rx="1.152" fill="#fff"/>
                                <rect id="Rectangle_131" data-name="Rectangle 131" width="8.061" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                              <g id="Rectangle_427-2" data-name="Rectangle 427" transform="translate(0)">
                                <rect id="Rectangle_132" data-name="Rectangle 132" width="2.303" height="2.303" rx="1.152" fill="#fff"/>
                                <rect id="Rectangle_133" data-name="Rectangle 133" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                            </g>
                            <g id="Group_1521-3" data-name="Group 1521" transform="translate(8.637 21.456)">
                              <g id="Ellipse_26-3" data-name="Ellipse 26" transform="translate(0 0)">
                                <circle id="Ellipse_5" data-name="Ellipse 5" cx="1.152" cy="1.152" r="1.152" fill="none"/>
                                <circle id="Ellipse_6" data-name="Ellipse 6" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                              <g id="Rectangle_230-3" data-name="Rectangle 230" transform="translate(4.607 0)">
                                <rect id="Rectangle_134" data-name="Rectangle 134" width="10.365" height="2.303" rx="1.152" fill="#fff"/>
                                <rect id="Rectangle_135" data-name="Rectangle 135" width="8.061" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                              <g id="Rectangle_427-3" data-name="Rectangle 427" transform="translate(0 0)">
                                <rect id="Rectangle_136" data-name="Rectangle 136" width="2.303" height="2.303" rx="1.152" fill="#fff"/>
                                <rect id="Rectangle_137" data-name="Rectangle 137" transform="translate(1.152 1.152)" fill="none" stroke="#fff" stroke-width="2.818"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_1755-2" data-name="Group 1755" transform="translate(310.67 171)">
                    <ellipse id="Ellipse_41-8" data-name="Ellipse 41" cx="25" cy="25.5" rx="25" ry="25.5" transform="translate(0.33 0)" fill="#673bba"/>
                    <g id="Group_1531" data-name="Group 1531" transform="translate(8.99 8.99)">
                      <g id="Icon" transform="translate(0 0)">
                        <rect id="Rectangle_213" data-name="Rectangle 213" width="32" height="33" transform="translate(0.34 0.01)" fill="none" opacity="0.315"/>
                      </g>
                      <g id="Group_1530" data-name="Group 1530" transform="translate(0.262 0.262)">
                        <g id="Rectangle_237" data-name="Rectangle 237" transform="translate(0 3.87)" fill="none" stroke="#fff" stroke-width="2">
                          <rect width="31.74" height="27.916" rx="3" stroke="none"/>
                          <rect x="1" y="1" width="29.74" height="25.916" rx="2" fill="none"/>
                        </g>
                        <g id="Path_2373" data-name="Path 2373" transform="translate(8.12 22.43)">
                          <path id="Path_2096" data-name="Path 2096" d="M1.157,0H14.341a1.157,1.157,0,1,1,0,2.313H1.157A1.157,1.157,0,1,1,1.157,0Z" transform="translate(0)" fill="#fff"/>
                          <path id="Path_2097" data-name="Path 2097" d="M1.157,0H14.343a1.157,1.157,0,0,1,0,2.313H1.157A1.157,1.157,0,0,1,1.157,0Z" transform="translate(0)" fill="#fff"/>
                        </g>
                        <g id="Rectangle_240" data-name="Rectangle 240" transform="translate(8.12 16.171)">
                          <rect id="Rectangle_118" data-name="Rectangle 118" width="15.499" height="2.313" rx="1" fill="#fff"/>
                          <rect id="Rectangle_119" data-name="Rectangle 119" width="13.186" transform="translate(1.157 1.157)" fill="none" stroke="#fff" stroke-width="2"/>
                        </g>
                        <g id="Rectangle_241" data-name="Rectangle 241" transform="translate(0 9.911)">
                          <rect id="Rectangle_120" data-name="Rectangle 120" width="31.74" height="2.313" rx="1" fill="#fff"/>
                          <rect id="Rectangle_121" data-name="Rectangle 121" width="29.427" transform="translate(1.157 1.157)" fill="none" stroke="#fff" stroke-width="2"/>
                        </g>
                        <g id="Rectangle_242" data-name="Rectangle 242" transform="translate(9.002 10.836) rotate(-90)">
                          <rect id="Rectangle_122" data-name="Rectangle 122" width="10.836" height="2.313" rx="1" fill="#fff"/>
                          <rect id="Rectangle_123" data-name="Rectangle 123" width="8.523" transform="translate(1.157 1.157)" fill="none" stroke="#fff" stroke-width="2"/>
                        </g>
                        <g id="Rectangle_243" data-name="Rectangle 243" transform="translate(19.592 10.836) rotate(-90)">
                          <rect id="Rectangle_124" data-name="Rectangle 124" width="10.836" height="2.313" rx="1" fill="#fff"/>
                          <rect id="Rectangle_125" data-name="Rectangle 125" width="8.523" transform="translate(1.157 1.157)" fill="none" stroke="#fff" stroke-width="2"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_1755-3" data-name="Group 1755" transform="translate(418.552 214.316)">
                    <g id="Mask_Group_7" data-name="Mask Group 7" clip-path="url(#clip-path-2)">
                      <g id="Group_1758" data-name="Group 1758">
                        <g id="Group_1656" data-name="Group 1656" transform="translate(0 0)">
                          <ellipse id="Ellipse_43-2" data-name="Ellipse 43" cx="25" cy="25.5" rx="25" ry="25.5" transform="translate(0.448 -0.316)" fill="#ecf42d"/>
                        </g>
                        <g id="Group_1524" data-name="Group 1524" transform="translate(9.213 9.213)">
                          <g id="Path_2143" data-name="Path 2143" transform="translate(0 10.765)">
                            <path id="Path_2108" data-name="Path 2108" d="M3.583,1.5h25.08c1.979,0,3.583,9.443,3.583,11.14V19.9a3.359,3.359,0,0,1-3.583,3.078H3.583A3.359,3.359,0,0,1,0,19.9V12.639C0,10.939,1.6,1.5,3.583,1.5Z" transform="translate(0 -1.499)" fill="none"/>
                            <path id="Path_2109" data-name="Path 2109" d="M4.356,3.8a18.9,18.9,0,0,0-1.294,4.12A31.972,31.972,0,0,0,2.3,12.64V19.9c0,.316.5.775,1.28.775h25.08c.781,0,1.28-.459,1.28-.775V12.64a31.972,31.972,0,0,0-.759-4.716A18.9,18.9,0,0,0,27.89,3.8H4.356M3.583,1.5h25.08c1.979,0,3.583,9.44,3.583,11.14V19.9a3.359,3.359,0,0,1-3.583,3.078H3.583A3.359,3.359,0,0,1,0,19.9V12.64C0,10.94,1.6,1.5,3.583,1.5Z" transform="translate(0 -1.499)" fill="#fff"/>
                          </g>
                          <g id="Group_1521-4" data-name="Group 1521" transform="translate(6.791 17.221)">
                            <g id="Ellipse_26-4" data-name="Ellipse 26" transform="translate(0 0)" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.361" cy="1.361" r="1.361" stroke="none"/>
                              <circle cx="1.361" cy="1.361" r="0.048" fill="none"/>
                            </g>
                            <g id="Rectangle_230-4" data-name="Rectangle 230" transform="translate(5.444 0)" fill="#fff" stroke="#fff" stroke-width="2.818">
                              <rect id="fill" width="12.249" height="2.722" rx="1.361" stroke="none"/>
                              <path d="M0,1.3133724927902222h12.248781204223633M10.839690327644348,0v2.722463369369507M12.248781204223633,1.4090908765792847h-12.248781204223633M1.4090908765792847,2.722463369369507v-2.722463369369507" fill="none" clip-path="url(#clip)"/>
                            </g>
                          </g>
                          <g id="Group_1521-5" data-name="Group 1521" transform="translate(6.791 21.983)">
                            <g id="Ellipse_26-5" data-name="Ellipse 26" transform="translate(0 0)" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.361" cy="1.361" r="1.361" stroke="none"/>
                              <circle cx="1.361" cy="1.361" r="0.048" fill="none"/>
                            </g>
                            <g id="Rectangle_230-5" data-name="Rectangle 230" transform="translate(5.444 0)" fill="#fff" stroke="#fff" stroke-width="2.818">
                              <rect id="fill-2" width="12.249" height="2.722" rx="1.361" stroke="none"/>
                              <path d="M0,1.3133724927902222h12.248781204223633M10.839690327644348,0v2.722463369369507M12.248781204223633,1.4090908765792847h-12.248781204223633M1.4090908765792847,2.722463369369507v-2.722463369369507" fill="none" clip-path="url(#clip-2)"/>
                            </g>
                          </g>
                          <g id="Group_1523" data-name="Group 1523" transform="translate(6.158 0)">
                            <path id="Path_2140" data-name="Path 2140" d="M3757.878,2656.676s-3.066-15.252,10.223-15.349" transform="translate(-3757.573 -2641.327)" fill="none" stroke="#fff" stroke-width="2.818"/>
                            <path id="Path_2142" data-name="Path 2142" d="M3767.8,2656.676s3.064-15.252-10.224-15.349" transform="translate(-3747.786 -2641.327)" fill="none" stroke="#fff" stroke-width="2.818"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_1755-4" data-name="Group 1755" transform="translate(443.888 292.776)">
                    <g id="Mask_Group_3" data-name="Mask Group 3" clip-path="url(#clip-path-3)">
                      <g id="Group_1734" data-name="Group 1734">
                        <g id="Group_1760" data-name="Group 1760" transform="translate(0 0)">
                          <ellipse id="Ellipse_69" data-name="Ellipse 69" cx="25.5" cy="25" rx="25.5" ry="25" transform="translate(0.112 0.224)" fill="#ba3b89"/>
                          <g id="Group_1624" data-name="Group 1624" transform="translate(9.213 9.213)">
                            <g id="Group_1623" data-name="Group 1623">
                              <rect id="Rectangle_236" data-name="Rectangle 236" width="32.246" height="32.246" fill="none" opacity="0.315"/>
                              <g id="Ellipse_38" data-name="Ellipse 38" fill="none" stroke="#fff" stroke-width="2.818">
                                <circle cx="16.123" cy="16.123" r="16.123" stroke="none"/>
                                <circle cx="16.123" cy="16.123" r="14.714" fill="none"/>
                              </g>
                              <g id="Group_1540" data-name="Group 1540" transform="translate(11.716 6.676)">
                                <path id="Path_2155" data-name="Path 2155" d="M2.68-4.256a2.088,2.088,0,0,0-.647-1.555A5.786,5.786,0,0,0-.148-6.954a6.992,6.992,0,0,1-3.109-1.7,3.749,3.749,0,0,1-.978-2.663,3.855,3.855,0,0,1,.954-2.7A4.069,4.069,0,0,1-.648-15.267v-2.2h1.5v2.207a3.865,3.865,0,0,1,2.618,1.414A5.081,5.081,0,0,1,4.4-10.6H2.562a3.473,3.473,0,0,0-.676-2.246,2.21,2.21,0,0,0-1.813-.833,2.507,2.507,0,0,0-1.825.616,2.293,2.293,0,0,0-.632,1.719,2.1,2.1,0,0,0,.668,1.631,6.147,6.147,0,0,0,2.2,1.1A9.226,9.226,0,0,1,2.866-7.52,3.84,3.84,0,0,1,4.132-6.131a4.015,4.015,0,0,1,.4,1.854A3.717,3.717,0,0,1,3.516-1.55,4.513,4.513,0,0,1,.665-.325V1.59H-.82V-.325A4.324,4.324,0,0,1-3.743-1.654,4.483,4.483,0,0,1-4.8-4.8h1.855a2.95,2.95,0,0,0,.732,2.151A2.764,2.764,0,0,0-.14-1.9a3.109,3.109,0,0,0,2.068-.632A2.133,2.133,0,0,0,2.68-4.256Z" transform="translate(4.808 17.463)" fill="#fff"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_1755-5" data-name="Group 1755" transform="translate(443.888 383.495)">
                    <g id="Mask_Group_4" data-name="Mask Group 4" clip-path="url(#clip-path-4)">
                      <g id="Group_1731" data-name="Group 1731" transform="translate(0)">
                        <g id="Group_1759" data-name="Group 1759" transform="translate(0 0)">
                          <circle id="Ellipse_68" data-name="Ellipse 68" cx="25.5" cy="25.5" r="25.5" transform="translate(0.112 -0.495)" fill="#ba3b3b"/>
                          <g id="Group_1535" data-name="Group 1535" transform="translate(9.213 9.213)">
                            <g id="Group_1532" data-name="Group 1532" transform="translate(0)">
                              <rect id="Rectangle_214" data-name="Rectangle 214" width="32.246" height="32.246" fill="none" opacity="0.315"/>
                            </g>
                            <g id="Group_1732" data-name="Group 1732" transform="translate(2.303)">
                              <g id="Union_10" data-name="Union 10">
                                <path id="Path_2102" data-name="Path 2102" d="M0,25.406c0-2.817,3.439-5.235,8.353-6.284C6.018,16.258,3.812,12.849,3.812,10.2A10.073,10.073,0,0,1,13.757,0,10.073,10.073,0,0,1,23.7,10.2c0,2.649-2.2,6.044-4.522,8.9,4.969,1.036,8.459,3.472,8.459,6.306,0,3.777-6.188,6.84-13.82,6.84S0,29.184,0,25.406Z" fill="none"/>
                                <path id="Path_2103" data-name="Path 2103" d="M13.819,29.942a20.546,20.546,0,0,0,8.75-1.764c1.706-.844,2.766-1.907,2.766-2.772,0-.808-.891-1.581-1.422-1.97a13.875,13.875,0,0,0-5.2-2.082L15,20.582l2.39-2.936C19.94,14.518,21.4,11.8,21.4,10.2A7.78,7.78,0,0,0,13.757,2.3,7.779,7.779,0,0,0,6.116,10.2c0,1.61,1.466,4.333,4.023,7.47l2.381,2.921-3.685.786A13.724,13.724,0,0,0,3.7,23.454c-.522.385-1.4,1.152-1.4,1.952,0,.865,1.06,1.928,2.766,2.772a20.544,20.544,0,0,0,8.75,1.764m0,2.3C6.187,32.246,0,29.183,0,25.406c0-2.817,3.439-5.236,8.353-6.284C6.019,16.258,3.812,12.849,3.812,10.2A10.073,10.073,0,0,1,13.757,0,10.073,10.073,0,0,1,23.7,10.2c0,2.645-2.2,6.043-4.523,8.9,4.97,1.036,8.459,3.47,8.459,6.307C27.639,29.183,21.452,32.246,13.819,32.246Z" transform="translate(0 0)" fill="#fff"/>
                              </g>
                              <g id="Group_1533" data-name="Group 1533" transform="translate(4.133 0)">
                                <g id="Path_2118" data-name="Path 2118" transform="translate(5.82 5.82)">
                                  <path id="Path_2104" data-name="Path 2104" d="M4,0A4,4,0,1,1,0,4,4,4,0,0,1,4,0Z" fill="none"/>
                                  <path id="Path_2105" data-name="Path 2105" d="M4,2.3A1.7,1.7,0,1,0,5.7,4,1.7,1.7,0,0,0,4,2.3M4,0A4,4,0,1,1,0,4,4,4,0,0,1,4,0Z" transform="translate(0 0)" fill="#fff"/>
                                </g>
                                <g id="Path_2119" data-name="Path 2119" transform="translate(0 0)">
                                  <path id="Path_2106" data-name="Path 2106" d="M9.822,0a9.822,9.822,0,0,1,9.822,9.822c0,5.424-9.822,14.134-9.822,14.134S0,15.246,0,9.822A9.822,9.822,0,0,1,9.822,0Z" transform="translate(0 0)" fill="none"/>
                                  <path id="Path_2107" data-name="Path 2107" d="M9.822,2.3A7.527,7.527,0,0,0,2.3,9.822c0,.759.421,3.016,4.322,7.562,1.151,1.341,2.313,2.536,3.2,3.4.874-.858,2.021-2.038,3.164-3.367,3.93-4.57,4.354-6.837,4.354-7.6A7.527,7.527,0,0,0,9.822,2.3m0-2.3a9.822,9.822,0,0,1,9.822,9.822c0,5.425-9.822,14.134-9.822,14.134S0,15.247,0,9.822A9.822,9.822,0,0,1,9.822,0Z" transform="translate(0 0)" fill="#fff"/>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_1755-6" data-name="Group 1755" transform="translate(175 383.495)">
                    <g id="Mask_Group_5" data-name="Mask Group 5" clip-path="url(#clip-path-5)">
                      <g id="Group_1738" data-name="Group 1738" transform="translate(0)">
                        <g id="Group_1761" data-name="Group 1761" transform="translate(0 0)">
                          <g id="Group_1762" data-name="Group 1762">
                            <circle id="Ellipse_43-3" data-name="Ellipse 43" cx="25.5" cy="25.5" r="25.5" transform="translate(0 -0.495)" fill="#3b45ba"/>
                            <g id="Group_1711" data-name="Group 1711" transform="translate(9.213 9.213)">
                              <g id="Group_1708" data-name="Group 1708">
                                <g id="Group_1638" data-name="Group 1638">
                                  <rect id="Rectangle_228-2" data-name="Rectangle 228" width="32.246" height="32.246" fill="none" opacity="0.315"/>
                                  <g id="Rectangle_229-2" data-name="Rectangle 229" fill="none" stroke="#fff" stroke-width="2.818">
                                    <rect width="32.246" height="32.246" rx="4.227" stroke="none"/>
                                    <rect x="1.409" y="1.409" width="29.428" height="29.428" rx="2.818" fill="none"/>
                                  </g>
                                </g>
                              </g>
                              <g id="Group_1709" data-name="Group 1709" transform="translate(18.654 18.654)">
                                <rect id="Rectangle_161" data-name="Rectangle 161" width="5.739" height="1.435" rx="0.717" transform="translate(1.015 4.691) rotate(45)" fill="#fff"/>
                                <rect id="Rectangle_162" data-name="Rectangle 162" width="10.4" height="1.435" rx="0.717" transform="matrix(-0.5, 0.866, -0.866, -0.5, 9.674, 0.717)" fill="#fff"/>
                              </g>
                              <g id="Group_1710" data-name="Group 1710" transform="translate(4.909 3.926)">
                                <rect id="Rectangle_162-2" data-name="Rectangle 162" width="11.111" height="1.533" rx="0.766" transform="matrix(-0.5, 0.866, -0.866, -0.5, 6.883, 0.766)" fill="#fff"/>
                                <rect id="Rectangle_407" data-name="Rectangle 407" width="11.111" height="1.533" rx="0.766" transform="matrix(0.5, 0.866, -0.866, 0.5, 1.327, 0.001)" fill="#fff"/>
                              </g>
                              <g id="Rectangle_408" data-name="Rectangle 408" transform="translate(0.936 30.158) rotate(-45)" fill="#fff" stroke="#fff" stroke-width="1.409">
                                <rect width="42.217" height="1.964" rx="0.982" stroke="none"/>
                                <rect x="0.705" y="0.705" width="40.808" height="0.554" rx="0.277" fill="none"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_1755-7" data-name="Group 1755" transform="translate(200.336 214.316)">
                    <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(0)" clip-path="url(#clip-path-6)">
                      <g id="Group_1756" data-name="Group 1756">
                        <circle id="Ellipse_42" data-name="Ellipse 42" cx="25.5" cy="25.5" r="25.5" transform="translate(-0.336 -0.316)" fill="#3bba53"/>
                        <g id="Group_1516" data-name="Group 1516" transform="translate(9.213 9.213)">
                          <rect id="Rectangle_216" data-name="Rectangle 216" width="31.921" height="31.921" transform="translate(0)" fill="none" opacity="0.315"/>
                          <g id="Union_3" data-name="Union 3" transform="translate(0 0)">
                            <path id="Path_2098" data-name="Path 2098" d="M20.4,28.923a17.6,17.6,0,0,1-4.273.523C7.218,29.446,0,22.854,0,14.724S7.218,0,16.123,0,32.246,6.592,32.246,14.724A14.248,14.248,0,0,1,26.3,26.142l-.028,6.1Z" transform="translate(0 0)" fill="none"/>
                            <path id="Path_2099" data-name="Path 2099" d="M23.985,28.307,24,26.133,24,24.982l.923-.687a11.941,11.941,0,0,0,5.018-9.572c0-6.849-6.2-12.42-13.82-12.42S2.3,7.875,2.3,14.723,8.5,27.143,16.122,27.143a15.318,15.318,0,0,0,3.714-.454l.892-.223.8.453,2.457,1.389m2.285,3.938-5.876-3.322a17.6,17.6,0,0,1-4.273.523C7.218,29.446,0,22.855,0,14.723S7.218,0,16.122,0,32.245,6.592,32.245,14.723A14.248,14.248,0,0,1,26.3,26.144Z" transform="translate(0 0)" fill="#fff"/>
                          </g>
                          <g id="Group_1506" data-name="Group 1506" transform="translate(6.334 12.359)">
                            <g id="Ellipse_26-6" data-name="Ellipse 26" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.727" cy="1.727" r="1.727" stroke="none"/>
                              <circle cx="1.727" cy="1.727" r="0.318" fill="none"/>
                            </g>
                            <g id="Ellipse_27" data-name="Ellipse 27" transform="translate(16.123)" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.727" cy="1.727" r="1.727" stroke="none"/>
                              <circle cx="1.727" cy="1.727" r="0.318" fill="none"/>
                            </g>
                            <g id="Ellipse_28" data-name="Ellipse 28" transform="translate(8.061)" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.727" cy="1.727" r="1.727" stroke="none"/>
                              <circle cx="1.727" cy="1.727" r="0.318" fill="none"/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(0)" clip-path="url(#clip-path-6)">
                      <g id="Group_1756-2" data-name="Group 1756">
                        <circle id="Ellipse_42-2" data-name="Ellipse 42" cx="25.5" cy="25.5" r="25.5" transform="translate(-0.336 -0.316)" fill="#3bba53"/>
                        <g id="Group_1516-2" data-name="Group 1516" transform="translate(9.213 9.213)">
                          <rect id="Rectangle_216-2" data-name="Rectangle 216" width="31.921" height="31.921" transform="translate(0)" fill="none" opacity="0.315"/>
                          <g id="Union_3-2" data-name="Union 3" transform="translate(0 0)">
                            <path id="Path_2100" data-name="Path 2100" d="M20.4,28.923a17.6,17.6,0,0,1-4.273.523C7.218,29.446,0,22.854,0,14.724S7.218,0,16.123,0,32.246,6.592,32.246,14.724A14.248,14.248,0,0,1,26.3,26.142l-.028,6.1Z" transform="translate(0 0)" fill="none"/>
                            <path id="Path_2101" data-name="Path 2101" d="M23.985,28.307,24,26.133,24,24.982l.923-.687a11.941,11.941,0,0,0,5.018-9.572c0-6.849-6.2-12.42-13.82-12.42S2.3,7.875,2.3,14.723,8.5,27.143,16.122,27.143a15.318,15.318,0,0,0,3.714-.454l.892-.223.8.453,2.457,1.389m2.285,3.938-5.876-3.322a17.6,17.6,0,0,1-4.273.523C7.218,29.446,0,22.855,0,14.723S7.218,0,16.122,0,32.245,6.592,32.245,14.723A14.248,14.248,0,0,1,26.3,26.144Z" transform="translate(0 0)" fill="#fff"/>
                          </g>
                          <g id="Group_1506-2" data-name="Group 1506" transform="translate(6.334 12.359)">
                            <g id="Ellipse_26-7" data-name="Ellipse 26" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.727" cy="1.727" r="1.727" stroke="none"/>
                              <circle cx="1.727" cy="1.727" r="0.318" fill="none"/>
                            </g>
                            <g id="Ellipse_27-2" data-name="Ellipse 27" transform="translate(16.123)" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.727" cy="1.727" r="1.727" stroke="none"/>
                              <circle cx="1.727" cy="1.727" r="0.318" fill="none"/>
                            </g>
                            <g id="Ellipse_28-2" data-name="Ellipse 28" transform="translate(8.061)" fill="none" stroke="#fff" stroke-width="2.818">
                              <circle cx="1.727" cy="1.727" r="1.727" stroke="none"/>
                              <circle cx="1.727" cy="1.727" r="0.318" fill="none"/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} className="rightText">

              <div className="textBox">

                <div className="kovan">
                  <svg className="svgKovan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.302 34.819">
                    <g id="Group_338" data-name="Group 338" transform="translate(-79 -261.245)">
                      <path id="Path_5" data-name="Path 5" d="M464.435,3247.8l-2.56,2.66a1.448,1.448,0,0,0-.407,1.008v9.412a1.454,1.454,0,0,1-1.455,1.454h-1.558a1.454,1.454,0,0,1-1.455-1.454v-30.979a1.454,1.454,0,0,1,1.455-1.455h1.558a1.455,1.455,0,0,1,1.455,1.455v11.507a1.454,1.454,0,0,0,2.537.971l12.089-13.453a1.451,1.451,0,0,1,1.082-.48h1.506a1.455,1.455,0,0,1,1.087,2.422l-10.381,11.648a1.455,1.455,0,0,0-.071,1.848L481.2,3260a1.454,1.454,0,0,1-1.158,2.335h-1.7a1.457,1.457,0,0,1-1.156-.573l-10.543-13.834A1.454,1.454,0,0,0,464.435,3247.8Z" transform="translate(-378 -2966.738)" fill="#a53bba"/>
                      <path id="Path_6" data-name="Path 6" d="M495.2,3244.51q0-6.028-2.422-9.252a7.985,7.985,0,0,0-6.772-3.224,7.905,7.905,0,0,0-6.67,3.224q-2.43,3.224-2.5,8.95v2.49q0,5.843,2.455,9.181a8.605,8.605,0,0,0,13.465.188q2.373-3.153,2.444-9.043Zm4.444,2.188a20.974,20.974,0,0,1-1.675,8.693,12.71,12.71,0,0,1-4.75,5.669,13.072,13.072,0,0,1-7.168,1.953,12.638,12.638,0,0,1-11.905-7.577,20.1,20.1,0,0,1-1.757-8.434v-2.446a20.72,20.72,0,0,1,1.7-8.636A12.571,12.571,0,0,1,486,3228.194a13.137,13.137,0,0,1,7.179,1.967,12.678,12.678,0,0,1,4.784,5.7,21.065,21.065,0,0,1,1.675,8.692Z" transform="translate(-365.409 -2966.948)" fill="#a53bba"/>
                      <path id="Path_7" data-name="Path 7" d="M504.566,3252.423l7.965-23a1.457,1.457,0,0,1,1.375-.977h1.762a1.453,1.453,0,0,1,1.364,1.959l-11.491,30.98a1.452,1.452,0,0,1-1.364.949h-1.931a1.457,1.457,0,0,1-1.364-.949l-11.469-30.981a1.453,1.453,0,0,1,1.364-1.957h1.738a1.453,1.453,0,0,1,1.375.98l7.926,22.99A1.454,1.454,0,0,0,504.566,3252.423Z" transform="translate(-351.548 -2966.738)" fill="#a53bba"/>
                      <path id="Path_8" data-name="Path 8" d="M531.089,3262.328h-1.455a1.453,1.453,0,0,1-1.366-.955l-2.89-7.9-1.327-3.647-4.406-12.1a1.455,1.455,0,0,0-2.735,0l-4.391,12.1-1.347,3.647-2.835,7.9a1.454,1.454,0,0,1-1.369.962H505.5a1.454,1.454,0,0,1-1.36-1.973l11.827-30.968a1.456,1.456,0,0,1,1.358-.935h1.9a1.455,1.455,0,0,1,1.358.933l11.863,30.968A1.455,1.455,0,0,1,531.089,3262.328Z" transform="translate(-339.499 -2966.737)" fill="#a53bba"/>
                      <path id="Path_9" data-name="Path 9" d="M547.173,3262.338h-2.249a1.457,1.457,0,0,1-1.218-.659l-13.956-21.365a1.455,1.455,0,0,0-2.673.8v19.774a1.454,1.454,0,0,1-1.455,1.454h-1.584a1.454,1.454,0,0,1-1.455-1.454v-30.979a1.454,1.454,0,0,1,1.455-1.455h2.249a1.454,1.454,0,0,1,1.22.66l14,21.472a1.455,1.455,0,0,0,2.673-.795v-19.882a1.455,1.455,0,0,1,1.455-1.455h1.535a1.456,1.456,0,0,1,1.455,1.455v30.979A1.455,1.455,0,0,1,547.173,3262.338Z" transform="translate(-324.326 -2966.738)" fill="#a53bba"/>
                    </g>
                  </svg>
                </div>

                <div className="textDetail">
                  <Typography variant="h6" className="text" style={{paddingBottom:20}}>
                    All-in-one management solution for your smart life
                    {/* <span>for all the group management needs.</span> */}
                  </Typography>
                  <Typography variant="h6" className="text">
                  Kovan helps manage all kinds of small groups effectively and make your life easier 
                  </Typography>
                </div>

                <div className="buttons">
                  <a href="https://www.apple.com/ios/app-store/" target="_blank">
                    <img src={btn_apple} alt={"app store button"}/>
                  </a>
                  <a href="https://play.google.com/store/apps" target="_blank">
                    <img src={btn_google} alt={"google play store button"}/>
                  </a>
                </div>

              </div>{/* textBox */}
            </Grid>
          </Grid>

        </div>{/* center */}
      </div>{/* heroWrap */}

      <div className="videoWrap">
        <div className="center">
          <div className="videoContainer">
            <div className="sub_title">
              <h1>About Kovan</h1>
            </div>
            <div className="videoPlayer">
              <ReactPlayer width="100%" height="100%" url={video} controls/>
            </div>
          </div>
        </div>
      </div>{/* videoWrap */}

      <div className="featureWrap">

        <div className="center">
            
            <div className="sub_title">
              <h1 style={{color:'#A53BBA'}}>Features</h1>
            </div>

            <div className="itemBox">

              {/* <div className="featureBee">
                <img src={AvatarMove} alt={"bee"}/>
              </div> */}

              {data.map((item) => (
                <Features
                  title={item.title}
                  content={item.content}
                  css={item.css}
                  icon={item.icon}
                />
               ))}

            </div>

        </div>{/* center */}
      </div> {/* featureWrap */}


      <div className="downWrap">

        <div className="center">
            <div className="sub_title">
              <h1>Try out Kovan Today</h1>
            </div>
            <div className="downBox">
              <div className="leftBee">
                <svg className="bee" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 190 271">
                    <image id="AvatarMove" width="190" height="271" xlinkHref="data:image/png;base64,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"/>
                </svg>
              </div>
              <div class="phoneContainer">
                <img style={{width: '80%'}} src={phone} alt={"phone"}/>
              </div>
              <div className="textContainer">
                <Typography className="big">
                  <span>All-in-one management solution for your smart life</span>
                  <span>Kovan helps manage all kinds of small groups effectively and make your life easier </span>
                </Typography>
                <Typography className="small">You can download the proposal here</Typography>
                <Button 
                className="btnProposal" 
                variant="contained" 
                color="primary" 
                disableElevation
                >
                  <a className="download" href="https://kovanapp.com/Proposal_Kovan.pdf" download>
                  download
                  </a>
                </Button>
              </div>
            </div>
        </div>{/* center */}
      </div>{/* downWrap */}    
      <Newsletter />
    </div> //wrapper 
  );
}
