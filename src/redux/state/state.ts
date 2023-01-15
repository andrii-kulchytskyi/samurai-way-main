export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello hor u', likeCount: 2},
                {id: 2, message: 'It is my first post,', likeCount: 2},
            ],
            addPostCallback: () => store.dispatch,
            newMessageTextPost: "",
            changeNewTextCallback: () => store.dispatch
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

        sidebar: {},
    },
    onChange() {
        console.log("type of b1tCH")
    },
    subscribe(callback: () => void) {
        this.onChange = callback
    },
    getState() {
        return this._state
    },
    // changeNewText(newText: string) {
    //     this._state.profilePage.newMessageTextPost = newText
    //     this.onChange()
    // },
    // addPost(postMessage: string) {
    //     let newPost: PostType = {id: new Date().getTime(), message: postMessage, likeCount: 0}
    //     this._state.profilePage.posts.push(newPost)
    //     this.onChange()
    // },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostType = {id: new Date().getTime(), message: action.postMessage, likeCount: 0}
            this._state.profilePage.posts.push(newPost)
            this.onChange()
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.newMessageTextPost = action.newText
            this.onChange()
        }
    }
}


export type StoreType = {
    // changeNewText: (newText: string) => void
    // addPost: (postMessage: string) => void
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    onChange: () => void
    dispatch: (action: ReturnType<typeof changeNewTextAC> | ReturnType<typeof addPostAC>) => void
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
    addPostCallback: (postMessage: string) => void
    newMessageTextPost: string
    changeNewTextCallback: (newText: string) => void
    dispatch: (action: ReturnType<typeof changeNewTextAC> | ReturnType<typeof addPostAC>) => void

}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType

}




