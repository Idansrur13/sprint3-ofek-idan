const { createContext, useContext } = React

export const MailContext = createContext(null)

export function useMailContext() {
  const context = useContext(MailContext)
  if (!context) {
    throw new Error("useMailContext must be used within a MailProvider")
  }
  return context
}