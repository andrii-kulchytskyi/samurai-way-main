import React from 'react';
import s from "./Dialogs.module.css";
import {Message, messages} from "./Messages/Message";
import {DialogItem, dialogs} from "./DialogItem/DialogItem";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map(el => {
                    return (
                        <ul>
                            <li><DialogItem name={el.name} id={el.id}/></li>
                        </ul>
                    )
                })}

                <div className={s.messages}>
                    {messages.map(el => {
                        return (
                            <>
                                <Message message={el.message}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;