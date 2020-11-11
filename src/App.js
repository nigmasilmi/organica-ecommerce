import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import data from './data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: '',
      sort: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Products products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
