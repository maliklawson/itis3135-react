import { Link } from "react-router-dom";

export default function Contract() {
  return (
    <>
      <h2>Contract</h2>

      <p>
        I, <Link to="/introduction">MALIK R. LAWSON</Link> agree to abide by the
        terms of the course contract in my FALL 2026, ITIS3135, FRONT-END
        WEB-DEVELOPMENT with my instructor, Professor D.I. von Briesen.
      </p>
      <p>
        I understand that all work that I do on publicly available online tools
        will be available to the world and will not put information there that
        is inappropriate for schoolwork, or that I wish to keep private. I also
        understand that it is my work that counts for attendance, not logins or
        showing up for class.
      </p>
      <p>
        As such, failure to turn in assignments may show as absences. I also
        understand that given the structure and content of this class it&apos;s
        possible to find many examples online or even view my classmates&apos;
        code directly. I swear that I will only use these resources to learn and
        will not cut and paste code except where I have properly given credit
        and never from my classmates.
      </p>
      <p>
        Signed: <em>Malik L. Lawson , 09/20/2026</em>
      </p>
    </>
  );
}