import client from "./client";

export const getPostList = async () => {

    const reqPath = "/post/rkwl123/userpost";

    const res = await client.get(reqPath)
    return res

}