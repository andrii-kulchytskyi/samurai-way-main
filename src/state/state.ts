import React from 'react';


export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello hor u', likeCount: 2},
            {id: 2, message: 'It is my first post,', likeCount: 2},
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Andrii"},
            {id: 2, name: "Dmitry"},
            {id: 3, name: "Svetlana"},
            {id: 4, name: "Yulia"},
            {id: 5, name: "Bogdan"},
            {id: 6, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How r u?"},
            {id: 3, message: "Bye!"},
        ]
    },


    sidebar: {}
}

const addPost = (post: string) => {
    let newPost = {id: 5, message: post, likeCount: 0}
    state.profilePage.posts.push(newPost)
}
