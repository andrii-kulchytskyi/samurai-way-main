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

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        payload: {
            totalUsersCount
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userID: number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        payload: {
            isFetching,
            userID
        }
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUsersCount(data.totalUsersCount))
            dispatch(setUsers(data.items))
        });
    }
}

export const unFollowTC = (userID: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleIsFollowingProgress(true, userID))
        usersAPI.unFollowUser(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        });
    }
}
export const followTC = (userID: number) => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(toggleIsFollowingProgress(true, userID))
        usersAPI.followUser(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(follow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID))
        });
    }
}