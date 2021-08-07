import React from "react";
import { NavLink } from "react-router-dom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Card = (props) => {
    console.log(props);
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cards">
                        <div className="card">
                            <Zoom>
                                <img src={props.src} className="card-img-top" alt="Random_Image" />
                            </Zoom>
                                <div className="card-body">     
                                    <NavLink className="artist-group" to="/card-data">{props.group}</NavLink>        
                                    <p className="price-data">{props.price}</p>                
                                </div>
                                <div className="card-text"><p>{props.title}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;