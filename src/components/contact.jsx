import React from "react";
import Tilt from "react-tilt";

export default ({content,setHeader}) => (
  <div className={`contact show-${content}`}>
    
    
  <div  style={{padding:"1rem"}} onClick={setHeader}>
    <div className="icon back"></div>
    </div>
   <div>
       <div className="contact__links">

       <a href="#"><i class="fab fa-github-square"></i></a>
       <a href="#"><i class="fab fa-linkedin"></i></a>
       <a href="#"><i class="fab fa-instagram"></i></a>

       </div>
       <p>You can call me on</p>
       <p className="contact__details">+91 9990-765-727</p>
       <p>or</p>
       <p className="contact__details">SEND MESSAGE</p>
   </div>

    <div></div>
  </div>
);
