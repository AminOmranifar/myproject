const $ = document;
let icon, resScroll, resMaxScroll;

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// project slider
const projectWrapper = $.querySelector(".main__project__slider__wrapper");

const projectSlideList = $.querySelectorAll(
  ".main__project__slider__wrapper__slide"
);
const projectPagination = $.querySelector(
  ".main__project__slider__footer__pagination"
);
let scrollXValue,
  paginationIndex = 0;

addPaginationIcon(
  projectSlideList.length,
  projectPagination,
  "main__project__slider__footer__pagination__circle"
);

const projectPaginationList = Array.from(projectPagination.children);
setInterval(() => {
  resScrollHandler();
  scrollXValue = projectWrapper.scrollLeft;
  if (checkProjectScroll(resMaxScroll)) {
    paginationIndex++;
    activeProjectPagination(paginationIndex);
    projectWrapper.scroll({
      left: scrollXValue + resScroll,
      behavior: "smooth",
    });
  } else {
    paginationIndex = 0;
    activeProjectPagination(paginationIndex);
    projectWrapper.scroll({
      left: 0,
      behavior: "smooth",
    });
  }
}, 4000);

function checkProjectScroll(maxScroll) {
  if (scrollXValue < maxScroll) {
    return true;
  } else {
    return false;
  }
}

function resScrollHandler() {
  if (window.innerWidth > 1056) {
    resScroll = 530.5;
    resMaxScroll = 1576;
  } else if (window.innerWidth <= 1056 && window.innerWidth > 880) {
    resScroll = 420;
    resMaxScroll = 1260;
  } else if (window.innerWidth <= 880 && window.innerWidth > 600) {
    resScroll = 290;
    resMaxScroll = 870;
  } else if (window.innerWidth <= 600) {
    resScroll = 290;
    resMaxScroll = 1150;
  }
}

function activeProjectPagination() {
  removeActiveFromPagination();

  projectPaginationList[paginationIndex].classList.add("active");
}

function removeActiveFromPagination() {
  projectPaginationList.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}

function addPaginationIcon(slideNum, parent, iconClass) {
  for (let i = 0; i < slideNum; i++) {
    icon = $.createElement("span");
    icon.className = iconClass;
    parent.appendChild(icon);
  }

  parent.children[0].classList.add("active");
}

// sample work slider
const sampleWorkWrapper = $.querySelector(".main__sample-work__wrapper");
const sampleWorkSlideList = $.querySelectorAll(
  ".main__sample-work__wrapper__slide"
);
const sampleWorkPagination = $.querySelector(
  ".main__sample-work__pagination-box__pagination"
);

if (window.innerWidth <= 840 && window.innerWidth > 780) {
  addPaginationIcon(
    sampleWorkSlideList.length - 2,
    sampleWorkPagination,
    "main__sample-work__pagination-box__pagination__pagination-icon"
  );
} else if (window.innerWidth <= 780 && window.innerWidth > 515) {
  addPaginationIcon(
    sampleWorkSlideList.length - 1,
    sampleWorkPagination,
    "main__sample-work__pagination-box__pagination__pagination-icon"
  );
} else if (window.innerWidth <= 515 && window.innerWidth > 512) {
  addPaginationIcon(
    sampleWorkSlideList.length - 1,
    sampleWorkPagination,
    "main__sample-work__pagination-box__pagination__pagination-icon"
  );
} else if (window.innerWidth <= 512) {
  addPaginationIcon(
    sampleWorkSlideList.length,
    sampleWorkPagination,
    "main__sample-work__pagination-box__pagination__pagination-icon"
  );
} else {
  addPaginationIcon(
    sampleWorkSlideList.length - 5,
    sampleWorkPagination,
    "main__sample-work__pagination-box__pagination__pagination-icon"
  );
}

const sampleWorkPaginationList = Array.from(sampleWorkPagination.children);
let sampleWorkSliderScrollXValue,
  sampleWorkPaginationIndex = 0,
  activeBullet,
  maxIndex = 3,
  res2Scroll;

setInterval(() => {
  sampleWorkSliderScrollXValue = sampleWorkWrapper.scrollLeft;
  if (
    sampleWorkSliderScrollXValue < 1908 &&
    sampleWorkPaginationIndex < maxIndex
  ) {
    res2ScrollHandler();
    sampleWorkWrapper.scroll({
      left: (sampleWorkSliderScrollXValue += res2Scroll),
      behavior: "smooth",
    });
    sampleWorkPaginationIndex++;
    activeSampleWorkPagination();
  } else {
    sampleWorkSliderScrollXValue = 0;
    sampleWorkWrapper.scroll({
      left: 0,
      behavior: "smooth",
    });
    sampleWorkPaginationIndex = 0;
    activeSampleWorkPagination();
  }
}, 5000);

function res2ScrollHandler() {
  if (window.innerWidth > 1056) {
    res2Scroll = 660;
    maxIndex = 3;
  } else if (window.innerWidth <= 1056 && window.innerWidth > 840) {
    res2Scroll = 480;
    maxIndex = 3;
  } else if (window.innerWidth <= 840 && window.innerWidth > 780) {
    res2Scroll = 220;
    maxIndex = 6;
  } else if (window.innerWidth <= 780 && window.innerWidth > 515) {
    res2Scroll = 220;
    maxIndex = 7;
  } else if (window.innerWidth <= 515 && window.innerWidth > 512) {
    res2Scroll = 220;
    maxIndex = 7;
  } else if (window.innerWidth <= 512) {
    res2Scroll = 220;
    maxIndex = 8;
  }
}

function activeSampleWorkPagination() {
  removeSampleWorkPagination();

  sampleWorkPaginationList[sampleWorkPaginationIndex].classList.add("active");
}

function removeSampleWorkPagination() {
  activeBullet = $.querySelector(
    ".main__sample-work__pagination-box__pagination__pagination-icon.active"
  );
  activeBullet.classList.remove("active");
}
