import axios from 'axios'

export const callAPI = async ({
  endpoint,
  method,
  headers,
  params,
  data,
  baseUrl,
}) => {
  const baseURL = baseUrl || import.meta.env.VITE_BASE_URL
  const option = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data,
  }
  const response = await axios(option)
  return response?.data
}
