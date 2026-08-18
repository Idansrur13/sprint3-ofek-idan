const { useState } = React
import { utilService } from '../../../services/util.service.js'
import { icons } from '../services/mail.icons.js'

export function MailPreview({ mail, onRemoveMail, onToggleRead }) {
  const [onHover, setOnHover] = useState(false)
  const IsReadIcon = mail.isRead ? icons.unreadMail : icons.readMail

  return (
    <div
      className='mail-row'
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <input type='checkbox' />
      <div className='icon-mail'>{icons.star}</div>
      <div className='icon-mail'>{icons.important}</div>

      <span className='mail-sender'> {mail.from}</span>

      {/* <p>{mail.id}</p> */}
      <span className='mail-subject'>{mail.subject}</span>

      <p>{` -   `} </p>
      <span className='mail-body'>{mail.body}</span>

      <div className='mail-actions' onClick={(ev) => ev.stopPropagation()}>
        {onHover ? (
          <div className='btn-row-mail '>
            <span
              className='btn-remove'
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
          <span className='send-time'>
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
