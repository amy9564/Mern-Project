import React from 'react';
import { NavLink } from "react-router-dom";

const Homeandroid = () => {
    return (
        <div>
            <div className="container-fluid android-app">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="mobile-logoimage">
                            <img className="mobile-logoimage1" src="https://dl.dropboxusercontent.com/s/5t0hxxhb6wcazsm/mobile.png?dl=0" alt="Random_Image" />
                        </div>   
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="android-heading">Pyare Kids</h2>
                        <div className="android-heading1">
                            <h3 className="android-heading2">Download Mobile App</h3>
                            <p className="android-heading3">All your healthcare needs are now in your pocket! With the Treatopedia app,<br/> you can now tend to all your and your family’s medical requirements <br/> from anywhere and at any time.</p>
                        </div>
                        <div>
                            <NavLink to="#"><img src="https://dl.dropboxusercontent.com/s/zihux7vhnodb63u/playstore1.png?dl=0" alt="Randoms_Image" width="200" height="77"/></NavLink>
                            <img src="https://dl.dropboxusercontent.com/s/58jnhp117qi07qj/playstore2.png?dl=0" alt="Randoms_Image" width="200" height="77"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeandroid
