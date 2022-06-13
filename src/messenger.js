import axios from "axios";

const sendFacebookMessage = (senderId, text) => {
  axios
    .post(
      "https://graph.facebook.com/v2.6/me/messages",
      {
        messaging_type: "RESPONSE",
        recipient: { id: senderId },
        message: { text },
      },
      { params: { access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN } }
    )
    .catch((error) => {
      console.log(error);
    });
};

export default sendFacebookMessage;
