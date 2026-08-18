import { utilService } from "../../../services/util.service.js"
import { icons } from "../services/mail.icons.js"

export function MailPreview({ mail, onRemoveMail, onToggleRead }) {
  const IsReadIcon = mail.isRead ? icons.unreadMail : icons.readMail

  return (
    <section>
      <h3>
        <section className="select-icons"></section>
        <input type="checkbox" />
        {icons.star}
        {icons.important}
        {mail.from}
      </h3>
      {/* <p>{mail.id}</p> */}
      <span className="mail-main">
        <p className="mail-subject">{mail.subject}</p>
        <p>{"-"}</p>
        <p className="mail-body">{mail.body}</p>
      </span>

      <div className="mail-actions" onClick={(ev) => ev.stopPropagation()}>
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
        <span className="send-time">
          {utilService.getTimeOfDay(mail.createdAt)}
          {/* ------
        {utilService.getMonthName(mail.createdAt)}{" "}
        {utilService.getDayNumericDate(mail.createdAt, "he-IL", )}
        ------
        {utilService.getNumericDate(mail.createdAt, "he-IL",)}
        ------
        {utilService.getYearName(mail.createdAt)}
        ------
        {utilService.getDayName(mail.createdAt)} */}
        </span>
      </div>
    </section>
  )
}
