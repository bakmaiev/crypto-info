import axios from 'axios';

export class CoingeckoAPI {
  #BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets';

  async getCoins() {
    try {
      return axios.get(
        `${
          this.#BASE_URL
        }?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
