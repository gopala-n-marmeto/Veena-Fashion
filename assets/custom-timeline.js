
// Custom timeline js with two sliders for thumbnails and main content
document.addEventListener("DOMContentLoaded", function () {

    // initializing the main-slider for timeline data
  var main = new Splide("#main-slider", {
    type: "slide",
    pagination: false,
    arrows: false,
    perPage: 1,
    breakpoints: {
      768: {
        arrows: true,
      },
    },
  });

    //    Initializing the thumbnail slider for timeline
  var thumbnails = new Splide("#thumbnail-slider", {
    fixedWidth: 200,
    fixedHeight: 150,
    isNavigation: true,
    gap: 10,
    pagination: false,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      768: {
        fixedWidth: 66,
        fixedHeight: 38,
      },
    },
  });

    //   Mounting the thumbnails slider and main slider for timeline
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
