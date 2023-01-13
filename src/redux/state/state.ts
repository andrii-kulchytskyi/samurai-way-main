export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello hor u', likeCount: 2},
                {id: 2, message: 'It is my first post,', likeCount: 2},
            ],
            addPostCallback: () => store.addPost,
            newMessageTextPost: "",
            changeNewTextCallback: () => store.changeNewText
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
    changeNewText(newText: string) {
        this._state.profilePage.newMessageTextPost = newText
        this.onChange()
    },
    addPost(postMessage: string) {
        let newPost: PostType = {id: new Date().getTime(), message: postMessage, likeCount: 0}
        this._state.profilePage.posts.push(newPost)
        this.onChange()
    },
    onChange() {
        console.log("type of b1tCH")
    },
    subscribe(callback: () => void) {
        this.onChange = callback
    },
    getState() {
        return this._state
    }
}

export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (postMessage: string) => void
    onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
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

}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType

}




