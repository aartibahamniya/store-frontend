import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      description: "",
      image_url: "",
      price: "",
    };
  }

  sendData = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/product-add", {
      method: "POST",
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
      });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            ></input>
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              className="form-control"
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            ></input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            ></input>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              name="image_url"
              className="form-control"
              onChange={(e) => {
                this.setState({ image_url: e.target.value });
              }}
            ></input>
          </div>
          <div className="form-group">
            <lable>Price</lable>
            <input
              type="number"
              name="price"
              className="form-control"
              onChange={(e) => {
                this.setState({ price: e.target.value });
              }}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.sendData}
          >
            Add Product
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
