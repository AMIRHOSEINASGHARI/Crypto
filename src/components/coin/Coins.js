import React from 'react';

//styles
import styles from './Coin.module.css';


const Coins = (props) => {
    const {name , image , current_price , price_change_percentage_1h_in_currency , total_volume} = props.coinData

    return (
        <div className={styles.coinContainer}>
            <div className={styles.coinImageSection}>
                <img src={image} alt="coin image" />
                <p>{name}</p>
            </div>
            <div className={styles.currentPrice}>
                <p>Current price:</p>
                <span>$ {current_price.toLocaleString()}</span>
            </div>
            <div className={styles.lastUpdate}>
                <p>Last 1hour update:</p>
                <span className={price_change_percentage_1h_in_currency>0 ? styles.green : styles.red}>{price_change_percentage_1h_in_currency.toFixed(2)} %</span>
            </div>
            <div className={styles.totalVolume}>
                <p>Total volue:</p>
                <span>$ {total_volume.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Coins;