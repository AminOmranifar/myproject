const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/header/desktop navbar/css/desktop-navbar.min.css">

<nav class="header__desktop-navbar">
<div class="header__desktop-navbar__logo-box">
  <a class="header__desktop-navbar__logo-box__text"
    ><span class="header__desktop-navbar__logo-box__text__span">A</span
    >min</a
  >
</div>
<ul class="header__desktop-navbar__list-menu">
  <li class="header__desktop-navbar__list-menu__item">
    <a
      href="index.html"
      class="header__desktop-navbar__list-menu__link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 header__desktop-navbar__list-menu__home-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </a>
  </li>
  <li class="header__desktop-navbar__list-menu__item">
    <a
      href="short-bio.html"
      class="header__desktop-navbar__list-menu__link"
      >Short Bio</a
    >
  </li>
  <li class="header__desktop-navbar__list-menu__item">
    <a
      href="skills.html"
      class="header__desktop-navbar__list-menu__link"
      >My Skills</a
    >
  </li>
  <li class="header__desktop-navbar__list-menu__item">
    <a href="history.html" class="header__desktop-navbar__list-menu__link"
      >History</a
    >
  </li>
  <li class="header__desktop-navbar__list-menu__item">
    <a href="current.html" class="header__desktop-navbar__list-menu__link"
      >Current Position</a
    >
  </li>
  <li class="header__desktop-navbar__list-menu__item">
    <a href="current-work.html" class="header__desktop-navbar__list-menu__link"
      >Current Work</a
    >
  </li>
  <li class="header__desktop-navbar__list-menu__item">
    <a
      href="contact-me.html"
      class="header__desktop-navbar__list-menu__link"
      >Contact With Me</a
    >
  </li>
</ul>
</nav>
`;

class CreateDesktopNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const route = location.pathname;
    const linkList = this.shadowRoot.querySelectorAll(
      ".header__desktop-navbar__list-menu__link"
    );

    // remove page active class from all link
    function removeActiveClass() {
      linkList.forEach((link) => {
        link.classList.remove("page-link-active");
      });
    }

    // give page active class name to the link target and active its parent
    function activeLink(index) {
      removeActiveClass();
      linkList[index].classList.add("page-link-active");
      linkList[index].parentElement.classList.add("active");
    }

    switch (route) {
      case "/index.html":
        activeLink(0);
        break;
      case "/short-bio.html":
        activeLink(1);
        break;
      case "/skills.html":
        activeLink(2);
        break;
      case "/current.html":
        activeLink(4);
        break;
      case "/history.html":
        activeLink(3);
        break;
      case "/current-work.html":
        activeLink(4);
        break;
      case "/contact-me.html":
        activeLink(6);
        break;
      default:
        break;
    }
  }
}

export { CreateDesktopNavbar };
