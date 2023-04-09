import { CoingeckoAPI } from './js/coingeckoAPI';
import { createMarkup } from './js/createMarkup';

const coingeckoAPI = new CoingeckoAPI();

const searchFormEl = document.querySelector('.header-form');
const searchInputEl = document.querySelector('.header-form__input');
const infoListEl = document.querySelector('.info-list');

const getRanks = async () => {
  try {
    const seekedCoin = searchInputEl.value.trim();
    const response = await coingeckoAPI.getCoins();
    const arrayOfCoins = response.data;
    console.log(arrayOfCoins);
  } catch (err) {
    console.log;
  }
};

const handleSearchFormEl = e => {
  e.preventDefault();
  getRanks();
};

searchFormEl.addEventListener('submit', handleSearchFormEl);
