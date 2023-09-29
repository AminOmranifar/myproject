const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/header/slider/css/slider.min.css">

<div class="header__slider">
<div class="header__slider__slide header__slider__slide-1">
  <img
    src="./pic/slider/Slider (1).png"
    class="header__slider__slide__image"
  />
</div>
<div class="header__slider__slide header__slider__slide-2">
  <img
    src="./pic/slider/Slider (2).png"
    class="header__slider__slide__image"
  />
</div>
<div class="header__slider__slide header__slider__slide-3">
  <img
    src="./pic/slider/Slider (3).png"
    class="header__slider__slide__image"
  />
</div>
<div class="header__slider__slide header__slider__slide-4">
  <img
    src="./pic/slider/Slider (4).png"
    class="header__slider__slide__image"
  />
</div>
</div>

<div class="header__counter-container">
<span class="header__counter-container__circle-icon active"></span>
<span class="header__counter-container__circle-icon"></span>
<span class="header__counter-container__circle-icon"></span>
<span class="header__counter-container__circle-icon"></span>
</div>
`;

class CreateHeaderSlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    // start of main slider
    const countersList = this.shadowRoot.querySelectorAll(
      ".header__counter-container__circle-icon"
    );
    const slider = this.shadowRoot.querySelector(".header__slider");
    let index = 0;

    setInterval(() => {
      if (sliderScrollChecker()) {
        slider.scrollTop += 645;
        index++;
        removeActiveFromCounters();
        addActiveToCounter(countersList[index]);
      } else {
        slider.scrollTop = 0;
        index = 0;
        removeActiveFromCounters();
        addActiveToCounter(countersList[index]);
      }
    }, 4000);

    // check maximum scroll
    function sliderScrollChecker() {
      if (slider.scrollTop + 645 > 1950) {
        return false;
      } else {
        return true;
      }
    }

    // remove active class from all counters
    function removeActiveFromCounters() {
      countersList.forEach((counter) => {
        counter.classList.remove("active");
      });
    }

    // add active class to counter
    function addActiveToCounter(counter) {
      counter.classList.add("active");
    }

    // ///////// end of main slider
  }
}

export { CreateHeaderSlider };
