import '../assets/scss/index.scss';

const $container = document.querySelector('.container');

for (let i = 10; i > 0; i--) {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
  const data = await response.json();
  const { id, url } = data[0];
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