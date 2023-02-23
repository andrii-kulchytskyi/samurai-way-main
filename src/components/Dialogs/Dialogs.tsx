import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogPageType, store} from "../../redux/state/store";
import {sendMessageAC, updateMessageAC} from "../../redux/state/dialogsReducer";
import {changeNewTextAC} from "../../redux/state/profileReducer";


const Dialogs = (props: DialogPageType) => {

        const onClickAddMessage = () => {
            props.dispatch(sendMessageAC())
        }
        const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateMessageAC(e.currentTarget.value))
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.dialogs.map(el => {
                        return (
                            <ul>
                                <li><DialogItem name={el.name} id={el.id}/></li>
                            </ul>
                        )
                    })}

                    <div className={s.messages}>
                        {store.getState().dialogPage.messages.map((el, index) => {
                            return (
                                <div key={index}>
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