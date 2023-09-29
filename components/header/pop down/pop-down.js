const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/header/pop down/css/pop-down.min.css">

<div class="header__pop-down">
        <p class="header__pop-down__text">Scroll For More</p>
        <span class="header__pop-down__icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="46"
            viewBox="0 0 44 46"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.0266 0.0536424C15.7749 0.482528 11.8453 2.09635 8.39989 4.82849C6.72207 6.15896 4.54316 8.65937 3.28399 10.6991C2.74019 11.58 1.68161 13.8122 1.3024 14.8775C0.878402 16.0687 0.426497 17.8891 0.204119 19.3016C-0.0680397 21.0304 -0.0680397 24.3129 0.204119 26.0417C0.588931 28.4857 1.19767 30.4615 2.23963 32.6488C3.37804 35.0385 4.56176 36.7324 6.45731 38.6844C8.35295 40.6362 9.99796 41.8551 12.3186 43.0274C14.4429 44.1003 16.3616 44.7272 18.735 45.1234C20.414 45.4036 23.6017 45.4036 25.2806 45.1234C27.6541 44.7272 29.5728 44.1003 31.697 43.0274C34.0177 41.8551 35.6627 40.6362 37.5584 38.6844C39.4539 36.7324 40.6376 35.0385 41.776 32.6488C42.5322 31.0615 42.9125 30.0212 43.3199 28.4261C43.8624 26.3017 44 25.1371 44 22.6717C44 20.2062 43.8624 19.0417 43.3199 16.9173C42.9125 15.3221 42.5322 14.2818 41.776 12.6945C40.6376 10.3049 39.4539 8.61095 37.5584 6.65897C35.6627 4.70708 34.0177 3.48818 31.697 2.31593C29.5749 1.24399 27.6182 0.604471 25.3237 0.232788C24.0577 0.0277461 21.2309 -0.0678574 20.0266 0.0536424ZM24.4761 2.41065C28.114 2.9017 31.4993 4.36662 34.3614 6.68833C35.1445 7.3235 36.913 9.14457 37.5299 9.95091C39.3429 12.3209 40.7921 15.4454 41.375 18.2409C41.9685 21.0883 41.9685 24.2551 41.375 27.1024C40.7921 29.8979 39.3429 33.0225 37.5299 35.3924C36.913 36.1988 35.1445 38.0198 34.3614 38.655C32.0599 40.5219 29.0255 42.0142 26.3107 42.6144C23.5455 43.2255 20.4701 43.2255 17.705 42.6144C14.9902 42.0142 11.9558 40.5219 9.65423 38.655C8.87117 38.0198 7.10266 36.1988 6.48582 35.3924C4.67278 33.0225 3.22353 29.8979 2.64072 27.1024C2.04722 24.2551 2.04722 21.0883 2.64072 18.2409C3.22353 15.4454 4.67278 12.3209 6.48582 9.95091C7.10266 9.14457 8.87117 7.3235 9.65423 6.68833C12.4818 4.39473 15.8791 2.91439 19.4671 2.4126C20.6733 2.24392 23.2337 2.24294 24.4761 2.41065ZM21.4964 11.8366C21.335 11.9258 21.1321 12.1347 21.0455 12.3009C20.8963 12.5875 20.8882 13.0435 20.8882 21.2048V29.8065L18.5806 27.4363L16.2731 25.0662H15.8312C15.2967 25.0662 14.9105 25.349 14.78 25.8361C14.5987 26.5118 14.5727 26.4783 18.1213 30.1325C21.6985 33.8159 21.6495 33.7759 22.3424 33.5821C22.5904 33.5127 23.3157 32.813 25.905 30.1449C29.3827 26.5614 29.4142 26.521 29.2396 25.8535C29.1085 25.3522 28.7253 25.0662 28.1845 25.0662H27.7426L25.4351 27.4363L23.1275 29.8065V21.2048C23.1275 13.0435 23.1194 12.5875 22.9701 12.3009C22.7967 11.9678 22.3461 11.6746 22.0078 11.6746C21.8879 11.6746 21.6578 11.7475 21.4964 11.8366Z"
              fill="#40F8FF"
            />
          </svg>
        </span>
      </div>
`;

class CreateHeaderPopDown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { CreateHeaderPopDown };
