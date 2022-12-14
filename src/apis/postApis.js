import { axiosPrivate } from "./customAxios";

export const getPostList = async () => {

    const reqPath = "/post/rkwl123/userpost";

    const res = await axiosPrivate.get(reqPath)
    return res

}
