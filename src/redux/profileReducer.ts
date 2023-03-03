import React from 'react';
import {ActionsType, PostType, ProfilePageType} from "./store";

let initState = {
    posts: [
        {id: 1, message: 'Hello hor u', likeCount: 2},
        {id: 2, message: 'It is my first post,', likeCount: 2},
    ],
    newPostText: "",
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionsType
): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: state.newPostText, likeCount: 0}
            // state.posts.push(newPost)
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = "";
            return stateCopy
        case "CHANGE-NEW-TEXT":
            let stateCopyCha = {...state}
            stateCopyCha.newPostText = action.newText
            return stateCopyCha
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
