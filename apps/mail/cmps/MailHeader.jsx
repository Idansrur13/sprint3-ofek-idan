import { MailFilter } from "./MailFilter.jsx"
import { icons } from "../services/mail.icons.js"
export function MailHeader({ filterBy, onSetFilterBy, onClearFilter }) {
  return (
    <section className="mail-header">
      <section className="mail-menu">{icons.menu}</section>
      <div className="gmail">{icons.gmail}</div>
      <MailFilter
        filterBy={filterBy}
        onSetFilterBy={onSetFilterBy}
        onClearFilter={onClearFilter}
      />
      <div className="profile-icons">
        <span>{icons.support}</span>
        <span>{icons.settings}</span>
        <span>{icons.googleApps}</span>
        <span>
        {icons.Gemini}
        </span>
        <span>{icons.profile}</span>
      </div>
    </section>
  )
}
