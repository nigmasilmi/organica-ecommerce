import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Filter from './containers/Filter/Filter';
import Products from './containers/Products/Products';
import data from './data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      category: '',
      sort: ''
    }
  }


  sortFilter = (event) => {
    console.log(event.target.value);
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : a._id < b._id
                ? 1
                : -1
        ),
    }));
  }

  categFilter = (event) => {
    if (event.target.value === '') {
      this.setState({ products: data.products })
    } else {
      this.setState({
        category: event.target.value,
        products: data.products.filter(product => {
          return product.categoria === event.target.value;
        })
      });
    }
  }


  render() {
    return (
      <div className="App">
        <Layout>
          <Filter
            count={this.state.products.length}
            size={this.state.size}
            exSortFilter={this.sortFilter}
            exCategFilter={this.categFilter}
          />

          <Products products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
