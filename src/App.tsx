import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/common/LoginPage";


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>

            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/login'} render={() => <LoginPage/>}/>
            <Route path={'/profile:userId?'}
                   render={() => <ProfileContainer/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <div className={"component"}>
            </div>
        </div>
    );
}
export default App;
