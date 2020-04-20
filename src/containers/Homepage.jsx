import React, { Component } from "react";
import Background from '../img/poster.jpg'
import CaptureImage from '../containers/Camera'



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', image: new Image(), imageSrc: '' };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    let WantedScore = 0;
    let Name = this.state.value.toLowerCase()
    for (let i = 0; i < this.state.value.length; i++) {
      WantedScore += Name.charCodeAt(i)

    }
    WantedScore /= this.state.value.length
    WantedScore *= 170
    WantedScore = this.numberWithCommas(Math.floor(WantedScore))
    this.setWantedScore(WantedScore)
  }
  setWantedScore(x) {
    let canvas = document.querySelector("#myCanvas")
    canvas.width = 793;
    canvas.height = 1122;
    let ctx = canvas.getContext("2d")



    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.textAlign = "center";
    var img = document.getElementById("scream");
    var img1 = document.getElementById("photo");
    img1.src = this.state.imageSrc
    img1.filter = 'sepia(100%)'
    console.log(img1)
    ctx.drawImage(img, canvas.width / 2 - 331, 10);
    ctx.drawImage(img1, canvas.width / 2 - 180, 240);
    ctx.font = "70px Viner Hand ITC"
    ctx.fillStyle = "#473301"
    ctx.fillText("$ " + x, canvas.width / 2, 530)
    ctx.fillText(this.state.value, canvas.width / 2, 250)
    // const dataUri = canvas.toDataURL();
    // img.src = dataUri


  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  printCanvas() {
  }
  test = (dataFromChild) => {
    this.state.imageSrc = dataFromChild
    console.log(this.state.imageSrc)
    return this.state.imageSrc

  }
  render() {

    return (
      <div>
      <div className="homepage">
        <CaptureImage parentCallback={this.test}></CaptureImage>
          <h1>Bountinator</h1>
          <img id="scream" width="220" height="277" style={{ display: "none"}} src={Background} alt="The Scream"></img>
          <img id="photo" width="220" height="277" style={{ display: "none", filter: "sepia(100%)" }} src={Background} alt="photo"></img>
          <div className="row pt-5 align-items-center justify-content-md-center">
            <div className="col"></div>
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="NameField">Write down your name:</label>
                  <input type="text" name="name" className="form-control" id="NameField" placeholder="Name" value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="FormCheckBox"></input>
                  <small id="checkboxHelp" className="form-text text-muted pl-2">Accept user agreement<div style={{ fontSize: "4px" }}>*All your data will belong to us</div></small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col">
              <button onClick={this.printCanvas}>
                Print Poster
</button>
            </div>
          </div>
          <div className="row align-items-center justify-content-md-center">
            <div className="col" style={{ width: "100%", textAlign: "center" }}>
              <canvas id="myCanvas" style={{ border: "1px solid black", paddingLeft: "0", paddingRight: "0", marginLeft: "auto", display: "inline" }} >
                Your browser does not support the canvas element.
</canvas>
            </div>
          </div>
      </div>
      <img src={this.state.image} alt=""></img>
      </div>
      

    );
  }
}
export default Homepage;
