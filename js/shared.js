import { CreateHeader } from "../components/header/header.js";
import { CreateFooter } from "../components/footer/footer.js";
import { CreateLine } from "../components/line/line.js";

window.customElements.define("site-line", CreateLine);
window.customElements.define("site-header", CreateHeader);
window.customElements.define("site-footer", CreateFooter);
