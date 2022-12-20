// FOR RESPONSIVE NAVBAR
const hamBurgerEle = document.querySelector(".hamburger");
const sideBarEle = document.querySelector(".sidebar");

hamBurgerEle.addEventListener("click", () => {
  sideBarEle.classList.toggle("sidebar-visible");
});

// FOR MAIN NAVBAR
const mainNavbarEle = document.querySelector(".main-navbar");
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.documentElement.scrollTop > 50 || screen.width <= 1180) {
    mainNavbarEle.style.display = "flex";
  } else {
    mainNavbarEle.style.display = "none";
  }
}

// FOR DARK MODE

const modeButton = document.querySelectorAll(".dark-mode");
const modeText = document.querySelectorAll(".dark-text");
const bodyEle = document.body;
const modeEle = document.querySelectorAll(".dark-text");
const floatingNavbarEle = document.querySelector(".nav-b");
const mainContainerEle = document.querySelector(".main-container");
const infoBox1aEle = document.querySelector(".info-box-1a");
const infoBox1bEle = document.querySelector(".info-box-1b");
const text1Ele = document.querySelectorAll(".text-1");
const text3Ele = document.querySelectorAll(".text-3");
const infoBox2Ele = document.querySelectorAll(".info-box-2");
const textsEle = document.querySelectorAll(".text-s");
const infoBox3Ele = document.querySelector(".info-box-3");
const farecatEle = document.querySelector(".fare-cat");
const whereToGoEle = document.querySelector(".where-to-go");
const offersEle = document.querySelector(".offers");
const offerHeaderEle = document.querySelector(".offer-header");
const offerClassEle = document.querySelector(".offer-class");
const offerCardEle = document.querySelectorAll(".offer-card");
const downloadAppEle = document.querySelector(".download-app");
const enterNoEle = document.querySelector(".enter-no");
const inputNoEle = document.querySelector(".input-no");
const inputSubEle = document.querySelector(".input-sub");
const handpickCollectionEle = document.querySelector(".handpick-collection");
const handpickHeaderEle = document.querySelector(".handpick-header");
const wondersSectionEle = document.querySelector(".wonders-section");
const wondersHeaderEle = document.querySelector(".wonders-header");
const miscellaneousEle = document.querySelectorAll(".miscellaneous");
const aboutMainContainerEle = document.querySelector(".about-main-container");
const aboutBoxEle = document.querySelectorAll(".about-box");
const footerMainEle = document.querySelector(".footer-main");

function darkModeToggler() {
  bodyEle.classList.toggle("b-body");
  sideBarEle.classList.toggle("b-sidebar");
  mainNavbarEle.classList.toggle("b-main-navbar");
  modeEle.forEach((button) => {
    button.classList.toggle("b-mode");
  });
  floatingNavbarEle.classList.toggle("b-nav-b");
  mainContainerEle.classList.toggle("b-main-container");
  infoBox1aEle.classList.toggle("b-info-box");
  infoBox1bEle.classList.toggle("b-info-box");
  text1Ele.forEach((text) => {
    text.classList.toggle("b-text-1");
  });
  text3Ele.forEach((text) => {
    text.classList.toggle("b-text-3");
  });
  infoBox2Ele.forEach((box) => {
    box.classList.toggle("b-info-box");
  });
  textsEle.forEach((text) => {
    text.classList.toggle("b-text-s");
  });
  infoBox3Ele.classList.toggle("b-info-box");
  farecatEle.classList.toggle("b-fare-cat");
  whereToGoEle.classList.toggle("b-where-to-go");
  offersEle.classList.toggle("b-offer");
  offerHeaderEle.classList.toggle("b-offer-header");
  offerClassEle.classList.toggle("b-offer-class");
  offerCardEle.forEach((card) => {
    card.classList.toggle("b-offer-card");
  });
  downloadAppEle.classList.toggle("b-download-app");
  enterNoEle.classList.toggle("b-enter-no");
  inputNoEle.classList.toggle("b-input-no");
  inputSubEle.classList.toggle("b-input-sub");
  handpickCollectionEle.classList.toggle("b-handpick-collection");
  handpickHeaderEle.classList.toggle("b-handpick-header");
  wondersSectionEle.classList.toggle("b-wonders-section");
  wondersHeaderEle.classList.toggle("b-wonders-header");
  miscellaneousEle.forEach((item) => {
    item.classList.toggle("b-miscellaneous");
  });
  aboutMainContainerEle.classList.toggle("b-about-main-container");
  aboutBoxEle.forEach((box) => {
    box.classList.toggle("b-about-box");
  });
  footerMainEle.classList.toggle("b-footer-main");

  function buttonStyle() {
    if (modeText[1].innerText == "dark_mode") {
      modeText.forEach((text) => {
        text.innerHTML = `<span class="material-symbols-outlined">light_mode</span>`;
      });
    } else if (modeText[1].innerText == "light_mode") {
      modeText.forEach((text) => {
        text.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
      });
    }
  }
  buttonStyle();
}

modeButton.forEach((button) => {
  button.addEventListener("click", darkModeToggler);
});
