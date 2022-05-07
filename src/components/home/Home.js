import React, { useEffect, useState } from 'react';
import Coins from '../coin/Coins';
import Loader from '../loader/Loader';

//api
import getCoins from '../../services/api';

const Home = () => {
    const [coins , setCoins] = useState([]);
    const [inputValue , setInputValue] = useState('')


    useEffect(() => {
      const fetchCoins = async () => {
      setCoins(await getCoins())
    }
    fetchCoins()
    }, [])

    const changeHandler = e => {
        setInputValue(e.target.value)
    }

    const searchCoins = coins.filter(item => item.name.toLowerCase().includes(inputValue.toLocaleLowerCase()));


    return (
        <div>
            <div>
                <input type="text" placeholder='Search coin here...' value={inputValue} onChange={changeHandler} />
            </div>
            <div>
                {
                    searchCoins.length ?
                    searchCoins.map(coin => <Coins key={coin.id} coinData={coin} />) :
                    <Loader />
                }
            </div>
        </div>
    );
};

export default Home;