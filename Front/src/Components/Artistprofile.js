import React from 'react';
import { useState } from 'react';
import Profilepersonaldata from './Profilepersonaldata';
import Profileartworksdata from "./Profileartworksdata.js";
import Profilegroupsdata from "./Profilegroupsdata.js";
import Profilenetworkdata from "./Profilenetworkdata.js";
import Profilephotosdata from "./Profilephotosdata.js";
import { NavLink } from 'react-router-dom';
import { FcManager , FcBookmark , FcGenealogy , FcAssistant , FcStackOfPhotos} from "react-icons/fc";

const Artistprofile = () => {
    const [link,setLink] = useState();
    const ProfileComponent = (e) => {
        setLink(e.target.name); 
        };
    return (
        <div>
            <div className="container-fluid profile-section">
                <div className="row">
                    <div className="col-12 col-md-9 leftside-profile">
                        <div className="">
                            <img className ="profile-image" src="https://dl.dropboxusercontent.com/s/0pvc0t011l6t620/bookmarks.jpg?dl=0" alt="Random_image" />
                        </div>
                        <div className="">
                            <img className="profile-logoimage" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Random_image" />
                            <div className="artist-details">
                                <h2 className="details-name">Artistt Name</h2>
                                <div className="container">
                                    <div className="artist-details1">
                                        <p>Artist</p>
                                        <p>City Name</p>
                                        <p>Country</p>
                                    </div>
                                </div>
                                <div className="artist-description">
                                    <p>Artist DEscription</p>
                                </div>
                            </div>
                            <div className="artist-social">
                                <div className="artist-social1">
                                    <p className="">Followers</p>
                                    <p className="">Following</p>
                                </div>
                                <div className="artist-social2">
                                    <NavLink to="/" >Share</NavLink>
                                    <NavLink to="/" >Message</NavLink>
                                </div>
                            </div>                      
                        </div>
                        <div className="artist-options">
                            <div className="artist-options1">
                                <button className="artist-options2 mx-3" name="profile-data" onClick={ProfileComponent} ><span><FcManager /></span>Profile</button>
                                <button className="artist-options2 mx-3" name="profile-artworks" onClick={ProfileComponent}><span><FcBookmark /></span>ARTWORKS</button>
                                <button className="artist-options2 mx-3" name="profile-network" onClick={ProfileComponent}><span><FcGenealogy /></span>NETWORK</button>
                                <button className="artist-options2 mx-3" name="profile-groups" onClick={ProfileComponent}><span><FcAssistant /></span>GROUPS</button>
                                <button className="artist-options2 mx-3" name="profile-photos" onClick={ProfileComponent}><span><FcStackOfPhotos /></span>PHOTOS</button>
                            </div>
                            <div className="calling-personaldata">
                                {(!link) ? <Profilepersonaldata /> : null }
                                {(link === "profile-data") ? <Profilepersonaldata /> : null }
                                {(link === "profile-artworks") ? <Profileartworksdata /> : null }
                                {(link === "profile-network") ? <Profilegroupsdata /> : null }
                                {(link === "profile-groups") ? <Profilenetworkdata /> : null }
                                {(link === "profile-photos") ? <Profilephotosdata /> : null }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>Contains Data</div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Artistprofile
