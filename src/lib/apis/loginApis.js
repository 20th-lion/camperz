import axiosPublic from './customAxios';

export const getLoginApiResponse = async (inputs) => {
  const reqPath = '/user/login';
  const loginData = {
    user: inputs,
  };
  const headers = {
    'Content-type': 'application/json',
  };
  try {
    const res = await axiosPublic.post(reqPath, loginData, { headers });
    return res;
  } catch (error) {
    return error;
  }
};
