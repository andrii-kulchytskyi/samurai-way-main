import {ActionsType, DialogPageType} from "./store";

let initState = {
    dialogs: [
        {id: 1, name: "Andrii"},
        {id: 2, name: "Dmitry"},
        {id: 3, name: "Svetlana"},
        {id: 4, name: "Yulia"},
        {id: 5, name: "Bogdan"},
        {id: 6, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How r u?"},
        {id: 3, message: "Bye!"},
    ],
    newMessage: "",
}

export const dialogsReducer = (state: DialogPageType = initState, action: ActionsType): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            let stateCopy = {...state}
            stateCopy.newMessage = action.body
            return stateCopy;

        case "SEND-NEW-MESSAGE":
            let stateCopyCHa = {...state}
            let body = stateCopyCHa.newMessage
            stateCopyCHa.newMessage = ''
            // state.messages.push({id: 4, message: body})
            stateCopyCHa.messages = [...state.messages]
            stateCopyCHa.messages.push({id: 5, message: body})
            return stateCopyCHa;
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
