import create from 'zustand'

// zustandのstoreで管理したいグローバルStateの型定義
type EditedTask = {
  id: string
  title: string | null
}

type LoginUser = {
  id?: string
  email?: string
}

type State = {
  editedTask: EditedTask
  updatedEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}

const useStore = create<State>((set) => ({
  // editedTaskの初期値
  editedTask: { id: '', title: '' },
  updatedEditedTask: (payload) => set({ editedTask: payload }),
  resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),
  loginUser: { id: '', email: '' },
  updateLoginUser: (payload) => set({ loginUser: payload }),
  resetLoginUser: () => set({ loginUser: { id: '', email: '' } }),
}))

export default useStore
