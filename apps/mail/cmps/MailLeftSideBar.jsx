const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { icons } from "../services/mail.icons.js"
import { emailsService } from "../services/mail.service.js"

export function MailLeftSideBar({ emails }) {
  const [unreadMailCount, setUnreadMailCount] = useState(0)

  useEffect(() => {
    loadUnreadMail()
  }, [emails])

  function loadUnreadMail() {
    emailsService
      .query()
      .then((allEmails) => {
        const unreadCount = allEmails.filter(
          (mail) => mail.isRead === false,
        ).length
        setUnreadMailCount(unreadCount)
      })
      .catch((err) => console.log("Couldn't load mails", err))
  }

  return (
    <section className="mail-left">
      <div className="compose">
          <Link to="/mail/edit">
        <button>
            {icons.compose}
            <span>Compose</span>
        </button>
          </Link>
      </div>
      <button className="sent">
        {icons.sent}
        <span>Sent</span>
      </button>
      <div className="unread-emails">Unread Mails:{unreadMailCount}</div>
    </section>
  )
}
