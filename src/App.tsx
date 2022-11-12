import React from 'react';
import './App.css';
import Header from "./Header";
import Profile from "./Profile";
import Navbar from "./Navbar";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>

        </div>
    );
}
export default App;
