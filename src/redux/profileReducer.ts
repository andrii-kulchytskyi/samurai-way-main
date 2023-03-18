import {ActionsType} from "./store";
import profile from "../components/Profile/Profile";

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
}


let initState = {
    posts: [
        {id: 1, message: 'Hello hor u', likeCount: 2},
        {id: 2, message: 'It is my first post,', likeCount: 2},
    ] as PostType[],
    newPostText: "",
    profile: 2
}

// export type InitialStateProfileType = typeof initState

export const profileReducer = (state: InitialStateProfileType = initState, action: ActionsType
): InitialStateProfileType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: state.newPostText, likeCount: 0}
            return {...state, newPostText: "", posts: [...state.posts, newPost]}
        case "CHANGE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile

            }
        default:
            return state
    }
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: text
    } as const
}

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const setUserProfileAC = (profile: number) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

