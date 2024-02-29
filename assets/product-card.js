class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;

    this.variantData = JSON.parse(this.querySelector("script").textContent);
    this.allVariants = this.querySelectorAll(".product-card__color-variants");
    this.addEventListener("change", this.onOptionChange);
  }

  onOptionChange() {
    this.selectedOptions = Array.from(
      this.querySelectorAll('input[type="radio"]:checked'),
      (input) => input.value
    );

    this.currentVariant = this.variantData.find((item) => {
      const option = item.options.length > 1 ? item.option2 : item.option1;

      if (option == this.selectedOptions[0]) {
        return item;
      }
    });

    this.getUpdatedCard();
  }

  getUpdatedCard() {
    const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;

    console.log(url);

    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        this.innerHTML = html.querySelector(
          `[data-product-handle="${this.productHandle}"]`
        ).innerHTML;

        console.log(
          html.querySelector(`[data-product-handle="${this.productHandle}"]`)
        );
      })
      .catch((err) => console.log(err));
  }
}

customElements.define("product-card", ProductCard);
