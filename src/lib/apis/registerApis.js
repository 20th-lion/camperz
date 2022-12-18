import client from './client';

export const getEmailValidApiResponse = async (email) => {
  const reqPath = '/user/emailvalid';
  const registerData = {
    user: {email},
  };
  const headers = {
    'Content-type': 'application/json',
  };
  try {
    const res = await client.post(reqPath, registerData, { headers });
    return res;
  } catch (error) {
    return error;
  }
};
