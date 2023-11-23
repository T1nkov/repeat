// Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении

class Client {
  doRegistration() {
    const email = document.querySelector(".email");
    const pwd = document.querySelector(".pwd");
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
      let obj = { email: email.value, pwd: pwd.value };
      const server = new Server();
      const cont = server.controller(obj);
      console.log(cont);
    });
  }
}

class Server {
  // middleware(){

  // }
  controller(objClient) {
    try {
        const db = this.service(objClient);
    return db;
    } catch (error) {
        return error.message
    }
  }
  service(objClient) {
    const db = this.repository(objClient);
    return db;
  }
  repository(objClient) {
    const db = [
      { id: 1, email: "yesenia@mail.ru", pwd: "pwdffff" },
      { id: 2, email: "hanna@mail.ru", pwd: "pwdfevcrdv" },
      { id: 3, email: "stanislau@mail.ru", pwd: "pwdtest" },
      { id: 4, email: "german@mail.ru", pwd: "pwdqqq" },
      { id: 5, email: "maria@mail.ru", pwd: "pwdfcel" },
    ];
    const check = clientData.filter(el => el.email === objClient.email)
    if(check.length) throw new Error ('alredy exists')
    db.push({id:clientData.length + 1, ...objClient})
    return db;
  }
}

const client = new Client();

client.doRegistration();
