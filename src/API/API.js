import axios from 'axios';
import { updateData } from 'utils/updateData';

axios.defaults.baseURL = 'https://eliftech.onrender.com/eliftech/api/';

export const getData = async () => {
  const { data } = await axios.get('/shopsList');

  const newData = updateData(data.data.result);
  return newData;
};

export const getHistory = async () => {
  const { data } = await axios.get('/history');

  return data.data.result;
};

export const addHistory = async history => {
  const { data } = await axios.post('history', history);

  return data.data.result;
};
