const { useState } = React
import { utilService } from "../../../services/util.service.js"
import { icons } from "../services/mail.icons.js"

export function MailPreview({
  mail,
  isSentEmails,
  onRemoveMail,
  onToggleRead,
}) {
  const [onHover, setOnHover] = useState(false)
  const isRead = mail.isRead
  const IsReadIcon = isRead ? icons.readMail : icons.unreadMail

  function _getMailTimeLabel(createdAt) {
    const now = Date.now()
    const DAY = 1000 * 60 * 60 * 24

    const isToday = now - createdAt < DAY
    const isThisYear =
      new Date(createdAt).getFullYear() === new Date(now).getFullYear()

    if (isToday) return utilService.getTimeOfDay(createdAt)
    if (isThisYear) {
      return `${utilService.getMonthName(createdAt)} ${utilService.getDayNumericDate(createdAt)}`
    }
    return utilService.getNumericDate(createdAt, "he-IL")
  }

  let mailToFrom
  if (isSentEmails) mailToFrom = `To: ${mail.to}`
  else mailToFrom = mail.from
  let mailActionsContent
  if (onHover) {
    mailActionsContent = (
      <div className="btn-row-mail">
        <span
          className="btn-remove"
          onClick={(ev) => {
            onRemoveMail(mail.id)
          }}
        >
          {icons.trash}
        </span>
        <span
          onClick={() => {
            onToggleRead(mail.id)
          }}
        >
          {IsReadIcon}
        </span>
      </div>
    )
  } else {
    mailActionsContent = (
      <span className="send-time">{_getMailTimeLabel(mail.createdAt)}</span>
    )
  }

  return (
    <div
      className={` mail-row ${isRead ? "mail-read" : ""}  `}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="mail-modifiers" onClick={(ev) => ev.stopPropagation()}>
        <input type="checkbox" />
        <div className="icon-mail  hollow-star">{icons.star}</div>
        <div className="icon-mail important">{icons.important}</div>
      </div>
      <span className="mail-sender"> {mailToFrom}</span>

      <span className="mail-subject">{mail.subject}</span>

      <p>{`-`} </p>
      <span className="mail-body">{mail.body}</span>

      <div className="mail-actions" onClick={(ev) => ev.stopPropagation()}>
        {mailActionsContent}
      </div>
    </div>
  )
}
