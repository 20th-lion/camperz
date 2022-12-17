import client from '../lib/apis/client';

const reqPath = '/user/checktoken';
let isValid = false;

export const isValidToken = async () => {
  await client.get(reqPath).then((res) => {
    isValid = res.data.isValid;
  });
  return isValid;
};
