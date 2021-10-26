import axios from 'axios';
import {API_URL} from '@env';
import {User} from '../user/User';

export default async () => {
  let user = new User();

  const Xtoken = await user.getXactionToken();

  return axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'token': Xtoken,
    },
  });
};
