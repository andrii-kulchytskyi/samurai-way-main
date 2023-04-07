import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "ab4e7bad-7037-4229-aff4-5320ac328a0a"}
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
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getHeaderUser() {
        return instance.get(`auth/me`).then(response => {
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
    getStatus(){

    }

}