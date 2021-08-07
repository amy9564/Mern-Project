import React from "react";
import Homemerchandise from "./Components/Homemerchandise";
import Homeartwork from "./Components/Homeartwork";
import Contact from "./Components/Contact";
import Homeandroid from "./Components/Homeandroid";
import Homehead from "./Components/Homehead";

const Home = () => {
    
    return (
        <div>
            <Homehead />
            < Homemerchandise />
            < Homeartwork />
            < Contact />
            < Homeandroid />    
        </div>
            
    )
};

export default Home;