import '../assets/scss/index.scss';

const $container = document.querySelector('.container');
const $loading = document.querySelector('.loading');

const getCatImage = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
  const data = await response.json();
  return data[0];
}

const render = ({ id, url }) => {
  const $pin = /* html */`
  <div class="pin">
    <div class="button-wrapper">
      <div class="anim-icon anim-icon-md heart">
        <input type="checkbox" id="cat-${id}" />
        <label for="cat-${id}"></label>
      </div>
    </div>
    <img src="${url}" />
  </div>`;

  $container.insertAdjacentHTML('afterbegin', $pin);
}

const results = [];
for (let i = 10; i > 0; i--) {
  results.push(getCatImage());
}

$loading.classList.toggle('hidden');

Promise.all(results)
  .then(cats => {
    cats.forEach(cat => render(cat));
  })
  .then(() => {
    $loading.classList.toggle('hidden');
  });
