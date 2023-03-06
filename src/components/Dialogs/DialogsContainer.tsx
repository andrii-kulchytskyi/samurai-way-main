import {sendMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from 'react';
import {StateType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPageReducer
    }
}
let mapDispatchToProps = (dispatch: any) => {
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