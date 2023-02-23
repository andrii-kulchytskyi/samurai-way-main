import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from './redux/redux-store';
import {StateType} from "./redux/state/store";


export let renderTree = (state: StateType) => {
    ReactDOM.render(
        <App
            store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})

