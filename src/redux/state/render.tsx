import React from 'react';
import ReactDOM from 'react-dom';
import App from "../../App";
import {store} from "./state";


export let renderTree = () => {
    debugger
    ReactDOM.render(
        <App
            store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


