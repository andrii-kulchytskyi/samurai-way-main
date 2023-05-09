import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {MyDialogsContainerPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props: MyDialogsContainerPropsType) => {

        const dialogsElements = props.dialogsPage.dialogs.map((el, index) => {
            return (
                <ul key={el.id}>
                    <li><DialogItem name={el.name} id={el.id}/></li>
                </ul>
            )
        })

        const messagesElements = props.dialogsPage.messages.map((el, index) => {
            return (
                <div key={el.id}>
                    <Message message={el.message}/>
                </div>
            )
        })

        const onClickAddMessage = () => {
            props.sendMessage()
        }
        const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewMessageBodyCreator(e.currentTarget.value)
        }


        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                    <div className={s.messages}>
                        {messagesElements}
                    </div>
                    <textarea placeholder={"Enter your message"} value={props.dialogsPage.newMessage}
                              onChange={onChangeMessage}></textarea>
                    <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
                    <div>
                        <button onClick={onClickAddMessage}>Add message</button>
                    </div>
                </div>
            </div>
        );
    }
;
const DialogsReduxForm = reduxForm<DataFormType>(
    {form: 'login'}
)(Dialogs)

export default Dialogs;