const { useState } = React
import { utilService } from "../../../services/util.service.js"
import { icons } from "../services/mail.icons.js"

export function MailPreview({ mail, onRemoveMail, onToggleRead }) {
  const [onHover, setOnHover] = useState(false)
  const isRead = mail.isRead
  const IsReadIcon = isRead ? icons.readMail : icons.unreadMail

  return (
    <div
      className={` mail-row ${isRead ? "mail-read" : ""}  `}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="mail-modifiers" onClick={(ev) => ev.stopPropagation()} >
        <input type="checkbox" />
        <div className="icon-mail  hollow-star">{icons.star}</div>
        <div className="icon-mail important">{icons.important}</div>
      </div>
      <span className="mail-sender"> {mail.from}</span>

      <span className="mail-subject">{mail.subject}</span>

      <p>{`-`} </p>
      <span className="mail-body">{mail.body}</span>

      <div className="mail-actions" onClick={(ev) => ev.stopPropagation()}>
        {onHover ? (
          <div className="btn-row-mail ">
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
        ) : (
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
        )}
      </div>
      {/* 
      <div class="row">
  <input type="checkbox">
  <span class="sender">ישראל ישראלי</span>
  <span class="subject">נושא המייל ואחריו קטע מהתוכן שיכול להיות ארוך מאוד</span>
  <span class="time">14:32</span>
</div> */}
    </div>
  )
}
