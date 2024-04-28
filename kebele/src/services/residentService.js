import axios from "../util/axios";

const residentService = {
  register: async (residentData) => {
    console.log(residentData);
    try {
      const response = await axios.post("resident/register", residentData);
      console.log(response);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getAll: async () => {
    try {
      const response = await axios.get("resident/getall");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};
export default residentService;
