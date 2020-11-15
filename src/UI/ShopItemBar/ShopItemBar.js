import React from 'react';
import classes from './ShopItemBar.module.css';


const shopItemBar = (props) => {
    return (
        <div className={classes.ShopItemBar}>
            <div onClick={props.clicked} className={classes.ItemBg}>
                <i style={{ color: '#83A638' }} className="fas fa-shopping-cart"></i>
            </div>

        </div>
    )
}

export default shopItemBar;
