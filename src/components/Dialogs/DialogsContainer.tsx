import {InitialStateDialogsType, sendMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
        dialogsPage: state.dialogsPageReducer,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer