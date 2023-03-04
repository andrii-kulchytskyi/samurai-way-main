import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import store from "../../redux/redux-store";
import {DialogPageType} from "../../redux/store";


type DialogsType = {
    dialogsPage: DialogPageType
    updateNewMessageBodyCreator: (text: string) => void
    sendMessage: () => void
}
const Dialogs = (props: DialogsType) => {
        const onClickAddMessage = () => {
            props.sendMessage()
        }
        const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewMessageBodyCreator(e.currentTarget.value)
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {store.getState().dialogsPage.dialogs.map((el, index) => {
                        return (
                            <ul key={el.id}>
                                <li><DialogItem name={el.name} id={el.id}/></li>
                            </ul>
                        )
                    })}

                    <div className={s.messages}>
                        {store.getState().dialogsPage.messages.map((el, index) => {
                            return (
                                <div key={el.id}>
                                    <Message message={el.message}/>

                                </div>
                            )
                        })}
                    </div>
                    <textarea placeholder={"Enter your message"} onChange={onChangeMessage}></textarea>
                    <div>
                        <button onClick={onClickAddMessage}>Add message</button>
                    </div>
                </div>
            </div>
        );
    }
;

export default Dialogs;