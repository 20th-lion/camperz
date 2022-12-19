import { axiosPublic } from '../apis/customAxios';


const reqPath = '/user/checktoken';
let isValid = false;

export const isValidToken = async () => {
  await axiosPublic.get(reqPath).then((res) => {
    isValid = res.data.isValid;
  });
  return isValid;
};
