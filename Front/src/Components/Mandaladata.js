import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Mandaladata = () => {
    const [ModalIsOPen,setModalIsOPen] = useState(false);
    const [image,setImage] = useState();
    const [crop,setCrop] = useState({ aspect: 16 / 9 });
    const [src,selectFile] = useState();
    const [result,setResult] = useState();
    const HandleFileChange = (e) => {
        selectFile(URL.createObjectURL(e.target.files[0]));
        }
    function getCroppedImg() {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
      
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        setResult(base64Image);
    }

    return (
        <div className="container">
            <div className="row custom-manda">
                <p className="custom-mandala1">Data Props from above Button Click</p>
                <p className="custom-mandala2">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                <div>
                    <button type="button" className="btn btn-primary" onClick={()=>setModalIsOPen(true)}>Order Customised Mandala</button>
                    <Modal isOpen={ModalIsOPen}>
                        <input type="file" accept="image/*" onChange={HandleFileChange} />
                        {src && <div> <ReactCrop className="for-cropimage" src={src} onImageLoaded={setImage} crop={crop} onChange={setCrop} /><button className="btn btn-primary" onClick={getCroppedImg}>Crop Image</button></div>}
                        {result && <div><img src={result} alt="Cropped" className="img-fluid" /> </div>}
                        <div>
                            <button className="btn btn-danger" onClick={() => setModalIsOPen(false)}>Close</button>
                        </div>
                    </Modal>
                    <input type="text" placeholder="Please Enter Size" className="custom-mandalainput" />
                </div>
            </div>
        </div>
    );
};

export default Mandaladata;