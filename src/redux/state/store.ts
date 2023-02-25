import {addPostAC, changeNewTextAC, profileReducer} from "../profileReducer";
import {dialogsReducer, sendMessageAC, updateMessageAC} from "../dialogsReducer";
import {sidebarReducer} from "../sidebarReducer";

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello hor u', likeCount: 2},
                {id: 2, message: 'It is my first post,', likeCount: 2},
            ],
            newMessageTextPost: "",
            // dispatch: () => store.dispatch
            // addPostCallback: () => addPostAC,
            // changeNewTextCallback: () => changeNewTextAC
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
            ],
            newMessage: "",
            // dispatch: () => store.dispatch
        },

        sidebar: {},
    },
    _onChange() {
        console.log("type of b1tCH")
    },
    subscribe(observer) {
        this._onChange = observer
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
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange()

        // if (action.type === "ADD-POST") {
        //     let newPost: PostType = {id: new Date().getTime(), message: action.postMessage, likeCount: 0}
        //     this._state.profilePage.posts.push(newPost)
        //     this.onChange()
        // } else if (action.type === "CHANGE-NEW-TEXT") {
        //     this._state.profilePage.newMessageTextPost = action.newText
        //     this.onChange()
        // } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        //     this._state.dialogPage.newMessage = action.body
        //     this.onChange()
        // } else if (action.type === "SEND-NEW-MESSAGE") {
        //     let body = this._state.dialogPage.newMessage
        //     this._state.dialogPage.newMessage = ''
        //     this._state.dialogPage.messages.push({id: 4, message: body})
        //     this.onChange()
        // }
    }
}


export type StoreType = {
    // changeNewText: (newText: string) => void
    // addPost: (postMessage: string) => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    _onChange: () => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateMessageAC>
    | ReturnType<typeof sendMessageAC>

//
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

// export const updateMessageAC = (body: string) => {
//     return {
//         type: "UPDATE-NEW-MESSAGE-BODY",
//         body: body
//     } as const
// }
//
// export const sendMessageAC = () => {
//     return {
//         type: "SEND-NEW-MESSAGE",
//     } as const
// }

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
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
    // dispatch: (action: ActionsType) => void
}

export type ProfilePageType = {
    posts: PostType[]
    newMessageTextPost: string
    // dispatch: (action: ActionsType) => void
    // changeNewTextCallback: (newText: string) => void
    // addPostCallback: (postMessage: string) => void

}
export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType

}



