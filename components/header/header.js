const template = document.createElement("template");

// Add components
import { CreateDesktopNavbar } from "./desktop navbar/desktop-navbar.js";
import { CreateHeaderSlider } from "./slider/slider.js";
import { CreateHeaderTextContainer } from "./text container/text-container.js";
import { CreateHeaderPopDown } from "./pop down/pop-down.js";
import { CreateMobileMenu } from "./mobile navbar/mobile-navbar.js";

window.customElements.define("mobile-menu", CreateMobileMenu);
window.customElements.define("pop-down", CreateHeaderPopDown);
window.customElements.define("text-container", CreateHeaderTextContainer);
window.customElements.define("desktop-navbar", CreateDesktopNavbar);
window.customElements.define("header-slider", CreateHeaderSlider);

template.innerHTML = `
<link rel="stylesheet" href="./components/header/header.css">


<header class="header">
<!-- --------------- Start of desktop-navbar --------------- -->
<desktop-navbar></desktop-navbar>
<!-- --------------- End of desktop-navbar --------------- -->
<!-- --------------- Start of mobile menu --------------- -->
<mobile-menu></mobile-menu>
<!-- --------------- End of mobile menu --------------- -->
<!-- --------------- Start of Slider --------------- -->
<header-slider></header-slider>
<!-- --------------- End of Slider --------------- -->
<!-- --------------- Start of text container --------------- -->
<text-container></text-container>
<!-- --------------- End of text container --------------- -->
<!-- --------------- Start of header pop down --------------- -->
<pop-down></pop-down>
<!-- --------------- End of header pop down --------------- -->
</header>
`;

class CreateHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { CreateHeader };
