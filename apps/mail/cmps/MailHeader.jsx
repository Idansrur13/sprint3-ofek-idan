import { MailFilter } from "./MailFilter.jsx"

export function MailHeader({ filterBy, onSetFilterBy, onClearFilter }) {
  return (
    <section className="mail-header">
      <section className="mail-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </section>
      <div className="gmail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 145"
          width="24"
          height="18"
        >
          <path
            fill="#4285f4"
            d="M13.09 145h30.02V72.13L0 39.66v92.25C0 139.14 5.87 145 13.09 145z"
          />
          <path
            fill="#34a853"
            d="M149.89 145h30.02c7.23 0 13.09-5.87 13.09-13.09V39.66l-43.11 32.47z"
          />
          <path
            fill="#fbbc04"
            d="M149.89 13.09v59.04L193 39.66V19.64c0-18.58-21.21-29.17-36.07-18.02z"
          />
          <path
            fill="#ea4335"
            d="M43.11 72.13V13.09L96.5 53.14l53.39-40.05v59.04L96.5 112.18z"
          />
          <path
            fill="#c5221f"
            d="M0 19.64v20.02l43.11 32.47V13.09L36.07 1.62C21.21-9.53 0 1.06 0 19.64z"
          />
        </svg>
      </div>
      <MailFilter
        filterBy={filterBy}
        onSetFilterBy={onSetFilterBy}
        onClearFilter={onClearFilter}
      />
      <div className="profile-icons">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-settings-icon lucide-settings"
          >
            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-grip-icon lucide-grip"
          >
            <circle cx="12" cy="5" r="1" />
            <circle cx="19" cy="5" r="1" />
            <circle cx="5" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="19" cy="19" r="1" />
            <circle cx="5" cy="19" r="1" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-icon lucide-circle"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>
      </div>
    </section>
  )
}
