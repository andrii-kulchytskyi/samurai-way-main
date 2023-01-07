import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemsType) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>
    )

}
const dialogsData = [
    {id: 1, name: "Andrii"},
    {id: 2, name: "Dmitry"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Yulia"},
    {id: 5, name: "Bogdan"},
    {id: 6, name: "Valera"},
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Andrii"} id={"1"}/>
                <DialogItem name={"Dmitry"} id={"2"}/>
                <DialogItem name={"Sveta"} id={"3"}/>
                <DialogItem name={"Yulia"} id={"4"}/>
                <DialogItem name={"Bogdan"} id={"5"}/>
                <DialogItem name={"Valera"} id={"6"}/>

                <div className={s.messages}>
                    <Message message={"Hello"}/>
                    <Message message={"How r u?"}/>
                    <Message message={"Bye!"}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;