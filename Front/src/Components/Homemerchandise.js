import React from 'react';
import { NavLink } from "react-router-dom";

const Homemerchandise = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="merchandise-header">Merchandise</div>
                        <div className="container merchandise-section">
                            <div className="row">
                                <div className="col-12 col-md-4 ">
                                    <div className="head1">
                                        <img className="logo-image" src="https://dl.dropboxusercontent.com/s/moj1qs8lnj3x432/tshirt.jpg?dl=0" alt="Random_Image" />
                                        <NavLink className="hyper-text" to="/t-shirts">T-Shirts</NavLink>
                                    </div>
                                    <div className="head2">
                                        <img className="logo-image" src="https://dl.dropboxusercontent.com/s/3p3u8pzfhixyth0/painting1.jpg?dl=0" alt="Random_Image" />
                                        <NavLink className="hyper-text" to="/painting">Painting</NavLink>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="head1">
                                        <img className="logo-image" src="https://dl.dropboxusercontent.com/s/gftwymr7pnmj5lk/gifts.jpg?dl=0" alt="Random_Image" />
                                        <NavLink className="hyper-text" to="/gifts">Gifts</NavLink>
                                    </div>
                                    <div className="head2">
                                        <img className="logo-image" src="https://dl.dropboxusercontent.com/s/0pvc0t011l6t620/bookmarks.jpg?dl=0" alt="Random_Image" />
                                        <NavLink className="hyper-text" to="/bookmarks" >Bookmarks</NavLink>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="head3">
                                        <img className="logo-image" src="https://dl.dropboxusercontent.com/s/gftwymr7pnmj5lk/gifts.jpg?dl=0" alt="Random_Image" />
                                        <NavLink className="hyper-text" to="/crafts" >Crafts</NavLink>
                                    </div>
                                    <div className="head3">
                                        <img className="logo-image" src="https://dl.dropboxusercontent.com/s/zode7oljwoso9ev/skins.jpg?dl=0" alt="Random_Image" />
                                        <NavLink className="hyper-text" to="/skins" >Skins</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
            </div>
        </div>
    )
}

export default Homemerchandise
