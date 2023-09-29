const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/header/text container/css/text-container.min.css">

<div class="header__text-container">
<h1 class="header__text-container__title">
  Our <span class="light-blue-text">codes</span> turn our dreams into
  reality
</h1>
<h2 class="header__text-container__subtitle">
  You can see my skills below
</h2>
<ul class="header__text-container__list">
  <li class="header__text-container__item">Html</li>
  <li class="header__text-container__item">Css</li>
  <li class="header__text-container__item">Sass</li>
  <li class="header__text-container__item">Bootstrap</li>
  <li class="header__text-container__item">Tailwind</li>
  <li class="header__text-container__item">Git & Github</li>
  <li class="header__text-container__item">Js</li>
  <li class="header__text-container__item">React</li>
</ul>
</div>
`;

class CreateHeaderTextContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { CreateHeaderTextContainer };
