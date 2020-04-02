import React, { Component } from "react";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

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
    let canvas = document.getElementById("myCanvas")
    let ctx = canvas.getContext("2d")
    ctx.font = "100px Ariel"
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.textAlign = "center"; 

    ctx.fillText("Most Wanted!!",308,110)
    ctx.fillText("$ " + x, 308,400)
    ctx.fillText(this.state.value, 308,208)

  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    return (
      <div className="homepage">
        <h1>Bountinator</h1>
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
                <small id="checkboxHelp" className="form-text text-muted pl-2">Accept user agreement</small>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col"></div>
        </div>
        <div className="row pt-5 align-items-center justify-content-md-center">
          <div className="col"></div>
          <div className="col">
            <canvas id="myCanvas" width="618" height="618" style={{ border: "1px solid #d3d3d3"}}>
              Your browser does not support the canvas element.
</canvas>
          </div>
          <div className="col"></div>
        </div>
      </div>

    );
  }
}
export default Homepage;
