const $toggle = document.querySelector('.toggle');
const $banner = document.querySelector('.banner');
const $header = document.querySelector('header');

$toggle.addEventListener('click', toggle);

function toggle() {
    $toggle.classList.toggle('active');
    $banner.classList.toggle('active');
    $header.classList.toggle('active');
}
