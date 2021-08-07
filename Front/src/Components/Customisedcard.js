import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Customisedcard = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="customised-card">
                    <Zoom>
                        <img src={props.src} className="customised-cardtopimage" alt="Random_image" /> 
                    </Zoom>
                <div className="card-bodydw">
                    <p className="card-textds">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
            </div>
        </div>
    );
};

export default Customisedcard;