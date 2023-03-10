import {ActionsType} from "./store";


export type InitialStateUserType = {
    users: UserType[]
}

export type PhotosUrlType = {
    small: string,
    large: string
}
export type UserType = {
    id: number,
    photos: PhotosUrlType,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
export type LocationType = {
    city: string,
    country: string
}

let initState: InitialStateUserType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://s3.amazonaws.com/shecodesio-production/candidates/avatars/000/024/058/medium/AEBA52B5-3261-4D0D-896B-EEF5CE8079C1.jpeg?1652433732",
        //     followed: false,
        //     fullName: "Yuliia Sulima",
        //     status: "Ya bulka bulka bulka",
        //     location: {city: "Dubai", country: "United Arab Emirates"}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://s3.amazonaws.com/shecodesio-production/candidates/avatars/000/024/058/medium/AEBA52B5-3261-4D0D-896B-EEF5CE8079C1.jpeg?1652433732",
        //     followed: true,
        //     fullName: "Rashid Al bin",
        //     status: "Ya sheikh",
        //     location: {city: "Kharkiv", country: "Ukraine"}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://s3.amazonaws.com/shecodesio-production/candidates/avatars/000/024/058/medium/AEBA52B5-3261-4D0D-896B-EEF5CE8079C1.jpeg?1652433732",
        //     followed: false,
        //     fullName: "Dimych",
        //     status: "Ya boss",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
    ]
}


export const usersReducer = (state: InitialStateUserType = initState, action: ActionsType): InitialStateUserType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)
            }
        case "SET_USERS":
            return {
                ...state, users: [...state.users, ...action.payload.users
                ]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const
}

