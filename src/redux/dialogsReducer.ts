import {ActionsType, DialogPageType} from "./state/store";

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
