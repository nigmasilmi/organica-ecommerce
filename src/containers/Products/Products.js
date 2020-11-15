import React, { Component } from 'react';
import { ProductsContainer, ProductWrapper, ProductsHeading, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDsc, ProductPrice, ProductBtn } from './ProductElements';
import formatCurrency from "../../helpers/formatCurrency";

// import classes from './Products.module.css';
// import ShopItemBar from '../../UI/ShopItemBar/ShopItemBar';

class Products extends Component {

    render() {

        return (
            <ProductsContainer>
                <ProductsHeading>
                    {this.props.heading}
                </ProductsHeading>
                <ProductWrapper>
                    {this.props.products.map((product) => (
                        <ProductCard key={product._id}>
                            <ProductImg src={product.image} alt={product["image-credits"]} />
                            <ProductInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductDsc>{product.description}</ProductDsc>
                                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                            </ProductInfo>
                            <ProductBtn onClick={(product) => this.props.addToCart(product)}>Añadir a la cesta</ProductBtn>
                        </ProductCard>
                    ))}
                </ProductWrapper>
            </ProductsContainer>

            // <div>
            //     <ul className={classes.Products}>
            //         {this.props.products.map((product) => (
            //             <li key={product._id}>
            //                 <div className={classes.ProductItem}>
            //                     <a href={`#${product._id}`}>
            //                         <img src={product.image} alt={product["image-credits"]}></img>
            //                         <p>{product.title}</p>
            //                     </a>
            //                     <div className={classes.ProductPrice}>
            //                         <div>{formatCurrency(product.price)}</div>
            //                     </div>
            //                     <div className={classes.ShopBar} >
            //                         <ShopItemBar clicked={() => this.props.addToCart(product)} />
            //                     </div>
            //                 </div>
            //             </li>
            //         ))}
            //     </ul>
            // </div>
        )
    }
}


export default Products;

