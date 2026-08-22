import { MailFilter } from "./MailFilter.jsx"
import { icons } from "../services/mail.icons.js"
export function MailHeader({ filterBy, onSetFilterBy, onClearFilter }) {
  return (
    <section className="mail-header">
      <div className="mail-brand">
        <section className="mail-menu">{icons.menu}</section>
        <div className="gmail">{icons.gmail}</div>
      </div>
      <div className="main-mail-header">
        <MailFilter
          filterBy={filterBy}
          onSetFilterBy={onSetFilterBy}
          onClearFilter={onClearFilter}
        />
        {/* <div className="profile-icons">
          <span>{icons.support}</span>
          <span>{icons.settings}</span>
          <span>{icons.Gemini}</span>
          <span>{icons.googleApps}</span>
          <span className="icon-profile">{icons.profile}</span>
        </div> */}
      </div>
    </section>
  )
}
