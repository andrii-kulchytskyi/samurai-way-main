import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {ActionsType, StoreType} from "./redux/state/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App = (props: PropsType) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path={'/dialogs'} render={() => <DialogsContainer
                    store={props.store}
                    // dialogs={state.dialogPage.dialogs}
                    // messages={state.dialogPage.messages}
                    // newMessage={state.dialogPage.newMessage}
                    // dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path={'/profile'}
                       render={() => <Profile store={props.store}

                           // posts={state.profilePage.posts}
                           //                    newMessageTextPost={state.profilePage.newMessageTextPost}
                           // dispatch={props.store.dispatch.bind(props.store)}
                           // addPostCallback={props.store.dispatch.bind(props.store)}
                           // changeNewTextCallback={props.store.dispatch.bind(props.store)}
                       />}

                />
                <div className={"component"}>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
