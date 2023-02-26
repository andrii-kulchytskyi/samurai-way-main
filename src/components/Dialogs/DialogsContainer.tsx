import {sendMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";
import store from "../../redux/redux-store";


export type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateMessageAC(body))
                    }

                    return (
                        <Dialogs dialogsPage={state}
                                 updateNewMessageBodyCreator={onNewMessageChange}
                                 sendMessage={onSendMessageClick}/>
                    );
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer