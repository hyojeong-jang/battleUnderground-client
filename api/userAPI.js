import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.0.48:4000',
  timeout: 10000
});

export const saveUserData = (nickname, data) => {
  console.log(nickname)
  api.post(`/users/${nickname}`, {
    // data: {
    //   station: data.station,
    //   train_id: data.train
    // }
  })
}