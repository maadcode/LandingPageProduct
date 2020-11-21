const $toggle = document.querySelector('.toggle');
const $banner = document.querySelector('.banner');

$toggle.addEventListener('click', toggle);

function toggle() {
    $toggle.classList.toggle('active');
    $banner.classList.toggle('active');
}
