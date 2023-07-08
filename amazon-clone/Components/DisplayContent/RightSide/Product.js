import React from 'react';
import Rating from '@mui/material/Rating';
import "./RightSide.css";
import getSymbolFromCurrency from 'currency-symbol-map'
function Product(props) {
    return (
        <div className="products">
        <div className="product__image">
            <img src={props.definition.image} height="280px"/>
        </div>
        <div className="product__name">
         {props.definition.name}
        </div>
        <div className="product__rating">
        <Rating name="read-only" value={4} style={{fontSize:"20px"}} readOnly />
            {props.definition.rating}
        </div>
        <div className="product__price">
        {getSymbolFromCurrency('INR')}  
            {props.definition.price } {/* convert to inr*/}
        </div>
        </div>
    );
}

export default Product;