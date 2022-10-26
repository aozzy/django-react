import React from 'react'
import axios from 'axios'

const ENQUIRE_URL = '/api/v1/enquiries/'


const enquiry = async(data) => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
const response = await axios.post(ENQUIRE_URL,data,config)

return response.data
}

const enquiryService  = {enquiry}

export default enquiryService