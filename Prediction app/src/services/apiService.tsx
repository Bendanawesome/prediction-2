// src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = "https://github.com/honourable12/PredictiveLab/blob/main/model_api/app.py; "// Change to your backend URL

export const uploadData = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData);
    return response.data;
  } catch (error) {
    console.error("Error uploading data:", error);
    throw error;
  }
};

export const trainModel = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/train`);
    return response.data;
  } catch (error) {
    console.error("Error training model:", error);
    throw error;
  }
};
export const apiService = {
  register: async (data: any) => {
    // Registration logic
  },
};


// You can add more functions here for other API endpoints
