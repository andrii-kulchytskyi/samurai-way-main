import {ActionsType} from "./store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


export type InitialStateUserType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
                ...state, users: action.payload.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.payload.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userID]
                    : state.followingInProgress.filter(id => id != action.payload.userID)
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}
export const toggleIsFollowingProgressAC = (isFetching: boolean, userID: number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        payload: {
            isFetching,
            userID
        }
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setTotalUsersCountAC(data.totalUsersCount))
            dispatch(setUsersAC(data.items))
        });
    }
}