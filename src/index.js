import { CoincapAPI } from './js/coingeckoAPI';

const coincapAPI = new CoincapAPI();

const searchFormEl = document.querySelector('.header-form');
const searchInputEl = document.querySelector('.header-form__input');
const infoListEl = document.querySelector('.info-list');

const getRanks = async () => {
  try {
    const seekedCoin = searchInputEl.value.toLowerCase().trim();
    const response = await coincapAPI.getCoins();
    const { data } = response.data;
    data.forEach(coin => {
      if (
        seekedCoin === coin.id.toLowerCase() ||
        seekedCoin === coin.symbol.toLowerCase()
      ) {
        infoListEl.innerHTML = `<div class="info-list__item">
          <div class="info">
            <p class="info-item">
            <b>Name: ${coin.name}</b>
            </p>
            <p class="info-item">
            <b>Rank: ${coin.rank}</b>
            </p>
            <p class="info-item">
            <b>Price: ${coin.priceUsd}$</b>
            </p>
            <p class="info-item">
            <b>Market Cap: ${Math.round(coin.marketCapUsd)}$</b>
            </p>
            <p class="info-item">
            <b>Volume: ${Math.round(coin.volumeUsd24Hr)}$</b>
            </p>
          </div>
        </div>`;
      }
    });
  } catch (err) {
    console.log;
  }
};

const handleSearchFormEl = e => {
  e.preventDefault();
  getRanks();
};

searchFormEl.addEventListener('submit', handleSearchFormEl);
