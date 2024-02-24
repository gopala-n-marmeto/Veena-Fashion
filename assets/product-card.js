class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.productHandle = this.dataset.productHandle;
    this.sectionId = this.dataset.sectionId;
    this.variantsData = JSON.parse(this.querySelector("script").textContent);
    this.allInputElements = this.querySelectorAll(
      ".product-card__color-variants"
    );

    this.allInputElements.forEach((input) => {
      input.addEventListener("mouseover", this.onChangeVariant.bind(this));
    });
  }

  onChangeVariant(event) {
    this.selectedVariantId = event.target.dataset.value;

    console.log(this.selectedVariantId);

    this.currentVariant = this.variantsData.find(
      (variant) => variant.id == this.selectedVariantId
    );

    this.getUpdatedCard();
  }

  getUpdatedCard() {
    const url = `/product/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;

    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, "text/html");
        this.innerHTML = html.querySelector(
          `[data-product-handle="${this.productHandle}"]`
        ).innerHTML;
      });
  }
}

customElements.define("product-card", ProductCard);
