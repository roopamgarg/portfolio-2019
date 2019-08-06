import React from "react";
import forker from '../assets/images/forker-half.jpg'

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
    </div>
)
}