import React, { Component } from 'react';
import './App.css';
// import Layout from './hoc/Layout/Layout';
// import Filter from './containers/Filter/Filter';
import Products from './containers/Products/Products';
import data from './data.json';
import Cart from './containers/Cart/Cart';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      sweets: data.sweetDeli,
      category: '',
      sort: '',
      cartItems: []
    }
  }

  addToCart = product => {
    console.log(product);
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems: cartItems });
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
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="Lo más natural" products={this.state.products} />
        <Featured />
        <Products addToCart={this.addToCart} heading="Un dulce gusto, en minutos" products={this.state.sweets} />
        <Cart cartItems={this.state.cartItems} />
        <Footer />
      </Router>
    );
  }
}

export default App;
