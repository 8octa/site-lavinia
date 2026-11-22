import FeedbackForm from '../_components/FeedbackForm'

export const metadata = { title: "Contact · na.digital" }

export default function NaDigitalContact() {
  return (
    <div className={"view"}>
          {"\n"}
          <section className={"wrap page-hero"}>
            {"\n"}
            <nav className={"crumbs"} aria-label={"Unde ești"}>
              <a href={"/"}>
                {"na.digital"}
              </a>
              {" "}
              <span aria-hidden={"true"}>
                {"/"}
              </span>
              {" "}
              <span>
                {"Contact"}
              </span>
            </nav>
            {"\n\n"}
            <h1 className={"h1"}>
              {"Hai să vorbim."}
            </h1>
            {"\n"}
            <p className={"lead big"}>
              {"Vorbim deschis despre ce ai nevoie și cât costă. Alege o zi sau scrie-ne."}
            </p>
            {"\n\n"}
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            <div className={"contact-grid"}>
              <div className={"calm c-form"}>
                {"\n"}
                <h2 className={"calm-t"}>
                  {"Scrie-ne"}
                </h2>
                {"\n"}
                <FeedbackForm className={"na-form cf"}>
                  {"\n"}
                  <div className={"cf-grid"}>
                    {"\n"}
                    <div className={"cf-field"}>
                      <label htmlFor={"na-f-nume"}>
                        {"Nume"}
                      </label>
                      <input id={"na-f-nume"} type={"text"} autoComplete={"name"} />
                    </div>
                    {"\n"}
                    <div className={"cf-field"}>
                      <label htmlFor={"na-f-email"}>
                        {"Email"}
                      </label>
                      <input id={"na-f-email"} type={"email"} autoComplete={"email"} />
                    </div>
                    {"\n"}
                    <div className={"cf-field"}>
                      <label htmlFor={"na-f-firma"}>
                        {"Firma (opțional)"}
                      </label>
                      <input id={"na-f-firma"} type={"text"} autoComplete={"organization"} />
                    </div>
                    {"\n"}
                    <div className={"cf-field"}>
                      <label htmlFor={"na-f-serviciu"}>
                        {"Cu ce te putem ajuta?"}
                      </label>
                      <select id={"na-f-serviciu"}>
                        <option>
                          {"Nu știu încă"}
                        </option>
                        <option>
                          {"NA Social Media Lunar"}
                        </option>
                        <option>
                          {"NA Content Creation"}
                        </option>
                        <option>
                          {"NA Audit"}
                        </option>
                        <option>
                          {"NA TikTok Start"}
                        </option>
                        <option>
                          {"NA Email Marketing"}
                        </option>
                        <option>
                          {"NA Făcut de mână (artiști)"}
                        </option>
                      </select>
                    </div>
                    {"\n"}
                    <div className={"cf-field cf-wide"}>
                      <label htmlFor={"na-f-mesaj"}>
                        {"Mesaj"}
                      </label>
                      <textarea id={"na-f-mesaj"} rows={"5"} placeholder={"Unde ești acum și unde vrei să ajungi?"}>
                      </textarea>
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                  <div className={"cf-foot"}>
                    {"\n"}
                    <span className={"lf-note"}>
                      {"Folosim datele doar ca să-ți răspundem. Detalii în "}
                      <a href={"/confidentialitate"}>
                        {"politica de confidențialitate"}
                      </a>
                      {"."}
                    </span>
                    {"\n"}
                    <button className={"btn btn-ink"} type={"submit"}>
                      {"Trimite"}
                    </button>
                    {"\n"}
                  </div>
                  {"\n"}
                </FeedbackForm>
                {"\n"}
              </div>
              <div className={"calm calm-muted c-book"}>
                {"\n"}
                <span className={"calm-chip"}>
                  {"cel mai simplu"}
                </span>
                {"\n"}
                <h3 className={"calm-t"}>
                  {"Programează o discuție"}
                </h3>
                {"\n"}
                <p className={"ex-line"}>
                  {"Alegi o zi și o oră din calendar, iar noi venim pregătite."}
                </p>
                {"\n"}
                <a className={"btn btn-ink c-book-btn"} href={"/contact"}>
                  {"Alege o zi"}
                </a>
                {"\n"}
                <span className={"lf-note"}>
                  {"[LINK PROGRAMARE]"}
                </span>
                {"\n"}
              </div>
              <div className={"calm c-direct"}>
                {"\n"}
                <h3 className={"calm-t"}>
                  {"Sau direct"}
                </h3>
                {"\n"}
                <ul className={"c-list"}>
                  {"\n"}
                  <li>
                    <span>
                      {"Email"}
                    </span>
                    <a href={"mailto:[EMAIL]"}>
                      {"[EMAIL]"}
                    </a>
                  </li>
                  {"\n"}
                  <li>
                    <span>
                      {"Instagram"}
                    </span>
                    <a href={"/contact"}>
                      {"[@HANDLE]"}
                    </a>
                  </li>
                  {"\n"}
                  <li>
                    <span>
                      {"TikTok"}
                    </span>
                    <a href={"/contact"}>
                      {"[@HANDLE]"}
                    </a>
                  </li>
                  {"\n"}
                </ul>
                {"\n"}
              </div>
              <div className={"calm c-after"}>
                {"\n"}
                <h3 className={"calm-t"}>
                  {"Ce se întâmplă după"}
                </h3>
                {"\n"}
                <ol className={"c-steps"}>
                  <li>
                    <span className={"sc-n bg-brand-mustard"} >
                      {"1"}
                    </span>
                    <span>
                      <strong>
                        {"Ne scrii"}
                      </strong>
                      <span>
                        {"Sau alegi direct o zi. Îți răspundem în cel mult 2 zile lucrătoare."}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className={"sc-n bg-brand-sky"} >
                      {"2"}
                    </span>
                    <span>
                      <strong>
                        {"Ne auzim"}
                      </strong>
                      <span>
                        {"Ne spui unde ești și unde vrei să ajungi."}
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className={"sc-n bg-brand-purple"} >
                      {"3"}
                    </span>
                    <span>
                      <strong>
                        {"Primești oferta"}
                      </strong>
                      <span>
                        {"Prețul, clar și în scris. Fără surprize."}
                      </span>
                    </span>
                  </li>
                </ol>
                {"\n"}
              </div>
            </div>
          </section>
          {"\n\n"}
        </div>
  )
}
