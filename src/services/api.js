import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h';

const getCoins = async () => {
    const api = await axios.get(`${BASE_URL}`);
    return api.data;
}

export default getCoins;