const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/footer/css/footer.min.css">

<footer class="footer">
      <div class="footer__container">
        <ul class="footer__container__list">
          <h3 class="footer__container__list__title">
            You can see my skills below
          </h3>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Html</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Css</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Sass</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Bootstrap</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Tailwind</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Git & GitHub</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">Js</a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">React</a>
          </li>
        </ul>
        <ul class="footer__container__list footer__container__img-list">
          <h3 class="footer__container__list__title">My Skills</h3>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/kisspng-css3-cascading-style-sheets-computer-icons-html-emblem-5ac245f107ae31 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd5508ada4 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/kisspng-web-development-html-responsive-web-design-logo-ja-html-5ae04a9526c592 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/GitHub (logo).svg"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/kisspng-sass-npm-cascading-style-sheets-node-js-sass-5b3781ce87c853 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/git-icon 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/kisspng-responsive-web-design-web-development-bootstrap-ca-5b0055a1928422 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/32 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
          <li class="footer__container__list__item">
            <a href="#" class="footer__container__list__link">
              <img
                src="./pic/skills icon/Tailwind_CSS_Logo 1.png"
                class="footer__container__list__link__img"
              />
            </a>
          </li>
        </ul>
        <ul class="footer__container__list">
          <h3 class="footer__container__list__title">Contact width me</h3>
          <li
            class="footer__container__list__item footer__container__list-contact__item"
          >
            <a
              href="#"
              class="footer__container__list__link footer__container__list-contact__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Tehran / Azadi / South Mehrabad
            </a>
          </li>
          <li
            class="footer__container__list__item footer__container__list-contact__item"
          >
            <a
              href="#"
              class="footer__container__list__link footer__container__list-contact__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              989909355595
            </a>
          </li>
          <li
            class="footer__container__list__item footer__container__list-contact__item"
          >
            <a
              href="#"
              class="footer__container__list__link footer__container__list-contact__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              aminomranifar93@gmail.com
            </a>
          </li>
        </ul>
        <ul class="footer__container__list footer__container__list-social">
          <h3 class="footer__container__list__title">Social Network</h3>
          <li class="footer__container__list__item">
            <a
              href="#"
              class="footer__container__list__link footer__container__list-social__link"
              ><img src="./pic/cantact icon/tele.svg" />@Hidden_393</a
            >
          </li>
          <li class="footer__container__list__item">
            <a
              href="#"
              class="footer__container__list__link footer__container__list-social__link"
              ><img src="./pic/cantact icon/bi_linkedin.svg" />@Hidden_393</a
            >
          </li>
          <li class="footer__container__list__item">
            <a
              href="#"
              class="footer__container__list__link footer__container__list-social__link"
              ><img src="./pic/cantact icon/Vector.svg" />@Hidden_393</a
            >
          </li>
          <li class="footer__container__list__item">
            <a
              href="#"
              class="footer__container__list__link footer__container__list-social__link"
              ><img src="./pic/cantact icon/Group.svg" />@Hidden_393</a
            >
          </li>
        </ul>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom__left">
          <div class="footer__bottom__left__top">
            <p>German / England</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="footer__bottom__left__bottom">
            <p>© 2023 Amin Communications. All rights reserved.</p>
          </div>
        </div>
        <div class="footer__bottom__right">
          <form action="" class="footer__bottom__right__comment-form">
            <input
              type="text"
              class="footer__bottom__right__comment-form__input"
              placeholder="comments"
            />
            <input
              type="submit"
              class="footer__bottom__right__comment-form__btn"
              value="Post a comment"
            />
          </form>
        </div>
      </div>
      <div class="pop-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0266 44.9468C15.7749 44.521 11.8453 42.9191 8.39989 40.207C6.72207 38.8864 4.54316 36.4043 3.28399 34.3797C2.74019 33.5052 1.68161 31.2894 1.3024 30.232C0.878402 29.0495 0.426497 27.2425 0.204119 25.8404C-0.0680397 24.1243 -0.0680397 20.866 0.204119 19.1499C0.588931 16.7239 1.19767 14.7627 2.23963 12.5914C3.37804 10.2194 4.56176 8.53792 6.45731 6.6003C8.35295 4.66278 9.99796 3.45284 12.3186 2.28922C14.4429 1.22419 16.3616 0.601971 18.735 0.208637C20.414 -0.0695496 23.6017 -0.0695496 25.2806 0.208637C27.6541 0.601971 29.5728 1.22419 31.697 2.28922C34.0177 3.45284 35.6627 4.66278 37.5584 6.6003C39.4539 8.53792 40.6376 10.2194 41.776 12.5914C42.5322 14.167 42.9125 15.1997 43.3199 16.7831C43.8624 18.8919 44 20.0478 44 22.4952C44 24.9425 43.8624 26.0985 43.3199 28.2072C42.9125 29.7907 42.5322 30.8233 41.776 32.3989C40.6376 34.771 39.4539 36.4524 37.5584 38.39C35.6627 40.3276 34.0177 41.5375 31.697 42.7011C29.5749 43.7652 27.6182 44.4 25.3237 44.7689C24.0577 44.9725 21.2309 45.0674 20.0266 44.9468ZM24.4761 42.6071C28.114 42.1196 31.4993 40.6655 34.3614 38.3609C35.1445 37.7304 36.913 35.9227 37.5299 35.1223C39.3429 32.7698 40.7921 29.6682 41.375 26.8933C41.9685 24.0669 41.9685 20.9234 41.375 18.097C40.7921 15.3221 39.3429 12.2205 37.5299 9.86801C36.913 9.06761 35.1445 7.25993 34.3614 6.62944C32.0599 4.77625 29.0255 3.29491 26.3107 2.69919C23.5455 2.09256 20.4701 2.09256 17.705 2.69919C14.9902 3.29491 11.9558 4.77625 9.65423 6.62944C8.87117 7.25993 7.10266 9.06761 6.48582 9.86801C4.67278 12.2205 3.22353 15.3221 2.64072 18.097C2.04722 20.9234 2.04722 24.0669 2.64072 26.8933C3.22353 29.6682 4.67278 32.7698 6.48582 35.1223C7.10266 35.9227 8.87117 37.7304 9.65423 38.3609C12.4818 40.6376 15.8791 42.1071 19.4671 42.6052C20.6733 42.7726 23.2337 42.7736 24.4761 42.6071ZM21.4964 33.2505C21.335 33.162 21.1321 32.9546 21.0455 32.7896C20.8963 32.5051 20.8882 32.0525 20.8882 23.9512V15.4128L18.5806 17.7656L16.2731 20.1183H15.8312C15.2967 20.1183 14.9105 19.8375 14.78 19.354C14.5987 18.6833 14.5727 18.7165 18.1213 15.0893C21.6985 11.433 21.6495 11.4727 22.3424 11.665C22.5904 11.7339 23.3157 12.4285 25.905 15.0769C29.3827 18.634 29.4142 18.6742 29.2396 19.3367C29.1085 19.8344 28.7253 20.1183 28.1845 20.1183H27.7426L25.4351 17.7656L23.1275 15.4128V23.9512C23.1275 32.0525 23.1194 32.5051 22.9701 32.7896C22.7967 33.1203 22.3461 33.4113 22.0078 33.4113C21.8879 33.4113 21.6578 33.3389 21.4964 33.2505Z"
            fill="#40F8FF"
          />
        </svg>
      </div>
    </footer>
`;

class CreateFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const popUp = this.shadowRoot.querySelector(".pop-up");

    popUp.addEventListener("click", () => {
      document.body.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

export { CreateFooter };
