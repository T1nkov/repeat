class HTML {
  bindOptionPlus() {
    const btn = document.querySelector("button");
    const h = document.querySelector("h1");
    btn.addEventListener("click", () => {
      h.innerHTML++;
    });
  }
  bindOptionMinus() {
    const btn = document.querySelector(".minus");
    const h = document.querySelector("h1");
    btn.addEventListener("click", () => {
      h.innerHTML--;
    });
  }
}

const htnl = new HTML();

htnl.bindOptionPlus();
htnl.bindOptionMinus();
