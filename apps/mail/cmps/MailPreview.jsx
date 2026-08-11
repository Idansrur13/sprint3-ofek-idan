import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {
  return (
    <section>
      {/* <h2>from {mail.from} </h2> */}
      <h2>{mail.subject} </h2>
      {/* <p>{mail.id}</p>
      <p>{mail.createdAt}</p>
      <p>{mail.body}</p> */}
      <span>
        {utilService.getTimeOfDay(mail.createdAt)}
        ------
        {utilService.getMonthName(mail.createdAt)}{" "}
        {utilService.getDayNumericDate(mail.createdAt, "he-IL", )}
        ------
        {utilService.getNumericDate(mail.createdAt, "he-IL",)}
        ------
        {utilService.getYearName(mail.createdAt)}
        ------
        {utilService.getDayName(mail.createdAt)}
      </span>
    </section>
  )
}
