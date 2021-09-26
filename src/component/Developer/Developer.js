import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Developer.css';

const Developer = (props) => {
    /* Destructuring */
    const { img, name, designation, age, country, salary } = props.developer;
    /* Icon */
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twIcon = <FontAwesomeIcon icon={faTwitter} />

    return (
        <div className="col">
            <div className="card h-100 shadow-lg round">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="fw-bold details">
                            <p>Name:</p>
                            <p>Designation:</p>
                            <p>Age:</p>
                            <p>Country:</p>
                            <p>Salary:</p>
                        </div>
                        <div className="details">
                            <p>{name}</p>
                            <p>{designation}</p>
                            <p>{age}</p>
                            <p>{country}</p>
                            <p>${salary}</p>
                        </div>
                    </div>
                    <div className="text-center media-icon p-3">
                        <a href="...">{fbIcon}</a>
                        <a href="...">{twIcon}</a>
                        <span></span>
                    </div>
                    {/* Add To Cart Button */}
                    <div className="text-center">
                        <button onClick={() => props.handelAddToCart(props.developer)} type="button" className="btn btn-primary">{cartIcon} Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;