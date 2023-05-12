import {InitialStateDialogsType, sendMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType,
}
type MapDispatchToPropsType = {
    // updateNewMessageBodyCreator: (text: string) => void
    sendMessage: (newMessage: string) => void
}

export type MyDialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPageReducer,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        // updateNewMessageBodyCreator: (body: string) => {
        //     dispatch(updateMessageAC(body))
        // },
        sendMessage: (newMessage: string) => {
            dispatch(sendMessageAC(newMessage))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs)