import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";


export let rootReducer = combineReducers({
    profilePageReducer: profileReducer,
    dialogsPageReducer: dialogsReducer,
    sidebarPageReducer: sidebarReducer,
    usersPageReducer: usersReducer,
    authReducer: authReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store