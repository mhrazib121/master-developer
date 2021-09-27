import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    /* Icon */
    const user = <FontAwesomeIcon icon={faUser} />

    const { cart } = props;
    let totalCost = 0;
    for (const developer of cart) {
        totalCost = totalCost + developer.salary;
    }
    return (
        <div className="sticky-top text-center">
            <h4>{user} Developer Added: {props.cart.length}</h4>
            <h4>Total Cost: ${totalCost}</h4>
            {
                props.cart.map(developer => <h4 className="name-color" key={developer.id}>{developer.name}</h4>)
            }
            <button type="button" className="btn btn-success">Buy Now</button>
        </div>
    );
};

export default Cart;