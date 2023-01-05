import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/profile'} component={Profile}/>
                {/*<Profile/>*/}
                <div className={"component"}>
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
