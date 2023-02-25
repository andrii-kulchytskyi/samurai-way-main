import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogPageType, store} from "../../redux/state/store";
import {sendMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import {changeNewTextAC} from "../../redux/profileReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props: any) => {

        let state = store.getState().dialogPage

        const onClickAddMessage = () => {
            // props.dispatch(sendMessageAC())
            props.store.dispatch.sendMessageAC()
        }
        const onChangeMessage = (body: any) => {
            // props.dispatch(updateMessageAC(e.currentTarget.value))
            props.store.dispatch.updateMessageAC(body)
        }

        return (
            <Dialogs dialogsPage={state} updateMessageBody={onChangeMessage} sendMessage={onClickAddMessage}/>
        );
    }
;

export default DialogsContainer;