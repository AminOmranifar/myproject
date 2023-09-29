const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/line/line.css">

<div class="line">
<img src="./pic/line/Component 21.svg">
</div>
`;

class CreateLine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { CreateLine };
