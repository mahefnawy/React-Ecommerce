import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Internals
import './index.css';

class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return(
      <div className="cart">
        <div className="all-cart-items">
          <h1 id="cart-title">My Cart</h1>
          <div className="cart-items">
            {map(this.props.products, (product, index) => (
              <div className="cart-item" key={`${product.id}${index}`}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <img src={product.img} className="card-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="total-price">
          <hr />
          <h5 id="total-price">Total price:</h5>
        </div>
      </div>
    )
  }
}

export default Cart;
