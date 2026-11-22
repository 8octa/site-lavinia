import FeedbackForm from '../_components/FeedbackForm'

export const metadata = { title: "Lista gratuită de audit social media · na.digital" }

export default function NaDigitalGratis() {
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
                {"Gratis"}
              </span>
            </nav>
            {"\n\n"}
            <h1 className={"h1"}>
              {"Na, ia de aici."}
            </h1>
            {"\n"}
            <p className={"lead big"}>
              {"40 de întrebări în 8 capitole, ca să-ți verifici singur contul într-o pauză. E lista pe care o folosim și noi la NA Audit."}
            </p>
            {"\n\n"}
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            <div className={"lead-card"}>
              {"\n"}
              <div className={"lead-main"}>
                {"\n"}
                <span className={"calm-chip"}>
                  {"gratis"}
                </span>
                {"\n"}
                <h2 className={"calm-t"}>
                  {"Lasă-ne emailul și e a ta."}
                </h2>
                {"\n"}
                <p className={"ex-line"}>
                  {"Verifică-ți singur contul, punct cu punct."}
                </p>
                {"\n"}
                <FeedbackForm className={"na-form lf"}>
                  {"\n"}
                  <label className={"lf-label"} htmlFor={"na-lead-email"}>
                    {"Emailul tău"}
                  </label>
                  {"\n"}
                  <div className={"lf-row"}>
                    {"\n"}
                    <input id={"na-lead-email"} type={"email"} placeholder={"nume@firma.ro"} autoComplete={"email"} />
                    {"\n"}
                    <button className={"btn btn-ink"} type={"submit"}>
                      {"Trimite-mi lista"}
                    </button>
                    {"\n"}
                  </div>
                  {"\n"}
                  <label className={"lf-check"} htmlFor={"na-lead-nl"}>
                    <input id={"na-lead-nl"} type={"checkbox"} />
                    {"Vreau și newsletterul na, din când în când."}
                  </label>
                  {"\n"}
                  <span className={"lf-note"}>
                    {"Folosim emailul doar pentru ce ai bifat. Detalii în "}
                    <a href={"/confidentialitate"}>
                      {"politica de confidențialitate"}
                    </a>
                    {"."}
                  </span>
                  {"\n"}
                </FeedbackForm>
                {"\n"}
              </div>
              {"\n"}
              <div className={"lead-side"} aria-hidden={"true"}>
                {"\n"}
                <div className={"lead-paper"}>
                  <span className={"lp-t"}>
                    {"Lista gratuită"}
                  </span>
                  <div className={"lp-row"}>
                    <span className={"lp-box on"}>
                    </span>
                    <span className={"lp-line mr-0"} >
                    </span>
                  </div>
                  <div className={"lp-row"}>
                    <span className={"lp-box on"}>
                    </span>
                    <span className={"lp-line mr-[24px]"} >
                    </span>
                  </div>
                  <div className={"lp-row"}>
                    <span className={"lp-box"}>
                    </span>
                    <span className={"lp-line mr-0"} >
                    </span>
                  </div>
                  <div className={"lp-row"}>
                    <span className={"lp-box"}>
                    </span>
                    <span className={"lp-line mr-[40px]"} >
                    </span>
                  </div>
                  <div className={"lp-row"}>
                    <span className={"lp-box"}>
                    </span>
                    <span className={"lp-line mr-[12px]"} >
                    </span>
                  </div>
                </div>
                {"\n"}
              </div>
              {"\n"}
            </div>
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"sec-head"}>
              <h2 className={"h2"}>
                {"Ce e în listă"}
              </h2>
            </div>
            {"\n"}
            <div className={"calm"}>
              <ol className={"chap"}>
                <li>
                  <span className={"chap-n"}>
                    {"1"}
                  </span>
                  <span>
                    <strong>
                      {"Profilul"}
                    </strong>
                    <span>
                      {"Vitrina pe care oamenii o judecă în câteva secunde."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"2"}
                  </span>
                  <span>
                    <strong>
                      {"Feed-ul"}
                    </strong>
                    <span>
                      {"Testul ultimelor 9 postări."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"3"}
                  </span>
                  <span>
                    <strong>
                      {"Conținutul"}
                    </strong>
                    <span>
                      {"Nativ sau adaptat: diferența se vede din prima secundă."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"4"}
                  </span>
                  <span>
                    <strong>
                      {"Ritmul"}
                    </strong>
                    <span>
                      {"Consecvența bate inspirația."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"5"}
                  </span>
                  <span>
                    <strong>
                      {"Comunitatea"}
                    </strong>
                    <span>
                      {"Un cont care nu răspunde e un panou publicitar."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"6"}
                  </span>
                  <span>
                    <strong>
                      {"Cifrele"}
                    </strong>
                    <span>
                      {"Salvările și mesajele spun mai mult decât like-urile."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"7"}
                  </span>
                  <span>
                    <strong>
                      {"De la feed la vânzare"}
                    </strong>
                    <span>
                      {"Unde ajunge omul după ce te place."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className={"chap-n"}>
                    {"8"}
                  </span>
                  <span>
                    <strong>
                      {"Partea legală"}
                    </strong>
                    <span>
                      {"Colaborări marcate, AI, afirmații de mediu, muzică."}
                    </span>
                  </span>
                </li>
              </ol>
            </div>
            {"\n"}
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"sec-head"}>
              <h2 className={"h2"}>
                {"Vrei mai mult?"}
              </h2>
            </div>
            {"\n"}
            <div className={"calms"}>
              {"\n"}
              <div className={"calm"}>
                {"\n"}
                <span className={"calm-chip"}>
                  {"na, audit public"}
                </span>
                {"\n"}
                <h3 className={"calm-t"}>
                  {"Vrei un mini-audit gratuit, făcut public?"}
                </h3>
                {"\n"}
                <p className={"ex-line"}>
                  {"Alegem câte un cont și îl analizăm pe contul nostru, cu acordul tău."}
                </p>
                {"\n"}
                <a className={"calm-link"} href={"/contact"}>
                  {"Hai să vorbim"}
                </a>
                {"\n"}
              </div>
              {"\n"}
              <div className={"calm"}>
                {"\n"}
                <span className={"calm-chip"}>
                  {"NA Audit"}
                </span>
                {"\n"}
                <h3 className={"calm-t"}>
                  {"Vrei să ne uităm noi?"}
                </h3>
                {"\n"}
                <p className={"ex-line"}>
                  {"Aceeași listă, făcută de noi, plus un plan de 90 de zile pe o pagină. În 10 zile."}
                </p>
                {"\n"}
                <a className={"calm-link"} href={"/audit"}>
                  {"Despre NA Audit"}
                </a>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"cta-band"}>
              {"\n"}
              <div>
                {"\n"}
                <h2 className={"h2"}>
                  {"Ne vedem la cafea."}
                </h2>
                {"\n"}
                <p>
                  {"Vorbim deschis despre ce ai nevoie și cât costă. Pe bune, cafeaua e de la noi."}
                </p>
                {"\n"}
              </div>
              {"\n"}
              <a className={"btn btn-accent"} href={"/contact"}>
                {"Hai la cafea"}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n\n"}
        </div>
  )
}
