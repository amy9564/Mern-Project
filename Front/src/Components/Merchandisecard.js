import React , { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";

const Merchandisecard = () => {
    const [state,setState] = useState([]);
    const [showperpage , setShowPerPage ] = useState(6);
    const [pagination , setPaginaton ] = useState({
        start : 0,
        end : showperpage
    });
    const onPaginationChange = (start,end) => {
        setPaginaton({start:start,end:end})
    }
    useEffect(() => {
        async function getdata()  
        {
            const res = await axios.get("/tshirts")
            .then(res=>res.data)
            .catch(err=>console.log(err));
             setState(res);
        }
        getdata();
    },[]);

    const handleclick1 = async () => {
        try 
        {
            const res = await axios.get("/t-shirts")
            .then(res=>res.data)
            .catch(err=>console.log(err));
             setState(res);   
        } catch (error) {
            console.log(error);       
        }
    };

    const handleclick2 = async () => {
        try {
            const res = await axios.get("/lounge-tshirts")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handlesizebutton1 = async () => {
        console.log("click hua");
        try {
            const res = await axios.get("/XS")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            console.log(res);
            setState(res);
            console.log(state);
        } catch (error) {
            console.log(error);         
        }
    };

    const handlesizebutton2 = async () => {
        try {
            const res = await axios.get("/S")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
            console.log(state);
        } catch (error) {
            console.log(error);
        }
    };
      
    const handlesizebutton3 = async () => {
        try {
            const res = await axios.get("/M")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handlesizebutton4 = async () => {
        try {
            const res = await axios.get("/L")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handlesizebutton5 = async () => {
        try {
            const res = await axios.get("/XL")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handlesizebutton6 = async () => {
        try {
            const res = await axios.get("/XXL")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handlesizebutton7 = async () => {
        try {
            const res = await axios.get("/XXXL")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const blackhandleInput = async () => {
        try {
            const res = await axios.get("/black")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const yellowhandleInput = async () => {
        try {
            const res = await axios.get("/yellow")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const greenhandleInput = async () => {
        try {
            const res = await axios.get("/green")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const bluehandleInput = async () => {
        try {
            const res = await axios.get("/blue")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    const whitehandleInput = async () => {
        try {
            const res = await axios.get("/white")
            .then(res=>res.data)
            .catch(err=>console.log(err));
            setState(res);
        } catch (error) {
            console.log(error);
        }
    };

    
    return (
            <div className="container-fluid">
                <div className="row merchandise-page">
                    <div className="col-md-2 merchandise-sidebar">
                        <div className="row ">
                            <ul className="merchandise-sidebarlist">
                                <div className="merchandise-xyz">
                                    <div className="merchandise-sidebarcatageory">
                                        <span className="sidebarcatageory-header">T Shirts</span>
                                            <ul className="sidebar-catageorylist">
                                                <li><button className="sidebarcatageory-button" onClick={handleclick1} ><input type="checkbox" value="Tshirts" /><span className="sidebar-text">Tshirts</span></button></li>
                                                <li><button className="sidebarcatageory-button" onClick={handleclick2} ><input type="checkbox" value="Tshirts" /><span className="sidebar-text">Lounge Tshirts</span></button></li>    
                                            </ul>
                                    </div>
                                </div>
                            </ul>
                            <ul className="merchandise-sidebarlist">
                                <div className="merchandise-xyz">
                                    <div className="merchandise-sidebarcatageory">
                                        <span className="sidebarcatageory-header">Artworks</span>
                                            <ul className="sidebar-catageorylist">
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Abstract Art</span></button></li>
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Modern Art</span></button></li>
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Pop Art</span></button></li>
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Contemporary Art</span></button></li>
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Impressionism Art</span></button></li>
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Surrealism Art</span></button></li>
                                                <li><button className="sidebarcatageory-button"><input type="checkbox" value="brand"/><span className="sidebar-text">Fantasy Art</span></button></li>
                                            </ul>
                                    </div>
                                </div>
                            </ul>
                            <ul className="merchandise-sidebarlist">
                                <div className="merchandise-xyz">
                                    <span className="sidebarcatageory-header">Size</span>
                                        <ul className="sidebar-catageorylist">
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton1} ><input type="checkbox" value="extra-small" /><span className="sidebar-text">Extra Small</span></button></li>
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton2} ><input type="checkbox" value="small" /><span className="sidebar-text">Small</span></button></li>
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton3} ><input type="checkbox" value="medium" /><span className="sidebar-text">Medium</span></button></li>
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton4} ><input type="checkbox" value="large" /><span className="sidebar-text">Large</span></button></li>
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton5} ><input type="checkbox" value="extra-large" /><span className="sidebar-text">Extra-Large</span></button></li>
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton6} ><input type="checkbox" value="extra extra-large" /><span className="sidebar-text">Extra Extra-Large</span></button></li>
                                            <li><button className="sidebarcatageory-button" onClick={handlesizebutton7} ><input type="checkbox" value="trible extra-small" /><span className="sidebar-text">Trible Extra-Large</span></button></li>
                                        </ul>
                                </div>
                            </ul>
                            <ul className="merchandise-sidebarlist">
                                <div className="merchandise-xyz">
                                    <span className="sidebarcatageory-header">Color</span>
                                        <ul className="sidebar-catageorylist">
                                            <li className="color-catageory"><input type="checkbox" className="blackbutton-input" /><span className="sidebar-checkbox"></span><button className="black-button" onClick={blackhandleInput}><span className="sidebar-text">Black</span></button></li>
                                            <li className="color-catageory"><input type="checkbox" className="blackbutton-input"/><span className="sidebar-checkbox"></span><button className="black-button" onClick={yellowhandleInput} ><span className="sidebar-text">Yellow</span></button></li>
                                            <li className="color-catageory"><input type="checkbox" className="blackbutton-input" /><span className="sidebar-checkbox"></span><button className="black-button" onClick={greenhandleInput} ><span className="sidebar-text">Green</span></button></li>
                                            <li className="color-catageory"><input type="checkbox" className="blackbutton-input" /><span className="sidebar-checkbox"></span><button className="black-button" onClick={bluehandleInput} ><span className="sidebar-text">Blue</span></button></li>
                                            <li className="color-catageory"><input type="checkbox" className="blackbutton-input" /><span className="sidebar-checkbox"></span><button className="black-button" onClick={whitehandleInput} ><span className="sidebar-text">White</span></button></li>
                                        </ul>   
                                </div>    
                            </ul> 	
                        </div>
                    </div>
                    <div className="col-md-10 merchandise-data">
                        <div className="row bakchodi">
                            {state.slice(pagination.start,pagination.end).map((merchan,index)=>(
                                <div className="merchandise-card" key={index}>
                                    <div className="merchandise-imagebody">
                                        <NavLink to={{ pathname: "/card-data" , state: { merchan: merchan }}}><img className="merchandise-image" id="img" src={merchan.img_src} alt="Card_cap" /></NavLink>
                                    </div>
                                    <div className="merchandise-body">
                                        <NavLink to={{ pathname: "/card-data" , state: { merchan: merchan }}} className="merchandise-title" ><h5 >{merchan.name}</h5></NavLink>
                                        <p className="merchandise-size">{merchan.width}</p>
                                        <p className="merchandise-group">By:<span className="merchandise-groupname">{merchan.group}</span></p>
                                        <p className="merchandise-price">{merchan.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                    <Pagination showperpage={showperpage} onPaginationChange={onPaginationChange} total={state.length} />
                </div>
            </div>
    )
};

export default Merchandisecard;