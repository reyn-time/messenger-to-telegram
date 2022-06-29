import axios from "axios";

const sendTelegramMessage = (name, text) => {
  axios
    .get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        params: {
          chat_id: process.env.CHAT_ID,
          text: `*Inbox* 📪 (${name})\n${text}`,
          parse_mode: "markdown",
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export default sendTelegramMessage;
