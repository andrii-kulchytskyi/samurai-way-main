import React from 'react';

export const dialogsReducer = (action: any, state: any) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessage = action.body
            // this.onChange()
            return state;
        case "SEND-NEW-MESSAGE":
            let body = state.newMessage
            state.newMessage = ''
            state.messages.push({id: 4, message: body})
            // this.onChange()
            return state;
    }
}