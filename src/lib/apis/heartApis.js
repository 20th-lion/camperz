import { axiosPrivate } from "./customAxios";

export const addHeart = async (id) => {

    const reqPath = `/post/${id}/heart`;

    const res = await axiosPrivate.post(reqPath)
    return res

}

export const deleteHeart = async (id) => {

    const reqPath = `/post/${id}/unheart`;

    const res = await axiosPrivate.delete(reqPath)
    return res

}