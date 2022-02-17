document.addEventListener("DOMContentLoaded", function () {
  const options = {
    type: "loop",
    gap: "3rem",
    perPage: 2,
    perMove: 1,
    padding: { right: "15rem" },
    breakpoints: {
      640: {
        perPage: 2,
        gap: "0",
        padding: { right: "0" }
      },
      320: {
        perPage: 1,
        gap: "0",
        padding: { right: "0" }
      }
    }
  };
  const carouselRecentProjects = new Splide("#recent-projects", options);

  let recentProjectsBar = carouselRecentProjects.root.querySelector(
    ".splide__progress__bar"
  );

  carouselRecentProjects.on("mounted move", function () {
    let end = carouselRecentProjects.Components.Controller.getEnd() + 1;
    recentProjectsBar.style.width =
      String((100 * (carouselRecentProjects.index + 1)) / end) + "%";
  });
  carouselRecentProjects.mount();

  const carouselCostumerFeedback = new Splide("#customer-feedback", options);
  let customerFeedback = carouselCostumerFeedback.root.querySelector(
    ".splide__progress__bar"
  );

  carouselCostumerFeedback.on("mounted move", function () {
    let end = carouselCostumerFeedback.Components.Controller.getEnd() + 1;
    customerFeedback.style.width =
      String((100 * (carouselCostumerFeedback.index + 1)) / end) + "%";
  });
  carouselCostumerFeedback.mount();
});
