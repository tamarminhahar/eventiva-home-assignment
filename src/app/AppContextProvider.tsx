import type { ReactNode } from 'react'
import { AppContext } from './AppContext'

interface Props {
  children: ReactNode
}

export function AppContextProvider({ children }: Props) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}
