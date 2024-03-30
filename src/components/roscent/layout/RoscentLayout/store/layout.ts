import {produce} from 'immer'
import {create} from 'zustand'

interface LayoutStore {
  sidebarOpen: boolean
  toggleSidebar: () => void

  notificationsOpen: boolean
  toggleNotifications: () => void
}

export const useRoscentLayoutStore = create<LayoutStore>((set) => ({
  notificationsOpen: false,
  sidebarOpen: true,
  toggleNotifications: () => {
    set(
      produce((state: LayoutStore) => {
        state.notificationsOpen = !state.notificationsOpen
      }),
    )
  },
  toggleSidebar: () => {
    set(
      produce((state: LayoutStore) => {
        state.sidebarOpen = !state.sidebarOpen
      }),
    )
  },
}))
