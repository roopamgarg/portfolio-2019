import React from "react";
import forker from '../assets/images/forker-half.jpg'
import readspeak from '../assets/images/readspeak-2.png'
import mt from '../assets/images/mt.png'
import forkify from '../assets/images/forkify.png'


export default () =>{
return (
    <div className="project">
        <div className="project__card">
            <div className="project__image">

                <img src={forker}/>
            </div>
            <div className="project__content">
                <div>
                <p className="project__type">Desktop Web App</p>
                <p className="project__name">GitForker</p>
                <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium doloribus quidem sed. At recusandae, atque quaerat ea molestias beatae</p>
                </div>

            </div>
        </div>
        <div className="project__card flipped">
            <div className="project__image">
                <img src={readspeak}/>
            </div>
            <div className="project__content">
                <div>
                <p className="project__type">Web App</p>
                <p className="project__name">ReadSpeak</p>
                <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium doloribus quidem sed. At recusandae, atque quaerat ea molestias beatae</p>
                </div>

            </div>
        </div>
        <div className="project__card ">
            <div className="project__image">
                <img src={mt}/>
            </div>
            <div className="project__content">
                <div>
                <p className="project__type">Web App</p>
                <p className="project__name">Minitroika</p>
                <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium doloribus quidem sed. At recusandae, atque quaerat ea molestias beatae</p>
                </div>

            </div>
        </div>
        <div className="project__card flipped">
            <div className="project__image">
                <img src={forkify}/>
            </div>
            <div className="project__content">
                <div>
                <p className="project__type">Desktop Web App</p>
                <p className="project__name">Forkify</p>
                <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium doloribus quidem sed. At recusandae, atque quaerat ea molestias beatae</p>
                </div>

            </div>
        </div>
    </div>
)
}