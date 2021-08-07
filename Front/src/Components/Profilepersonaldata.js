import React from 'react'

const Profilepersonaldata = () => {
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="personal-data">
                        <div className="personaldata-header">Genre</div><hr className="horizontal-line1"/>
                            <div className="personal-data1">
                                <button className="genre-buttons">Abstract</button>
                                <button className="genre-buttons">Potrait</button>
                                <button className="genre-buttons">Landscape</button>
                                <button className="genre-buttons">Fantastic Art</button>
                                <button className="genre-buttons">Realism</button>
                                <button className="genre-buttons">Painting</button>
                            </div>                    
                        </div>
                        <div className="personal-data2">
                            <p className="personal-dataabout">ABOUT ME</p>
                            <p className="personal-datapara">I am a Professional Artist from Jodhpur, Rajasthan (India) and I have a dream to sale my artwork of painting to the gentleman 
                            soul of our esteemed society and make full of charity for mankind, animals and nature mother through the amount, which I will 
                            receive from my sale of my painting forever.</p>
                        </div>
                        <div className="personal-data3">
                            <p className="personal-datahome">HOME/CONTACT</p>
                            <div>COUNTRY</div>
                            <div>E-MAIL</div>
                            <div>CITY</div>
                            <div>LANGUAGES</div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Profilepersonaldata;