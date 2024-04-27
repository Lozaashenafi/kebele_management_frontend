import { message } from "antd";
import axios from "../util/axios";
// const profileData = {
//   id,
//   firstName,
//   middleName,
//   lastName,
//   job,
//   kebele,
//   phone,
//   email,
// };
// const passwordData = { currentPassword, newPassword, confirmPassword, id };
const profileService = {
  register: async (userdata) => {
    console.log(userdata);
    try {
      const response = await axios.post("user/register", userdata);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  },
  ChangePassword: async (passwordData) => {
    try {
      const response = await axios.put(`/api/profile/:${id}`, passwordData);
      if (response.data.success) {
        return { success: true, message: "changed " };
      }
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
  changeProfile: async (profileData) => {
    try {
      const response = await axios.put(`/api/profile/:${id}`, profileData);
      if (response.data.success) {
        return { success: true, message: "changed " };
      }
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
};
export default profileService;
