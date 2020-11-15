import React, { Component } from 'react';
import { CartWrapper, CartHeader, CartBody } from './CartElements';

class Cart extends Component {
    render() {
        const cartItems = this.props.cartItems;
        return (

            <CartWrapper>
                <CartHeader>
                    {cartItems.length === 0 ? 'La cesta está vacía' : `Hay ${cartItems.length} artículos en la cesta`}
                </CartHeader>

                <CartBody></CartBody>
            </CartWrapper>
            // <div>
            //     {cartItems.length === 0 ?
            //         <div className="Cart CartHeader">El carrito está vacío</div> :
            //         <div className="Cart CartHeader">Tienes {cartItems.length} artículos en el carrito</div>}
            // </div>
        )
    }
}

export default Cart;
