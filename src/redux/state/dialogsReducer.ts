import React from 'react';
import {addPostAC, changeNewTextAC} from "./profileReducer";
import {ActionsType, DialogPageType} from "./store";

export const dialogsReducer = (state: DialogPageType, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessage = action.body
            // state.onChange()
            return state;

        case "SEND-NEW-MESSAGE":
            let body = state.newMessage
            state.newMessage = ''
            state.messages.push({id: 4, message: body})
            // state.onChange()
            return state;
        default:
            return state
    }
}
export const updateMessageAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND-NEW-MESSAGE",
    } as const
}
