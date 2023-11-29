import TelegramApi from "node-telegram-bot-api";
import axios from "axios";

// // replace the value below with the Telegram token you receive from @BotFather
// const token = "6493005309:AAFhsfqwf5Lxd1gLLbBR7rVka3oNQbRgKgg";

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramApi(token, { polling: true });

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, "Received your message");
// });

// import TelegramBot from "node-telegram-bot-api";
// import axios from "axios";

async function start() {
  var databaseURL =
    "https://cryp-e4848-default-rtdb.europe-west1.firebasedatabase.app";

  // axios;
  // .get(databaseURL + "/TelegramBot.json")
  // .then((response) => {
  //   if (response.status === 200) {
  //     // Преобразуем ответ в формат JSON
  //     return response.data;
  //   } else {
  //     // Обрабатываем ошибку, если ответ не успешный
  //     throw new Error("Ошибка при выполнении запроса: " + response.status);
  //   }
  // })
  // .then((data) => {
  //   // Обрабатываем полученные данные
  //   console.log("data");
  //   botRedactData(data);
  // })
  // .catch((error) => {
  //   // Обрабатываем ошибки запроса
  //   console.error("Ошибка при получении данных из Firebase Database:", error);
  // });
  // try {
  //   const response = await axios.get(databaseURL + "/TelegramBot.json");

  //   if (response.status === 200) {
  //     const data = response.data;

  //     // Обрабатываем полученные данные
  //     console.log("data", data);
  //     botRedactData(data.token);
  //   } else {
  //     throw new Error("Ошибка при выполнении запроса: " + response.status);
  //   }
  // } catch (error) {
  //   // Обрабатываем ошибки запроса
  //   console.error("Ошибка при получении данных из Firebase Database:", error);
  // }
}
start();
// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates
async function botRedactData(data) {
  // let token = data;
  // let chatId = await data;
  let token = "6867558928:AAFEj2DoJgh4o4iPtBaqYzdr-9-LWWfwhCc";
  // let chatId = "398384907";
  const bot = new TelegramApi(token, { polling: true });

  // Обработчик событий callback_query
  bot.on("callback_query", (query) => {
    const data = query.data;
    console.log("data.substring(5, 10)", data.substring(0, 4) === "stop");
    // Добавьте соответствующую логику для обработки нажатия на кнопку
    if (data.substring(0, 4) == "stop") {
      // Действия при нажатии на кнопку 1
      const wlt = data.substring(5);
      console.log(wlt);
      var databaseURL =
        "https://cryp-e4848-default-rtdb.europe-west1.firebasedatabase.app";
      var path = "/UIN/";
      let urlsr = databaseURL + path + `${wlt}.json`;

      const getData = async () => {
        try {
          const response = await fetch(databaseURL + path + `${wlt}.json`);

          if (response.ok) {
            const data = await response.json();
            console.log("sdad", data);
            // Обрабатываем полученные   данные
            return data;
          } else {
            throw new Error(
              "Ошибка при выполнении запроса: " + response.status
            );
          }
        } catch (error) {
          // Обрабатываем ошибки запроса
          console.error(
            "Ошибка при получении данных из Firebase Database:",
            error
          );
        }
      };

      async function customData() {
        try {
          const response = await fetch(urlsr);
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            const dataset = await getData();
            data.accept = "cancel";
            // Обрабатываем полученные данные
            console.log("dataset", dataset);
            console.log("data", data);

            const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            };

            const updateResponse = await fetch(urlsr, requestOptions);

            if (updateResponse.ok) {
              // Обработка успешной отправки данных
              console.log("Данные успешно обновлены");
            } else {
              throw new Error(
                "Ошибка при отправке данных: " + updateResponse.status
              );
            }
          } else {
            throw new Error(
              "Ошибка при выполнении запроса: " + response.status
            );
          }
        } catch (error) {
          // Обрабатываем ошибки запроса
          console.error(
            "Ошибка при получении данных из Firebase Database:",
            error
          );
        }
      }
      customData();
    } else {
      // console.log(data);
      var databaseURL =
        "https://cryp-e4848-default-rtdb.europe-west1.firebasedatabase.app";
      var path = "/UIN/";
      let urlsr = databaseURL + path + `${data}.json`;
      let sendObj = {
        accept: "done",
      };
      let requestOptions = {
        method: "PUT",
        body: JSON.stringify(sendObj),
      };
      const getData2 = async () => {
        try {
          const response = await fetch(databaseURL + path + `${data}.json`);

          if (response.ok) {
            const data = await response.json();

            // Обрабатываем полученные данные
            return data;
          } else {
            throw new Error(
              "Ошибка при выполнении запроса: " + response.status
            );
          }
        } catch (error) {
          // Обрабатываем ошибки запроса
          console.error(
            "Ошибка при получении данных из Firebase Database:",
            error
          );
        }
      };

      async function customData() {
        try {
          const response = await fetch(urlsr);

          if (response.ok) {
            const data = await response.json();
            data.accept = "done";
            // Обрабатываем полученные данные
            // console.log("dataset", dataset);
            console.log("data", data);

            const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            };

            const updateResponse = await fetch(urlsr, requestOptions);

            if (updateResponse.ok) {
              // Обработка успешной отправки данных
              console.log("Данные успешно обновлены");
            } else {
              throw new Error(
                "Ошибка при отправке данных: " + updateResponse.status
              );
            }
          } else {
            throw new Error(
              "Ошибка при выполнении запроса: " + response.status
            );
          }
        } catch (error) {
          // Обрабатываем ошибки запроса
          console.error(
            "Ошибка при получении данных из Firebase Database:",
            error
          );
        }
      }
      customData();
    }
  });

  // Обработчик событий message
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);

    // send a message to the chat acknowledging receipt of their message
    // bot.sendMessage(chatId, "Received your message3");
  });
  // Listen for any kind of message. There are different kinds of
}
botRedactData();
