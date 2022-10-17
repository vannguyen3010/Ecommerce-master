import React from 'react';
import Products from '../../pages/Products';
import './index.scss';

function Home(props) {
    return (
        <div>
            <div className="bgr">
                <div className="bgr__intro">
                    <h3>NEW SEASON ARRIVALS</h3>
                    <p>CHECK OUT ALL TRENDS</p>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;
