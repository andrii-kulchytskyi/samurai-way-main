import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {MyDialogsContainerPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const Dialogs = (props: MyDialogsContainerPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return (
            <ul key={el.id}>
                <li><DialogItem name={el.name} id={el.id}/></li>
            </ul>
        )
    })

    const messagesElements = props.dialogsPage.messages.map((el) => {
        return (
            <div key={el.id}>
                <Message message={el.message}/>
            </div>
        )
    })

    // const onClickAddMessage = () => {
    //     props.sendMessage()
    // }
    // const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewMessageBodyCreator(e.currentTarget.value)
    // }
    const addMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <DialogsReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};

type AddMessageFormProps = {
    textarea: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormProps>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your message"} component={'textarea'} name={'newMessageBody'}></Field>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm<AddMessageFormProps>(
    {form: 'dialogAddMessageForm'}
)(AddMessageForm)

export default Dialogs;