// 4. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта, пароль. По клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив репозитория класса Server

class Client {
  doRegistration() {
    const email = document.querySelector(".email");
    const pwd = document.querySelector(".pwd");
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
      let clientData = { email: email.value, pwd: pwd.value };
      const server = new Server();
      server.controller(clientData);
    });
  }
}

class Server {
  controller(clientData) {
    console.log(clientData);
  }
}

const client = new Client();

client.doRegistration();
