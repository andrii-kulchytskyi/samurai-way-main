import {StoreType} from "../../redux/store";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";


export type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerType) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateMessageAC(body))
                    }

                    return (
                        <Dialogs dialogsPage={state}
                                 updateNewMessageBodyCreator={onNewMessageChange}
                                 sendMessage={onSendMessageClick}
                        />
                    );
                }
            }
        </StoreContext.Consumer>
    )
}