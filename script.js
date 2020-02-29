const inspect = () => {
    [...document.querySelectorAll('img:not([alt])')].forEach((img) => {
        img.style.filter = 'blur(10px)';
    });
};
window.addEventListener('load', inspect);