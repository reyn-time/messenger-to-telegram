import axios from "axios";

const sendTelegramMessage = (text) => {
  axios
    .get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        params: {
          chat_id: process.env.CHAT_ID,
          text: `Inbox 📪: ${text}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export default sendTelegramMessage;
