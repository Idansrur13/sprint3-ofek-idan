import { MailList } from "../cmps/MailList.jsx"
import { useMailContext } from "../context/MailContext.jsx"

export function MailListPage() {
  const { emails, isSentEmails, onRemoveMail, onToggleRead, onSaveMail } =
    useMailContext()
  return (
    <MailList
      emails={emails}
      isSentEmails={isSentEmails}
      onRemoveMail={onRemoveMail}
      onToggleRead={onToggleRead}
      onSaveMail={onSaveMail}
    />
  )
}
