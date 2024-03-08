const whishlistIcons = document.querySelectorAll(".heart-icon");

if (whishlistIcons.length != 0) {
  whishlistIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const currentColor = this.getAttribute("fill");
      const newColor = currentColor === "#ff0000" ? "#858585" : "#ff0000";
      this.setAttribute("fill", newColor);
    });
  });
}
