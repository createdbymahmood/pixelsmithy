import {produce} from 'immer'
import {create} from 'zustand'

interface LayoutStore {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  sidebarOpen: true,

  toggleSidebar: () => {
    set(
      produce((state: LayoutStore) => {
        state.sidebarOpen = !state.sidebarOpen
      }),
    )
  },
}))
