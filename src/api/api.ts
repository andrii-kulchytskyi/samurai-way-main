import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "9437dc73-8194-4dc8-a1ae-3603ed1650f0"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    getProfileUser(userId: string) {
        return profileAPI.getProfileUser(`profile/${userId}`).then(response => {
            return response.data
        })
    },
}

export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId: string) {
        return instance.get(`status/${userId}`).then(response => {
            return response.data
        })
    },
    // updateStatus(userId: string) {
    //     return instance.post(`status/${userId}`, {status: status}).then(response => {
    //         return response.data
    //     })
    // }
}