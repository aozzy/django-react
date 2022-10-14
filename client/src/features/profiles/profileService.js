import axios from "axios";

const GET_PROFILE = "/api/v1/profile/me/";

const getProfile = async () => {

  const token = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: { Authorization: `Bearer ${token.access}` },
    };
    const response = await axios.get(GET_PROFILE, config);
    return response.data
    // console.log(response);


  

    // const { access } = token;
    // console.log(access);
  
  
};

const profileService = {
  getProfile,
};

export default profileService;
