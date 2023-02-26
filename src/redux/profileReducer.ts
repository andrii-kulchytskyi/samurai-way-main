import React from 'react';
import {ActionsType, PostType, ProfilePageType, StoreType} from "./store";

let initState = {
    posts: [
        {id: 1, message: 'Hello hor u', likeCount: 2},
        {id: 2, message: 'It is my first post,', likeCount: 2},
    ],
    newMessageTextPost: "",
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionsType
): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: "d", likeCount: 0}
            state.posts.push(newPost)
            return state
        case "CHANGE-NEW-TEXT":
            state.newMessageTextPost = action.newText
            return state
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
