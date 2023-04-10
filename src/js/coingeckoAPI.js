import axios from 'axios';

export class CoincapAPI {
  // #BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets';
  #BASE_URL = 'https://api.coincap.io/v2/assets';

  async getCoins() {
    try {
      return axios.get(`${this.#BASE_URL}`);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
