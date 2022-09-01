const config = {
  autoload: true,
  itemsToBeVisible: 1,
  speed: 3000,
  stop: false
};

const prevSlideButton = document.getElementById("prev-slide");
const nextSlideButton = document.getElementById("next-slide");
const pauseButton = document.getElementById("pause");

/*-------------------
  Entry point 
  ---------------------*/
function start() {
  window.onload = function () {
    setSlidersStyle(config);


    prevSlideButton.addEventListener("click", () => {
      navigate("backward", config);
    });

    nextSlideButton.addEventListener("click", () => {
      navigate("forward", config);
    });

    pauseButton.addEventListener('click', () => stopCarousel(config.stop))

    if (config.autoload) {
      playCarousel(nextSlideButton, config);
    }
  };
}

/*  Sets the style of slides based on the number of visible items. */
function setSlidersStyle(config) {
  document.querySelector(
    "style"
  ).textContent += `@media screen and (min-width:1180px) { .carousel__slide{ min-width: ${
      100 / config.itemsToBeVisible
    }% } }`;
}

/*
   Performs the sliding behavior of items.*/
function navigate(position, config) {
  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = carouselEl.querySelector(".carousel__container");
  const slideEl = carouselEl.querySelector(".carousel__slide");
  let slideWidth = slideEl.offsetWidth;
  slideContainerEl.scrollLeft = this.getNewScrollPosition(
    position,
    slideContainerEl,
    slideWidth,
    config
  );
}

/* Get the new scroll position.*/
function getNewScrollPosition(position, slideContainerEl, slideWidth, config) {
  const maxScrollLeft =
    slideContainerEl.scrollWidth - slideWidth * config.itemsToBeVisible;
  if (position === "forward") {
    const x = slideContainerEl.scrollLeft + slideWidth;
    return x <= maxScrollLeft ? x : 0;
  } else {
    const x = slideContainerEl.scrollLeft - slideWidth;
    return x >= 0 ? x : maxScrollLeft;
  }
}

/* AutoplayW*/
function playCarousel(nextButton, config) {
  const play = () => {
    nextButton.click();
    setTimeout(play, config.speed);
  };
  play();
}

function stopCarousel() {
  config.stop = !config.stop
  if (!config.stop) {
    config.speed = 3000
    pauseButton.innerHTML = `<i class="fa-solid fa-pause"></i>`
  } else {
    config.speed = 0
    pauseButton.innerHTML = `<i class="fa-solid fa-play"></i>`

  }
}

start();