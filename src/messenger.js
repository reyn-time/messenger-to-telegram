import axios from "axios";

const getFacebookName = async (senderId) => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/${senderId}?fields=name`,
      {
        params: { access_token: process.env.FACEBOOK_PAGE_ACCESS_TOKEN },
      }
    );
    console.log(response.data);
    return response.data?.name ?? "Unknown";
  } catch {
    return "Unknown";
  }
};

export default getFacebookName;
