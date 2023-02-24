import { Component } from "react";

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: true,
      noResultFound: false,
      allProduct: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        let result = [];

        for (let i = 0; i < json.length; i++) {
          if (
            json[i].title
              .toLowerCase()
              .split(" ")
              .includes(this.props.serachItem.toLowerCase()) ||
            json[i].category == this.props.serachItem.toLowerCase()
          ) {
            result.push(json[i]);
          }
        }

        this.setState({
          allProduct: json,
          product: result,
          loading: false,
          noResultFound: result.length === 0,
        });
      });
  }

  componentDidUpdate(prevState,prevProps) {
      console.log("componentDidUpdate",prevProps)
      if(this.props.serachItem !== prevProps.serachItem){
      console.log("<<<<<<<<<<<<<<<<<<")
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Searching Item : {this.props.serachItem}</h1>
          <div className="grid-container">
            {this.state.noResultFound ? <h1>no result found</h1> : null}
            {this.state.loading ? (
              <h2>loading..</h2>
            ) : (
              this.state.product.map(function (item) {
                return (
                  <div key={item.id} className="card" style={{ width: 300 }}>
                    <img
                      className="card-img-top"
                      width={300}
                      height={300}
                      src={item.image}
                    ></img>
                    <div className="card-body">
                      <div className="price">${item.price}</div>
                      <div className="card-text">{item.title}</div>
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
