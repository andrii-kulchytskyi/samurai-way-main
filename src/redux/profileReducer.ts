import {ActionsType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type InitialStateProfileType = {
    posts: PostType[]
    newPostText: string,
    profile: number
    status: string
}
let initState = {
    posts: [
        {id: 1, message: 'Hello hor u', likeCount: 2},
        {id: 2, message: 'It is my first post,', likeCount: 2},
    ] as PostType[],
    newPostText: "",
    profile: 2,
    status: ""
}

export const profileReducer = (state: InitialStateProfileType = initState, action: ActionsType): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: action.newPostText, likeCount: 0}
            return {...state, posts: [...state.posts, newPost]}

        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}


export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST", newPostText
    } as const
}
export const setUserProfileAC = (profile: number) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}


export const getUserProfile = (userID: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getProfileUser(userID).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}

export const getStatus = (userID: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getStatus(status).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setStatusAC(response.data))
    })
}