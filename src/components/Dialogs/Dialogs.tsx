import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogPageType, state} from "../../redux/state/state";


const Dialogs = (props: DialogPageType) => {
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
                    {state.dialogPage.messages.map(el => {
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