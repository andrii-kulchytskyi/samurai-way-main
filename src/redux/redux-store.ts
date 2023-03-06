import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";


export let rootReducer = combineReducers({
    profilePageReducer: profileReducer,
    dialogsPageReducer: dialogsReducer,
    sidebarPageReducer: sidebarReducer,
    usersPageReducer: usersReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

let store = legacy_createStore(rootReducer);

export default store