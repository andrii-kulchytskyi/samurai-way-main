import {ActionsType} from "./store";


export type InitialStateUserType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}

export type PhotosUrlType = {
    small: string,
    large: string
}
export type UserType = {
    id: number,
    photos: PhotosUrlType,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
export type LocationType = {
    city: string,
    country: string
}

let initState: InitialStateUserType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}


export const usersReducer = (state: InitialStateUserType = initState, action: ActionsType): InitialStateUserType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)
            }
        case "SET_USERS":
            return {
                ...state, users: [...state.users, ...action.payload.users
                ]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const
}

