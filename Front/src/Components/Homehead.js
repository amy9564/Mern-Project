import React from 'react';
import ReactPlayer from "react-player";

const Homehead = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <img className="start-backgroundimage" src="https://dl.dropboxusercontent.com/s/wrmx8hvqg7zlao4/pexel.jpg?dl=0" alt="Random_Image" />
                        <div className="row">
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6 home-videopart">
                                <ReactPlayer width="500px" height="250px" controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution" />
                            </div>
                        </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="heading1"></div>
                        <div className="container illustration">
                            <div className="row">
                                <div className="col-md-6 illustration1">
                                    <div className="illustration2">Beautiful React <span className="illustration3">Templates for you Templates for you Templates for you Templates for you Templates for you</span></div>
                                        <div className="ilustration4">Data2</div>
                                        <div className="illustration5">Data3</div>
                                    </div>
                                    <div className="col-md-6 illustration-image">
                                        <img className="illustration1-image" src="https://source.unsplash.com/1600x900/?artwork" alt="Random_Image" />   
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Homehead ;
