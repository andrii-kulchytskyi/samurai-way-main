import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "9437dc73-8194-4dc8-a1ae-3603ed1650f0"}
})

export const usersAPI = {
    getUs(currentPage: number, pageSize: number) {
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
}

export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.post(`profile/status/}`, {status: status}).then(response => {
            return response.data
        })
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean=false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
}