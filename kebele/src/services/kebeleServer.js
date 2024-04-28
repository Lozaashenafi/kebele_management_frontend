import axios from "../util/axios";

const kebeleServer = {
  register: async (kebeleData) => {
    console.log(kebeleData);
    try {
      const response = await axios.post("kebele/register", kebeleData);

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getAll: async () => {
    try {
      const response = await axios.get("kebele/getall");
      // console.log(response);
      return response.data;
    } catch (error) {
      // console.log(error);
      return error.response.data;
    }
  },
  delete: async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`kebele/delete/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      // console.log(error);
      return error.response.data;
    }
  },
  update: async (formData) => {
    console.log(formData);
    try {
      const response = await axios.put(
        `kebele/update/${formData.id}`,
        formData
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};

export default kebeleServer;
