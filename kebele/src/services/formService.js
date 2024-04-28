import axios from "../util/axios";
const formService = {
  idrequest: async (formData) => {
    try {
      console.log(formData);
      const response = await axios.post("request/id", formData);
      // console.log(response);
      return response.data;
    } catch (error) {
      // Handle error from the server or network
      console.error("Error:", error);
      return error.response.data;
    }
  },
  getidrequest: async () => {
    try {
      const response = await axios.get("request/getid");
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return error.response.data;
    }
  },
  birthrequest: async (BCForm) => {
    try {
      const response = await axios.post("request/birth", BCForm);
      return response.data;
    } catch (error) {
      // Handle error from the server or network
      console.error("Error:", error);
      return error.response.data;
    }
  },
  getbirthrequests: async () => {
    try {
      const response = await axios.get("request/getbirth");
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return error.response.data;
    }
  },
  approve: async (data) => {
    console.log(data);
    try {
      const res = await axios.put(`request/approve/${data.id}`, data);
      console.log(res);
      return res.data;
    } catch (error) {
      return error.res.data;
    }
  },
};
export default formService;
