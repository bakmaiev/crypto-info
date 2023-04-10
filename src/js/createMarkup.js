export function createMarkup() {
  infoListEl.innerHTML = `<div class="info-list__item">
          <img class="info-list__image" src="${coin.image}" alt="${
    coin.symbol
  }" loading="lazy" />
          <div class="info">
            <p class="info-item">
            <b>Name: ${coin.name}</b>
            </p>
            <p class="info-item">
            <b>Rank: ${index + 1}</b>
            </p>
            <p class="info-item">
            <b>Price: ${coin.current_price}$</b>
            </p>
            <p class="info-item">
            <b>Market Cap: ${coin.market_cap}$</b>
            </p>
            <p class="info-item">
            <b>Volume: ${coin.total_volume}$</b>
            </p>
          </div>
        </div>`;
}
