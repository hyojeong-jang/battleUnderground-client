import axios from 'axios';
import getEnvVars from '../environment';

const { HOST_URL } = getEnvVars();

const api = axios.create({
  baseURL: HOST_URL,
  timeout: 10000
});

export const saveUserData = async (nickname, train, station) => {
  const response = await api.post(`/api/users/${nickname}`, {
    data: {
      station,
      train
    }
  })
  return response.data.userDocument;
}

export const receiveUserData = async (id, nickname) => {
  const response = await api.put(`/api/users/${id}`, {
    data: nickname
  });
  return response.data.userDocument;
}
