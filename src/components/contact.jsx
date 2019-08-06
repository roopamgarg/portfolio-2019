import React from "react";
import Tilt from "react-tilt";
import Loader from "./lottie/index";
import InstaAnimationData from './lottie/713-instagram-icon.json'
import LinkedinAnimationData from './lottie/6879-linkedin-social-media-icon.json'
import TwitterAnimationData from './lottie/twitter.json';
import LoveAnimationData from './lottie/love-icon-animation.json';
import AeroAnimationData from './lottie/5197-arrow.json';
export default ({content,setHeader}) => (
  <div className={`contact show-${content}`}>
    
    
  <div  style={{padding:"1rem"}} onClick={setHeader}>
    <div className="icon flipped"><Loader animationData={AeroAnimationData}/></div>
    </div>
   <div>
       <div className="contact__links">
       <a href="#"><Loader animationData={InstaAnimationData}/></a>
       <a href="#"><Loader animationData={LinkedinAnimationData}/></a>

       <a href="#"><Loader animationData={TwitterAnimationData}/></a>

       </div>
       <p>You can call me on</p>
       <p className="contact__details">+91 9990-765-727</p>
       <p>or</p>
       <p className="contact__details">SEND MESSAGE</p>
       <p><Loader animationData={LoveAnimationData} width={"10rem"}/></p>
   </div>

    <div></div>
  </div>
);
