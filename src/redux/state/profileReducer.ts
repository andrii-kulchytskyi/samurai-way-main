import React from 'react';
import {PostType} from "./state";

export const profileReducer = (action: any, state: any) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: new Date().getTime(), message: action.postMessage, likeCount: 0}
            state.posts.push(newPost)
            // state.onChange()
            return state
        case "CHANGE-NEW-TEXT":
            state.newMessageTextPost = action.newText
            // state.onChange()
            return state
    }
}
