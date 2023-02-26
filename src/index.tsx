import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from './redux/redux-store';
import {StateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider} from "./StoreContext";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
               <Provider store={store}>
                   <App/>
               </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
