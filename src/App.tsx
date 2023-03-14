import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <div className={"component"}>
            </div>
        </div>
    );
}
export default App;
