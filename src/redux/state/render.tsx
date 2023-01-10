import React from 'react';
import ReactDOM from 'react-dom';
import App from "../../App";
import {RootStateType} from "./state";


export let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App dialogPage={state.dialogPage} profilePage={state.profilePage} sidebar={state.sidebar}
             />,
        document.getElementById('root')
    );
}


