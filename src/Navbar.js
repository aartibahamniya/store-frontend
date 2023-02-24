import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { category: [] };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          category: json,
        });
      });
  }

  render() {
    return (
      <div className="Header2">
        <div className="nav-bar">
          {this.state.category.map((item) => {
            return (
              <div
                key={item}
                className="nav-bar-item"
                onClick={() => {
                  this.props.setSearch(true, item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div>
          <div className="pic">
            <img
              src="https://img.freepik.com/premium-photo/happy-child-shop-with-bags-shopping-day-happiness-birthday-girl-shopping-fashion-boutique-fashion-trend-fashion-shop-little-girl-with-bunch-packages-seasonal-sale-fashion-girl-customer_474717-99432.jpg?w=2000"
              height={500}
            ></img>
            <img
              className="pic2"
              src="https://as2.ftcdn.net/v2/jpg/03/01/96/37/1000_F_301963711_7ceGnuNh2au8SEqxC21UciySiJBV5ZF2.jpg"
              height={900}
            ></img>
          </div>
          <div className="Header2-item">
            <h1>
              Beat products & <br></br>brands in our store{" "}
            </h1>
            <p>Trendy Products, Factory Prices, Excellent Service</p>
            <div>
              <button className="Header2-button">Purchase now</button>
              <button className="Header2-button">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
