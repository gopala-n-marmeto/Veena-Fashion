const tabsList = document.querySelector(".custom-tab-switching__tabs");

document.addEventListener("DOMContentLoaded", function () {
  const firstTab = document.querySelector(".custom-tab-switching__tab-item");
  const tabId = firstTab.dataset.tabId;
  const productContainers = document.querySelectorAll(".product-container");
  productContainers.forEach((productContainer) => {
    if (productContainer.dataset.collectionId === tabId) {
      productContainer.classList.add("active-collection");
    }
  });
});

tabsList.addEventListener("click", (event) => {
  const tabId = event.target.dataset.tabId;

  const collectionList = document.querySelectorAll(".product-container");

  collectionList.forEach((productContainer) => {
    if (tabId === productContainer.dataset.collectionId) {
      productContainer.classList.add("active-collection");
    } else {
      productContainer.classList.remove("active-collection");
    }
  });
});
