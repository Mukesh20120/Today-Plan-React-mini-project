import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Plan from './plan'
import React, { Component } from "react";

class App extends Component {
   state ={
  items: [],
  text:""
   }
  handlechange = e => {
    this.setState({ text: e.target.value })
  }
  handleadd = e => {
    if (this.state.text !== "") {
      const item = [...this.state.items, this.state.text];
      this.setState({ items: item, text: "" });
    }
  }
  handledelete =id => {
    const temp = [...this.state.items];
    const newitem = temp.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: newitem });
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center"> Today Plan </h1>
            <div className="container-fluid my-5">
              <div className="row">
                <div className="col-sm-9">
                  <input type="text" className="form-control" placeholder="write your task" value={this.state.text} onChange={this.handlechange} />
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-warning px-5 fw-bold" onClick={this.handleadd}>Add</button>
                </div>
              </div>
              <div className="container">
                <ul className="list-unstyle row m-5">
                  {
                    this.state.items.map((value, i)=>{
                      return <Plan key={i} id={i} value={value} helper={this.handledelete} />
                    })
                     }
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
