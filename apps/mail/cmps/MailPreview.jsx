import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {
  return (
    <React.Fragment>
      {/* <h2>from {mail.from} </h2> */}

      <h2>
        🍙🍚🧆
        {"  "}
        {mail.from}
      </h2>
      {/* <p>{mail.id}</p> */}
      {/* <p>{mail.createdAt}</p> */}
      <p>{mail.body}</p>
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
    </React.Fragment>
  )
}
