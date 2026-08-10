import { utilService } from "../../../services/util.service.js"

export function MailList({ mails }) {
  return (
    <div>
      {mails.map((mail) => (
        <div key={mail.id}>
          <h2>from {mail.from} </h2>
          <h2>{mail.subject} </h2>
          <p>{mail.id}</p>
          <p>{mail.createdAt}</p>
          <p>{mail.body}</p>
          <span>
            {utilService.getNumericDate(mail.createdAt,'he-IL')}-
            {utilService.getYearName(mail.createdAt)}-
            {utilService.getMonthName(mail.createdAt)}-
            {utilService.getDayName(mail.createdAt)}-
            {utilService.getTimeOfDay(mail.createdAt)}
          </span>
        </div>
      ))}
    </div>
  )
}
