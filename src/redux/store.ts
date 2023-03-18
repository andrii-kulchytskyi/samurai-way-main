import {addPostAC, updateNewPostTextAC, profileReducer, ProfilePageType, setUserProfileAC} from "./profileReducer";
import {dialogsReducer, DialogType, MessageType, sendMessageAC, updateMessageAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from "./usersReducer";


export type ActionsType =
    ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateMessageAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setUserProfileAC>


export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessage: string
}

export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello hor u', likeCount: 2},
//                 {id: 2, message: 'It is my first post,', likeCount: 2},
//             ],
//             newPostText: "",
//             // dispatch: () => store.dispatch
//             // addPostCallback: () => addPostAC,
//             // changeNewTextCallback: () => changeNewTextAC
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Andrii"},
//                 {id: 2, name: "Dmitry"},
//                 {id: 3, name: "Svetlana"},
//                 {id: 4, name: "Yulia"},
//                 {id: 5, name: "Bogdan"},
//                 {id: 6, name: "Valera"},
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How r u?"},
//                 {id: 3, message: "Bye!"},
//             ],
//             newMessage: "",
//             // dispatch: () => store.dispatch
//         },
//
//         sidebar: {},
//     },
//     _onChange(state: StateType) {
//         console.log("type of b1tCH")
//     },
//     subscribe(observer) {
//         this._onChange = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: ActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._onChange(store.getState())
//     }
// }


// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     subscribe: (observer: () => void) => void
//     _onChange: (state: StateType) => void
//     dispatch: (action: ActionsType) => void
// }




