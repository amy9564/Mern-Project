import React from 'react';
import { useState } from 'react';
import Card from "./Card";
import Mandaladata from "./Mandaladata";
import Sketch from "./Sketch";
import Artworkdata from "./Artworkdata";
import Painting from "./Painting";
import SketchBdata from "./SketchBdata";

const Homeartwork = () => {
    const [count,setCount] = useState(); 
    const InputData = (event) => {
        setCount(event.target.value);
    };
    return (
        <div>
            <div className="container-fluid">
                 <div className="row">
                    <div className="artwork-header">Orignal Artworks</div>
                        <div className="buttons-class">
                            <button type="button" class="btn btn-primary artbutton" value="mandala" onClick={InputData}>Mandala</button>
                            <button type="button" class="btn btn-primary artbutton" value="sketch" onClick={InputData}>Sketch</button>
                            <button type="button" class="btn btn-primary artbutton" value="painting" onClick={InputData}>Painting</button>
                            <button type="button" class="btn btn-primary artbutton" value="other" onClick={InputData}>Other</button>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="row orignal-artwork"> 
                                        <div className="col-12 col-md-3">
                                            <div className="head1">
                                                {(!count) ? <Card src={Artworkdata[0].src} title={Artworkdata[0].title} group={Artworkdata[0].group} price={Artworkdata[0].price } /> : null }
                                                {(count === "mandala") ? <Card src={Artworkdata[0].src} title={Artworkdata[0].title} group={Artworkdata[0].group} price={Artworkdata[0].price } /> : null }
                                                {(count === "sketch") ? <Card src={Sketch[0].src} title={Sketch[0].title} group={Sketch[0].group} price={Sketch[0].price } /> : null }
                                                {(count === "painting") ? <Card src={Painting[0].src} title={Painting[0].title} group={Painting[0].group} price={Painting[0].price } /> : null }
                                                {(count === "other") ? <Card /> : null }
                                            </div>
                                            <div className="head2">
                                                {(!count) ? <Card src={Artworkdata[1].src} title={Artworkdata[1].title} group={Artworkdata[1].group} price={Artworkdata[1].price } /> : null } 
                                                {(count === "mandala") ? <Card src={Artworkdata[1].src} title={Artworkdata[1].title} group={Artworkdata[1].group} price={Artworkdata[1].price } /> : null }
                                                {(count === "sketch") ? <Card src={Sketch[1].src} title={Sketch[1].title} group={Sketch[1].group} price={Sketch[1].price } /> : null }
                                                {(count === "painting") ? <Card src={Painting[1].src} title={Painting[1].title} group={Painting[1].group} price={Painting[1].price } /> : null }
                                                {(count === "other") ? <Card /> : null }    
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="head1">
                                                {(!count) ? <Card src={Artworkdata[2].src} title={Artworkdata[2].title} group={Artworkdata[2].group} price={Artworkdata[2].price } /> : null }                            
                                                {(count === "mandala") ? <Card src={Artworkdata[2].src} title={Artworkdata[2].title} group={Artworkdata[2].group} price={Artworkdata[2].price } /> : null }
                                                {(count === "sketch") ? <Card src={Sketch[2].src} title={Sketch[2].title} group={Sketch[2].group} price={Sketch[2].price } /> : null }
                                                {(count === "painting") ? <Card src={Painting[2].src} title={Painting[2].title} group={Painting[2].group} price={Painting[2].price } /> : null }
                                                {(count === "other") ? <Card /> : null }    
                                            </div>
                                            <div className="head2">
                                                {(!count) ? <Card src={Artworkdata[3].src} title={Artworkdata[3].title} group={Artworkdata[3].group} price={Artworkdata[3].price } /> : null }    
                                                {(count === "mandala") ? <Card src={Artworkdata[3].src} title={Artworkdata[3].title} group={Artworkdata[3].group} price={Artworkdata[3].price } /> : null }
                                                {(count === "sketch") ? <Card src={Sketch[3].src} title={Sketch[3].title} group={Sketch[3].group} price={Sketch[3].price } /> : null }
                                                {(count === "painting") ? <Card src={Painting[3].src} title={Painting[3].title} group={Painting[3].group} price={Painting[3].price } /> : null }
                                                {(count === "other") ? <Card /> : null }    
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="head1">
                                                {(!count) ? <Card src={Artworkdata[4].src} title={Artworkdata[4].title} group={Artworkdata[4].group} price={Artworkdata[4].price } /> : null }                            
                                                {(count === "mandala") ? <Card src={Artworkdata[4].src} title={Artworkdata[4].title} group={Artworkdata[4].group} price={Artworkdata[4].price } /> : null }
                                                {(count === "sketch") ? <Card src={Sketch[4].src} title={Sketch[4].title} group={Sketch[4].group} price={Sketch[4].price } /> : null }
                                                {(count === "painting") ? <Card src={Painting[4].src} title={Painting[4].title} group={Painting[4].group} price={Painting[4].price } /> : null }
                                                {(count === "other") ? <Card /> : null }    
                                            </div>
                                            <div className="head2">
                                                {(!count) ? <Card src={Artworkdata[5].src} title={Artworkdata[5].title} group={Artworkdata[5].group} price={Artworkdata[5].price } /> : null }    
                                                {(count === "mandala") ? <Card src={Artworkdata[5].src} title={Artworkdata[5].title} group={Artworkdata[5].group} price={Artworkdata[5].price } /> : null }
                                                {(count === "sketch") ? <Card src={Sketch[5].src} title={Sketch[5].title} group={Sketch[5].group} price={Sketch[5].price } /> : null }
                                                {(count === "painting") ? <Card src={Painting[5].src} title={Painting[5].title} group={Painting[5].group} price={Painting[5].price } /> : null }
                                                {(count === "other") ? <Card /> : null }    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 custom-mandala">
                                    <div>
                                        {(count === "mandala") ? <Mandaladata /> : null }
                                        {(count === "sketch") ? <SketchBdata /> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Homeartwork
