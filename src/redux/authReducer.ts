import {ActionsType} from "./store";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";

export type InitialStateAuthType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}

let initState: InitialStateAuthType = {
    userId: "",
    email: "",
    login: "",
    isAuth: false
}

export const authReducer = (state: InitialStateAuthType = initState, action: ActionsType): InitialStateAuthType => {
    switch (action.type) {
        case "SET_USERS_DATA":
            return {
                ...state, ...action.payload, isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUsersDataAC = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: "SET_USERS_DATA",
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.authMe().then(response => {
        if (response.data.statusCode == 0) {
            let {userId, login, email} = response.data.data
            dispatch(setAuthUsersDataAC(userId, email, login, true))
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.statusCode === 0) {
            dispatch(getAuthUserDataTC())
        }
    })
}
export const logOutTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout().then(response => {
        if (response.data.statusCode === 0) {
            dispatch(setAuthUsersDataAC('', '', '', false))
        }
    })
}


