class Container extends React.Component {
  
    submitPhoto() {
     const image = this.camera.captureImage()
     doSomethingWithImage(image)
    }

    render() {
        return(
         <div>
           <Camera ref={(camera) => {this.camera = camera }} />
           </div>
           )
           }
        }