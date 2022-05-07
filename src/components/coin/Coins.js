import React from 'react';

const Coins = (props) => {
    const {name , image , current_price , price_change_percentage_1h_in_currency , total_volume} = props.coinData

    return (
        <div>
            <div>
                <img src={image} alt="coin image" />
                <p>{name}</p>
            </div>
            <div>
                <p>Current price:</p>
                <span>$ {current_price.toLocaleString()}</span>
            </div>
            <div>
                <p>Last 1hour update:</p>
                <span>{price_change_percentage_1h_in_currency.toFixed(2)} %</span>
            </div>
            <div>
                <p>Total volue:</p>
                <span>$ {total_volume.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Coins;