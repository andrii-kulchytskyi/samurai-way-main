import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const dialogs = [
    {id: 1, name: "Andrii"},
    {id: 2, name: "Dmitry"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Yulia"},
    {id: 5, name: "Bogdan"},
    {id: 6, name: "Valera"},
]

