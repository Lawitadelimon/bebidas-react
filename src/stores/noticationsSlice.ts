import { StateCreator } from "zustand"
import { FavoritesSliceType } from "./favoritesSlice"

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationsSliceType = {
    notification: Notification,
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    closeNotification:() => void

}

export const createNotificationsSlice: StateCreator<NotificationsSliceType & FavoritesSliceType, [], [], NotificationsSliceType> = (set, get) => ({
    notification:{
        text: '',
        error: false,
        show: false
    },
    showNotification:(payload) => {
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    setTimeout(() => {
        get().closeNotification()
    }, 5000)
},
    closeNotification:() => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    }
    
})