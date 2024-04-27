import axios from "../util/axios";
const formService = {
  idrequest: async (formData) => {
    try {
      const response = await axios.post("request/id", formData);
      console.log(response);
      if (response.data.success) {
        // Handle success response from the server
      } else {
        // Handle failure response from the server
      }
    } catch (error) {
      // Handle error from the server or network
      console.error("Error:", error);
    }
  },
  BirthRequest: async (BCForm) => {
    try {
      const response = await axios.post("request/birth", BCForm);
      if (response.data.success) {
        // Handle success response from the server
      } else {
        // Handle failure response from the server
      }
    } catch (error) {
      // Handle error from the server or network
      console.error("Error:", error);
    }
  },
};
export default formService;
