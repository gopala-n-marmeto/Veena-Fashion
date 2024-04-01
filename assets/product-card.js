// custom element for product card

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;
    // accessing variants data
    this.variantData = JSON.parse(this.querySelector("script").textContent);
    this.allVariants = this.querySelectorAll(".product-card__color-variants");
    this.addEventListener("change", this.onOptionChange);
  }

  onOptionChange() {
    // accessing the selected varinat from the product
    this.selectedOptions = Array.from(
      this.querySelectorAll('input[type="radio"]:checked'),
      (input) => input.value
    );

    // getting the selected variant option
    this.currentVariant = this.variantData.find((item) => {
      const option = item.options.length > 1 ? item.option2 : item.option1;

      if (option == this.selectedOptions[0]) {
        return item;
      }
    });

    if (this.querySelector(".bundle-input")) {
      this.querySelector(".bundle-input").setAttribute(
        "data-bundle-product-id",
        `${this.currentVariant.id}`
      );
    }

    this.getUpdatedCard();
  }

  getUpdatedCard() {
    // variant url
    const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=custom-section-rendering`;

    // fetching selected varinat details
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        this.innerHTML = html.querySelector(
          `[data-product-handle="${this.productHandle}"]`
        ).innerHTML;
      })
      .catch((err) => console.log(err));
  }
}

customElements.define("product-card", ProductCard);
