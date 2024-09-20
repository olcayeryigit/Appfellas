import axios from 'axios';

// API ana URL'sini merkezi bir yerden yönetmek için
const API_BASE_URL = 'http://localhost:5000/api';

// Uçuş bilgilerini belirli bir sayfadan almak için fonksiyon
export const fetchFlights = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/flights?page=${page}`);
  return response.data;
};