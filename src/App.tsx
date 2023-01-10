import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {addPost, changeNewText, RootStateType} from "./redux/state/state";


const App = (props: RootStateType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogPage.dialogs}
                                                                messages={props.dialogPage.messages}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile posts={props.profilePage.posts} addPostCallback={addPost}
                                              newMessageTextPost={props.profilePage.newMessageTextPost}
                                              changeNewTextCallback={changeNewText}/>}/>
                <div className={"component"}>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
