'use client'

import { useState } from 'react'

export default function FeedbackForm({ children, className }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      {children}
      {submitted && (
        <p className="na-note on" role="status">
          Formularul nu e conectat încă. Pe site-ul live, mesajul ajunge direct la noi.
        </p>
      )}
    </form>
  )
}
