const mainCards = document.querySelector(".main_cards");
const loading = document.querySelector(".loading");

const API_URL = "https://fakestoreapi.com/products";

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => {
      createCard(res);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API_URL);
function createCard(data) {
  let fragment = document.createDocumentFragment();
  data.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("main_card");
    card.innerHTML = `
    <div class="card_top">
              <span>Новинка</span>
              <div class="image-container">
                <img src="${el.image}" alt="" />
              </div>
              <div class="card_icon">
                <img src="/img/card heart (1).svg" alt="" />
                <img src="/img/card compare_gray.svg" alt="" />
              </div>
            </div>
            <div class="card_bottom">
               <h2>${el.category}</h2>
              <h3>${el.title}</h3>
              <div class="card_ratin">
                <img src="./img/star.png" alt="" />
                <p>(${el.rating.rate})</p>
              </div>
              <h2>${el.price * 12500} sum </h2>
              <div class="credit">
                <span>${Math.floor((el.price * 12500) / 12)} sum </span>x
                <article>12oy</article>
              </div>
              <div class="buy">
                <button class="btn4">Купить сейчас</button>
                <button class="btn5">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.5 1.14286C0.5 0.78782 0.826217 0.5 1.22862 0.5H1.77096C2.69434 0.5 3.24721 1.04771 3.56336 1.55685C3.77408 1.89623 3.92653 2.28987 4.04577 2.64624C4.07806 2.64401 4.11078 2.64286 4.14387 2.64286H16.2849C17.0914 2.64286 17.6738 3.32379 17.4527 4.00811L15.677 9.50163C15.3498 10.5142 14.3012 11.2124 13.1079 11.2124H7.32937C6.12618 11.2124 5.07145 10.5028 4.75303 9.47909L4.01422 7.10386L2.7915 3.4621L2.78952 3.45572C2.63825 2.96901 2.49629 2.51433 2.28534 2.1746C2.08048 1.84469 1.91718 1.78571 1.77096 1.78571H1.22862C0.826217 1.78571 0.5 1.49789 0.5 1.14286Z"
                    fill="white"></path>
                <path
                    d="M6.81481 15.5C7.88792 15.5 8.7578 14.7325 8.7578 13.7857C8.7578 12.8389 7.88792 12.0714 6.81481 12.0714C5.74173 12.0714 4.87183 12.8389 4.87183 13.7857C4.87183 14.7325 5.74173 15.5 6.81481 15.5Z"
                    fill="white"></path>
                <path
                    d="M13.6151 15.5C14.6882 15.5 15.5581 14.7325 15.5581 13.7857C15.5581 12.8389 14.6882 12.0714 13.6151 12.0714C12.542 12.0714 11.6721 12.8389 11.6721 13.7857C11.6721 14.7325 12.542 15.5 13.6151 15.5Z"
                    fill="white"></path>
            </svg>
                </button>
              </div>
            </div>
    `;
    fragment.appendChild(card);
  });
  mainCards.appendChild(fragment);
}
