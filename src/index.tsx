import React from 'react';
import ReactDOM from 'react-dom';
import {StateType, store} from "./redux/state/store";
import App from "./App";


export let renderTree = (state: StateType) => {
    ReactDOM.render(
        <App
            store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

renderTree(store.getState())
store.subscribe(() => renderTree)

