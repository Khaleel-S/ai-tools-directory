// contexts/CompareContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface CompareContextType {
  comparedTools: string[]
  toggleCompare: (id: string) => void
  clearCompare: () => void
}

const CompareContext = createContext<CompareContextType | undefined>(undefined)

export function CompareProvider({ children }: { children: ReactNode }) {
  const [comparedTools, setComparedTools] = useState<string[]>([])

  const toggleCompare = (id: string) => {
    setComparedTools(prev => 
      prev.includes(id) 
        ? prev.filter(toolId => toolId !== id)
        : [...prev, id].slice(0, 4) // Max 4 tools
    )
  }

  const clearCompare = () => setComparedTools([])

  return (
    <CompareContext.Provider value={{ comparedTools, toggleCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  )
}

export const useCompare = () => {
  const context = useContext(CompareContext)
  if (!context) throw new Error('useCompare must be used within CompareProvider')
  return context
}
