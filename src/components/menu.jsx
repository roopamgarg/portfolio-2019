import React from "react";
import Tilt from "react-tilt";

export default ({content,setHeader}) => (
  <div className={`menu show-${content}`}>
    <div></div>
    <ul className="menu__links">
        <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">Skills</Tilt>
        <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">Project</Tilt>
        <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">About</Tilt>
        <Tilt className="Tilt"
        options={{ max: 25 }}
        style={{ height: "100%", width: "100%" }} className="menu__link">Contact</Tilt>
         
    </ul>
  <div  style={{padding:"1rem"}} onClick={setHeader}>
    <div className="icon back flipped"></div>
    </div>
   
  </div>
);
