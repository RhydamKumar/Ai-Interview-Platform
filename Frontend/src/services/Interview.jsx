import axios from 'axios'
import { APP_CONSTANT } from "../util/constant";

const BASE_URL = "http://127.0.0.1:8000/interview"

export const StartInterviewAPI = async(sessionId) => {
  try {
    const response =  await axios.get(`${BASE_URL}/start/${sessionId}`)
    return response.data;
    
  } catch (error) {
    console.error("Error:", error)
    
  }
  return null;
};

export const submitAPI = async (payload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/submit`,
      payload
    );

    console.log("Submit API response:", response.data);

    return response.data;

  } catch (error) {
    console.error("Submit API error:", error);
    
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response:", JSON.stringify(error.response.data,null,2));
    }

    return null;
  }
};

export const reportAPI = async (sessionId)=> {
  try {
    const response =  await axios.get(`${BASE_URL}/report/${sessionId}`)
    return response.data;
    
  } catch (error) {
    console.error("Error:", error)
    
  }
  return null;
}

export const endInterviewAPI = async (sessionId)=> {
  try {
    const response =  await axios.put(`${BASE_URL}/end/${sessionId}`)
    return response.data;
    
  } catch (error) {
    console.error("Error:", error)
    
  }
  return null;
}

export const generateQuestionsAPI = async (formdata)=> {
  try {
    const response =  await axios.post(
      `${BASE_URL}/generate-question`,
      formdata,
      {
        headers:{
          "Content-Type": "multipart/form-data",
        }
      }
    
    )
    return response.data;
    
  } catch (error) {
    console.error("Error:", error)
    
  }
  return null;
}