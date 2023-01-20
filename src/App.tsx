import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {addPostAC, AllReturnTypes, changeNewTextAC, StoreType} from "./redux/state/state";


type PropsType = {
    store: StoreType
    dispatch: (action: AllReturnTypes) => void
}

const App = (props: PropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogPage.dialogs}
                                                                messages={state.dialogPage.messages}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile posts={state.profilePage.posts}
                                              dispatch={props.store.dispatch.bind(props.store)}
                                              newMessageTextPost={state.profilePage.newMessageTextPost}
                           // addPostCallback={props.store.dispatch.bind(props.store)}
                           // changeNewTextCallback={props.store.dispatch.bind(props.store)}
                       />}
                />
                <div className={"component"}>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
