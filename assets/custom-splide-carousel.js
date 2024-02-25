class CustomSplideCarousel extends HTMLElement {
  constructor() {
    super();

    this.element = this.querySelector(".splide");
    this.splideList = this.querySelector(".splide__list");

    this.initializeSlider();
  }

  initializeSlider() {
    const options = JSON.parse(this.getAttribute("data-options"));
    console.log(options);

    var splide = new Splide(this.element, options);

    splide.mount();
  }
}

customElements.define("custom-splide-carousel", CustomSplideCarousel);
