import axios from "axios";

export const requests = {
  getJokes: async function () {
    try {
      let result = await axios.get('https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten');
      return result.data;
    } catch(e) {
      console.warn(e);
      throw new Error('Ошбика загруки');
    }
  }
}
