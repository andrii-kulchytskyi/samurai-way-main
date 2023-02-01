import React from 'react';
import ReactDOM from 'react-dom';
import App from "../../App";
import {RootStateType, store} from "./state";


export let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

renderTree(store.getState())
store.subscribe(() => renderTree)


