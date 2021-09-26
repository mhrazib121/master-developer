import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Team.css';

const Team = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);
    /* Button Handel */
    const handelAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-9">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            developers.map(developer => <Developer key={developer.id} developer={developer} handelAddToCart={handelAddToCart}></Developer>)
                        }
                    </div>
                </div>
                <div className="col-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Team;