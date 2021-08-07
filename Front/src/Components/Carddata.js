import React from "react";
import { NavLink } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";

const Carddata = (props) => {
    console.log(props);
   
    return (
        <div>
            <div className="container-fluid">
                <div className="row carddata-component">
                    <div className="col-12 col-md-6 carddata-component1">
                        <GlassMagnifier className="carddata-image"  imageSrc={props.location.state.merchan.img_src} imageAlt="Example" square={true}/>
                            <div className="carddata8">Customization</div>
                                <div className="carddata7">
                                    <div>Get This Artwork in custom size</div>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <input type="number"/>
                                            </div>
                                            <div className="col-sm-2">
                                                <div>INCHES</div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div>Enter width Needed</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <input type="number"/>
                                            </div>
                                            <div className="col-sm-2">
                                                <div>INCHES</div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div>Enter height Needed</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p>This quote is for unframed artwork. Once you click 'Confirm Order' we will create new product in your size. You can then select framing options or add it to cart/wishlist.</p>
                                        </div>
                                        <div>
                                            <NavLink className="" to="" >Get/Refresh a Quote</NavLink>
                                            <NavLink className="" to="" >Confirm Order</NavLink>
                                        </div>
                                </div> 
                                <div className="carddata8">Specification</div>
                                    <div className="carddata7">
                                        <div className="row">
                                            <div className="col-md-3 card-data1">
                                                <p>SKU :</p>
                                                <p>Availability:</p>
                                                <p>Quality</p>
                                                <p>Size :</p>
                                                <p>Medium:</p>
                                                <p>Surface :</p>
                                                <p>Artist:</p>
                                                <p>Retuen Policy:</p>
                                                <p>Customizable:</p>
                                                <p>Artist Sign and Certificate</p>
                                            </div>
                                            <div className="col-md-3 card-data2">
                                                <p>52Figure40_3232</p>
                                                <div>Delivered within 7-10 days when ordered as Unframed, and 10-14 days when ordered as Framed.</div>
                                                <p>Museum Quality - 100% Handpainted</p>
                                                <p>32in Width X 32in Height.</p>
                                                <p>Oil & Acrylic Colors</p>
                                                <p>Rolled Canvas</p>
                                                <p>Community Artists Group</p>
                                                <p>15 Days if ordered as Unframed. Not applicable if ordered as Framed or in Custom Size, or if delivery is outside India.</p>
                                                <p>Yes, this art can be customized to any Size.</p>
                                                <p>Not provided as Art is from Community/Dealer.</p>
                                            </div>
                                        </div>
                                        <div className="carddata8">Description</div>
                                            <p>This is an exquisite handmade painting - created by our experienced artist, and completed to perfection. Product Code-52Figure40_3232</p>
                                            <div>Additional Info</div>
                                            <p>Please <NavLink className="" to="/addtional-info">Click here</NavLink>to get more information regarding</p>
                                            <ol>
                                                <li>Return, Exchange & Cancellation Policy</li>
                                                <li>Shipping & Delivery</li>
                                                <li>Care Instructions</li>
                                                <li>Package Details / Quantity</li>
                                                <li>Installation</li>
                                                <li>Warranty & Guarantee Information</li>
                                                <li>Country of Origin</li>
                                                <li>Manufacturer / Packager / Importer Details</li>
                                                <li>Generic Name</li>
                                                <li>Payment related information</li>
                                                <li>Customer Care Details, Raising Ticket & Grievance Officer</li>
                                                <li>Terms & Conditions</li>
                                            </ol>
                                    </div>
                            </div>
                    <div className="col-12 col-md-6 carddata-component2">
                        <h2 className="carddata1">{props.location.state.merchan.name}</h2>
                            <div className="carddata2">Size in Centimetres : {props.location.state.merchan.width}</div>
                            <div className="carddata3">Customizable : Yes. Please call or email us with size you need.</div>
                            <button className="carddata4">{props.location.state.merchan.group}</button>
                            <div className="carddata5">MRP {props.location.state.merchan.price}<span className="carddata6">Incl. all taxes</span></div>
                            <div>Select a frame</div>
                            <button className="carddata8" >ADD To CART</button>       
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Carddata;