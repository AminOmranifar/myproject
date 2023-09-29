const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/header/mobile navbar/css/mobile-navbar.min.css">

<nav class="mobile-navbar">
      <button type="button" class="mobile-navbar__open-button">
        <img src="./pic/ham-icon.svg" />
      </button>
      <div class="mobile-navbar__logo-box">
        <a class="mobile-navbar__logo-box__text"
          ><span class="mobile-navbar__logo-box__text__span">A</span>min</a
        >
      </div>
      <a href="./index.html" class="mobile-navbar__home-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mobile-navbar__home-page__icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </a>
      <section class="mobile-navbar__slide-menu">
        <div class="mobile-navbar__slide-menu__header">
          <img src="../../../../pic/menu-flash.svg" />
          <a class="mobile-navbar__logo-box__text slide__title">
            <span class="mobile-navbar__logo-box__text__span">A</span>min
          </a>
          <button class="mobile-navbar__slide-menu__header__close-btn">
            <img src="./pic/close-flash.svg" />
          </button>
        </div>
        <div class="mobile-navbar__slide-menu__body">
          <ul class="mobile-navbar__slide-menu__body__list">
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="/" class="mobile-navbar__slide-menu__body__list__link">
                Home
              </a>
            </li>
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="short-bio.html" class="mobile-navbar__slide-menu__body__list__link">
                Short Bio
              </a>
            </li>
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="skills.html" class="mobile-navbar__slide-menu__body__list__link">
                My Skills
              </a>
            </li>
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="history.html" class="mobile-navbar__slide-menu__body__list__link">
                History
              </a>
            </li>
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="current.html" class="mobile-navbar__slide-menu__body__list__link">
                Current Position
              </a>
            </li>
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="current-work.html" class="mobile-navbar__slide-menu__body__list__link">
                Current Work
              </a>
            </li>
            <li class="mobile-navbar__slide-menu__body__list__item">
              <a href="contact-me.html" class="mobile-navbar__slide-menu__body__list__link">
                Contact with me
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
`;

class CreateMobileMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const route = location.pathname;
    const link = this.shadowRoot.querySelector(".mobile-navbar__home-page");
    const linkList = this.shadowRoot.querySelectorAll(
      ".mobile-navbar__slide-menu__body__list__item"
    );
    const closeBtn = this.shadowRoot.querySelector(
      ".mobile-navbar__slide-menu__header__close-btn"
    );
    const slideMenu = this.shadowRoot.querySelector(
      ".mobile-navbar__slide-menu"
    );
    const openBtn = this.shadowRoot.querySelector(
      ".mobile-navbar__open-button"
    );

    openBtn.addEventListener("click", () => {
      slideMenu.classList.add("show");
    });
    closeBtn.addEventListener("click", () => {
      slideMenu.classList.remove("show");
    });

    // remove page active class from all link
    function removeActiveClass() {
      linkList.forEach((link) => {
        link.classList.remove("active");
      });
    }

    // give page active class name to the link target and active its parent
    function activeLink(index) {
      removeActiveClass();
      linkList[index].classList.add("active");
      linkList[index].parentElement.classList.add("active");
    }

    switch (route) {
      case "/index.html":
        activeLink(0);
        link.classList.add("active");
        break;
      case "/short-bio.html":
        activeLink(1);
        link.classList.remove("active");
        break;
      case "/skills.html":
        activeLink(2);
        link.classList.remove("active");
        break;
      case "/current.html":
        activeLink(4);
        link.classList.remove("active");
        break;
      case "/history.html":
        activeLink(3);
        link.classList.remove("active");
        break;
      case "/current-work.html":
        activeLink(5);
        link.classList.remove("active");
        break;
      case "/contact-me.html":
        activeLink(6);
        link.classList.remove("active");
        break;
      case "/":
        activeLink(0);
        link.classList.add("active");
        break;
      default:
        break;
    }
  }
}

export { CreateMobileMenu };
