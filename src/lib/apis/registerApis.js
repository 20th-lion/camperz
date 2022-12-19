import axiosPublic from './customAxios';

export const getEmailValidApiResponse = async (email) => {
  const reqPath = '/user/emailvalid';
  const registerData = {
    user: {email},
  };
  const headers = {
    'Content-type': 'application/json',
  };
  try {
    const res = await axiosPublic.post(reqPath, registerData, { headers });
    return res;
  } catch (error) {
    return error;
  }
};

export const getAccountNameValidApiResponse = async (accountname) => {
  // const reqPath = '/user/emailvalid';
  // const registerData = {
  //   user: {email},
  // };
  // const headers = {
  //   'Content-type': 'application/json',
  // };
  // try {
  //   const res = await axiosPublic.post(reqPath, registerData, { headers });
  //   return res;
  // } catch (error) {
  //   return error;
  // }
};

export const getRegisterApiResponse = async (email) => {
  // const reqPath = '/user/emailvalid';
  // const registerData = {
  //   user: {email},
  // };
  // const headers = {
  //   'Content-type': 'application/json',
  // };
  // try {
  //   const res = await axiosPublic.post(reqPath, registerData, { headers });
  //   return res;
  // } catch (error) {
  //   return error;
  // }
};