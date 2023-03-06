import {ActionsType} from "./store";


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

let initState = {
    dialogs: [
        {id: 1, name: "Andrii"},
        {id: 2, name: "Dmitry"},
        {id: 3, name: "Svetlana"},
        {id: 4, name: "Yulia"},
        {id: 5, name: "Bogdan"},
        {id: 6, name: "Valera"},
    ] as DialogType[],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How r u?"},
        {id: 3, message: "Bye!"},
    ] as MessageType[],
    newMessage: "",
}

export type InitialStateDialogsType = typeof initState
export const dialogsReducer = (state: InitialStateDialogsType = initState, action: ActionsType): InitialStateDialogsType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessage: action.body}

        case "SEND-NEW-MESSAGE":
            let message = state.newMessage
            return {...state, newMessage: "", messages: [...state.messages, {id: 5, message: message}]};
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
