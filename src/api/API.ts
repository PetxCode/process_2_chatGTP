import axios from "axios";

export const makeSearch = async (text: string) => {
  const options = {
    method: "POST",
    url: "https://open-ai21.p.rapidapi.com/chatgpt",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "02dc23aea7msh5cc3022c747fdd7p160805jsn1378c2b79155",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      web_access: false,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
