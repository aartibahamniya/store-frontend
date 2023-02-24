import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import React, { useState } from "react";
import SearchList from "./SearchList";
import Form from "./form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: false,
      serachItem: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }
   
  setSearch = (val, val2) => {
    this.setState({
      search: val,
      serachItem: val2,
    });
  };

  render() {
    return (
      <div>
        <Header setSearch={this.setSearch} />
        <Form />
        {this.state.search === true ? (
          <SearchList serachItem={this.state.serachItem} />
        ) : (
          <>
            <Navbar setSearch={this.setSearch} />
            <ProductList />
          </>
        )}
      </div>
    );
  }
}

export default App;
