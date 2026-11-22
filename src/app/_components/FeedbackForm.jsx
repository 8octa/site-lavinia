"use client";
import copy from "./shared/copy.json";
import copyEn from "./shared/copy.en.json";

import { useState } from "react";

export default function FeedbackForm({ children, className, locale = "ro" }) {
  const [submitted, setSubmitted] = useState(false);
  const strings = locale === "en" ? copyEn : copy;

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {children}
      {submitted && (
        <p
          className="m-0 rounded-xl bg-brand-ink px-4 py-3 text-sm text-brand-cream"
          role="status"
        >
          {
            strings.contact_form
              .formularul_nu_e_conectat_inca_pe_site_ul_live_mesaju
          }
        </p>
      )}
    </form>
  );
}
