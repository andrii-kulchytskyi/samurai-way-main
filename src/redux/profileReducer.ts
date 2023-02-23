import React from 'react';
import {ActionsType, PostType, ProfilePageType, StoreType} from "./state/store";

let initState = {
    posts: [
        {id: 1, message: 'Hello hor u', likeCount: 2},
        {id: 2, message: 'It is my first post,', likeCount: 2},
    ],
    newMessageTextPost: "",
}

export const profileReducer = (state:ProfilePageType = initState, action: ActionsType
): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: action.postMessage, likeCount: 0}
            // state.posts.push(newPost)
            // state.onChange()
            state.posts.push(newPost)
            return state
        case "CHANGE-NEW-TEXT":
            // state.newMessageTextPost = action.newText
            // state.onChange()
            state.newMessageTextPost = action.newText
            return state
        default:
            return state
    }
}


export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}