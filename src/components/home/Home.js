import React, { useEffect, useState } from 'react';
import Coins from '../coin/Coins';
import Loader from '../loader/Loader';

//api
import getCoins from '../../services/api';

const Home = () => {
    const [coins , setCoins] = useState([]);

    useEffect(() => {
      const fetchCoins = async () => {
      setCoins(await getCoins())
    }
    fetchCoins()
    }, [])

    return (
        <div>
            {
                coins.length ?
                coins.map(coin => <Coins key={coin.id} coinData={coin} />) :
                <Loader />
            }
        </div>
    );
};

export default Home;