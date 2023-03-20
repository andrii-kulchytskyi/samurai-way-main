import {ActionsType} from "./store";


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
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUsersDataAC = (userId: string, email: string, login: string) => {
    return {
        type: "SET_USERS_DATA",
        data: {userId, email, login}
    } as const
}

