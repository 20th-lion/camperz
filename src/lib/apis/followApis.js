import { axiosPrivate } from "./customAxios";

export const followUser = async (accountname) => {

    const reqPath = `/profile/${accountname}/follow`;

    const res = await axiosPrivate.post(reqPath)
    return res
}

export const unfollowUser = async (accountname) => {

    const reqPath = `/profile/${accountname}/unfollow`;

    const res = await axiosPrivate.delete(reqPath)
    return res
}

export const followerList = async (accountname) => {

    const reqPath = `/profile/${accountname}/follower`;

    const res = await axiosPrivate.get(reqPath)
    return res
}

export const followingList = async (accountname) => {

    const reqPath = `/profile/${accountname}/following`;

    const res = await axiosPrivate.get(reqPath)
    return res
}