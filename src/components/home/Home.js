import React, { useEffect, useState } from 'react';
import Coins from '../coin/Coins';

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
                coins.map(coin => <Coins key={coin.id} coinData={coin} />)
            }
        </div>
    );
};

export default Home;