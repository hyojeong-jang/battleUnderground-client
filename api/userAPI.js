import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.35:4000',
  timeout: 10000
});

export const saveUserData = async (nickname, train, station) => {
  const response = await api.post(`/api/users/${nickname}`, {
    data: {
      station,
      train
    }
  })

  return response;
}