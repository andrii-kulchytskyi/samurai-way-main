import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";

//const middlewares = [ReduxThunk]

export let rootReducer = combineReducers({
    profilePageReducer: profileReducer,
    dialogsPageReducer: dialogsReducer,
    sidebarPageReducer: sidebarReducer,
    usersPageReducer: usersReducer,
    authReducer: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export  type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>


export default store