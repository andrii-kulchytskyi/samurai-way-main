import {InitialStateDialogsType, sendMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from 'react';
import {DialogPageType, StateType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateProfileType} from "../../redux/profileReducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType,
}
type MapDispatchToPropsType = {
    updateNewMessageBodyCreator: (text: string) => void
    sendMessage: () => void
}

export type MyDialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPageReducer
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBodyCreator: (body: string) => {
            dispatch(updateMessageAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer