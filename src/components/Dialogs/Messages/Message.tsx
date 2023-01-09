import s from "../Dialogs.module.css";
import React from "react";

export type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>
    )

}