import axios from 'axios'

const GET_PROFILE  = '/api/v1/profile/me/'


const getProfile = async () => {
  const token = localStorage.getItem('user')
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer  ${token}`
    }
  }
const response = await axios.get(GET_PROFILE,config)
console.log(response.data);

}


const profileService = {
  getProfile
}


export default profileService