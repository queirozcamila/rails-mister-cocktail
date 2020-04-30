import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["The best drinks ever", "Enjoy the experience"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
