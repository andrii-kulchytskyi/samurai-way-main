import s from "../Dialogs.module.css";
import React from "react";

export type MessageType = {
    message: string
}
export const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How r u?"},
    {id: 3, message: "Bye!"},
]
export const Message = (props: MessageType) => {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>
    )

}