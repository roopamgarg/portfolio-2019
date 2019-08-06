import React, { useState }  from "react";
import Tilt from "react-tilt";
import Menu from "./menu";
import Contact from './contact'
import Project from './projects';
export default () =>{
  const [content, setcontent] = useState("header");
  const [headerAnimation, setAnimation] = useState("animate-left");
  const setMenu = () =>{
    setcontent("menu")
  }
  const setHeader = () =>{
    if(content === "menu"){
      setAnimation("animate-right")
    }else if(content === "contact"){
      setAnimation("animate-left")
    }
    setcontent("header")
  }
  const setContact = () =>{
    setcontent("contact")
  }
  
  return (
    <div style={{display:"flex",overflow:"auto"}} >
      <Menu content={content} setHeader={setHeader}/>
    <header className={`section-header ${headerAnimation} show-${content}`}>
      <div class="header__menu ">
        <p>Menu</p>
        <div className="header__menu--yellow" onClick={setMenu}>
          <p>Menu</p>
        </div>
      </div>
      
      <div class="header">
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: "100%", width: "100%" }}
        >
            <h1 class="header__heading">Roopam Garg</h1>
            <p class="header__para">Web Developer</p>
        </Tilt>
        
    
     
      </div>
      
      
      <div class="header__menu right">
        <p>Content</p>
        <div className="header__menu--blue" onClick={setContact}>
          <p>Content</p>
        </div>
      </div>
    </header>
    <Contact content={content} setHeader={setHeader}/>
    </div>
  );
  
} 