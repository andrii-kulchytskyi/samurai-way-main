import React from 'react';
import {AllReturnTypes, PostType} from "./state";

export const profileReducer = (action: AllReturnTypes, state: any) => {
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
// export const changeNewTextAC = (newText: string) => {
//     return {
//         type: "CHANGE-NEW-TEXT",
//         newText: newText
//     } as const
// }
//
// export const addPostAC = (postMessage: string) => {
//     return {
//         type: "ADD-POST",
//         postMessage: postMessage
//     } as const
// }