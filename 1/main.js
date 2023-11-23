// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const div = document.querySelector("div");

class HTML {
  bindOption() {
    const input = document.querySelector("input");
    const btn = document.querySelector("button");
    const div = document.querySelector("div");

    btn.addEventListener("click", () => {
      try {
        if (!input.value) throw new Error("input empty");
        div.innerHTML = input.value;
        div.textContent.style.color = '#000';
        input.value = "";
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

const html = new HTML();
html.bindOption();
