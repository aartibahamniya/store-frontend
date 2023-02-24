import React, { Component } from "react";

class ProductList extends Component {
  constructor() {
    super();
    this.state = { product: [], loading: true };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ product: json, loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          "loading.."
        ) : (
          <div className="grid-container">
            {this.state.product.map(function (item) {
              return (
                <div key={item.id} className="card" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    width={300} height={300}
                    src={item.image}
                  ></img>
                  <div className="card-body">
                    <div className="price">${item.price}</div>
                    <div className="card-text">{item.title}</div>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default ProductList;
