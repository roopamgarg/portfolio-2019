import React from "react";
import Tilt from "react-tilt";
import { Link } from 'react-router-dom'
import AeroAnimationData from './lottie/5197-arrow.json';
import Loader from "./lottie/index";

export default ({content,setHeader}) => (
  <div className={`menu show-${content}`}>
    <div></div>
    <ul className="menu__links">
       <Link > <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">Skills</Tilt></Link>
        <Link to="/projects"> <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">Project</Tilt> </Link> 
        <Link> <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">About</Tilt> </Link> 
        <Link> <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">Contact</Tilt> </Link> 
         
    </ul>
  <div  style={{padding:"1rem"}} onClick={setHeader}>
  <div className="icon"><Loader animationData={AeroAnimationData}/></div>
    </div>
   
  </div>
);
