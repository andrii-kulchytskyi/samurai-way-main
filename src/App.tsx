import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {addPostAC, StoreType} from "./redux/state/state";
import {type} from "os";


type PropsType = {
    store: StoreType
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
                                              newMessageTextPost={state.profilePage.newMessageTextPost}
                                              dispatch={props.store.dispatch.bind(props.store)}
                                              addPostCallback={props.store.dispatch.bind(props.store)}
                                              changeNewTextCallback={props.store.dispatch.bind(props.store)}/>}/>
                <div className={"component"}>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
