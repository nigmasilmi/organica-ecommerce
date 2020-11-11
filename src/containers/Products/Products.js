import React, { Component } from 'react';
import formatCurrency from "../../helpers/formatCurrency";

import classes from './Products.module.css';
import Button from '../../UI/Button/Button';

class Products extends Component {
    addToCartHandler = () => {
        console.log('added to cart');
    }
    render() {

        return (
            <div>
                <ul className={classes.Products}>
                    {this.props.products.map((product) => (
                        <li key={product._id}>
                            <div className={classes.ProductItem}>
                                <a href={`#${product._id}`}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className={classes.ProductPrice}>
                                    <div>{formatCurrency(product.price)}</div>
                                    <Button
                                        btnType="Success"
                                        disabled={false}
                                        onClick={this.addToCartHandler}
                                    >
                                        Añadir al carrito
                                </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default Products;

