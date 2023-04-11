import { CoincapAPI } from './js/coingeckoAPI';
import { Notify } from 'notiflix';

const coincapAPI = new CoincapAPI();

const searchFormEl = document.querySelector('.header-form');
const searchInputEl = document.querySelector('.header-form__input');
const infoListEl = document.querySelector('.info-list');

const getRanks = async () => {
  try {
    const seekedCoin = searchInputEl.value.toLowerCase().trim();
    const response = await coincapAPI.getCoins();
    const { data } = response.data;
    for (const coin of data) {
      if (!seekedCoin) return Notify.failure('Enter something.');
      if (
        seekedCoin === coin.id.toLowerCase() ||
        seekedCoin === coin.symbol.toLowerCase()
      ) {
        return (infoListEl.innerHTML = `<div class="info-list__item">
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
        </div>`);
      }
    }
    // data.forEach(coin => {
    //   if (!seekedCoin) return Notify.failure('Enter something.');
    //   if (
    //     seekedCoin === coin.id.toLowerCase() ||
    //     seekedCoin === coin.symbol.toLowerCase()
    //   ) {
    //     infoListEl.innerHTML = `<div class="info-list__item">
    //       <div class="info">
    //         <p class="info-item">
    //         <b>Name: ${coin.name}</b>
    //         </p>
    //         <p class="info-item">
    //         <b>Rank: ${coin.rank}</b>
    //         </p>
    //         <p class="info-item">
    //         <b>Price: ${coin.priceUsd}$</b>
    //         </p>
    //         <p class="info-item">
    //         <b>Market Cap: ${Math.round(coin.marketCapUsd)}$</b>
    //         </p>
    //         <p class="info-item">
    //         <b>Volume: ${Math.round(coin.volumeUsd24Hr)}$</b>
    //         </p>
    //       </div>
    //     </div>`;
    //   }
    //   return Notify.failure('We have not found such cryptocurrency.');
    // });
  } catch (err) {
    console.log;
  }
};

const handleSearchFormEl = e => {
  e.preventDefault();
  getRanks();
};

searchFormEl.addEventListener('submit', handleSearchFormEl);
