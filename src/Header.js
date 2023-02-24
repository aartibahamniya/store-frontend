import { render } from "@testing-library/react";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",

    };
  }

  render() {
    return (
      <div className="Header-container">
        <div className="logo">
          <img
            className="img"
            height="50"
            onClick={() => this.props.setSearch(false, "")}
            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/logo.svg"
          ></img>
          <div className="search-box-group">
            <input
              className="input"
              placeholder="Search"
              onChange={(e) => {
                this.setState({ inputValue: e.target.value });
              }}
            ></input>
            <button
              className="search-btn"
              onClick={(e) => {
                this.props.setSearch(true, this.state.inputValue);
              }}
            >
              <img
                src="https://img.icons8.com/color/1x/search.png"
                width={30}
              ></img>
            </button>
          </div>
        </div>

        <div className="Header">
          <div className="Header-bt">
            <button className="HeaderButton-item" >Sign In</button>
          </div>
          <div className="Header-bt">
         <a href="#formD"> <button className="HeaderButton-item"
          
          >Add ProductList</button></a>
          </div>
          <div className="Header-bt">
            <button className="HeaderButton-item">My Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
