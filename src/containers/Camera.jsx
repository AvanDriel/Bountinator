import React from "react";
import Webcam from 'react-webcam';

class CaptureImage extends React.Component {
    state = {
        imageData: null,
        image_name: "",
        saveImage: false
    }
    setRef = (webcam) => {
        this.webcam = webcam;
    }
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({
            imageData: imageSrc
        })

        this.props.parentCallback(imageSrc)

    }
    
        onClickSave = (e) => {
        }
        handleChange = (e) => {
            e.preventDefault();
            let imageObject = {
                image_name: this.state.image_name,
                job_id: this.PaymentResponse.job.id,
                image_date: this.state.imageData
            }
            this.PaymentResponse.saveJobImage(imageObject)
        }
        render() {
            const videoConstraints = {
                width: 1280,
                height: 720,
                facingMode: 'user'
              }
            return(
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpg"
                    width={350}
                    videoConstraints={videoConstraints}
                />
                <div className="button-container">
                    <button onClick={this.capture}>Capture Photo</button></div>
                {this.state.imageData ?
                    <div>
                        <p><img src={this.state.imageData} alt="" style={{display:"none"}}/></p>}
                        {this.state.saveImage}
                    </div>
                    : null}
            </div>
            )
        }
    }
    export default CaptureImage;
