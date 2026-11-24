import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <>
      <h2>Introduction</h2>

      <h6>
        <strong>Malik Lawson ~ Mighty Lion</strong>
      </h6>

      <figure>
        <img
          src="/images/LinkedInImage.png"
          alt="LinkedIn Profile Image"
          style={{ width: "330px", height: "300px" }}
        />
        <figcaption>
          <em>LinkedIn profile image</em>
        </figcaption>
      </figure>

      <p>
        I am a Computer Science major specializing in Human Computer
        Interaction. My goal is to build industry ready skills and prepare for a
        successful career in tech. Looking forward to the journey ahead.
      </p>

      <ul>
        <li>
          <strong>Personal Background: </strong>Reidsville native, moved to
          Charlotte in 2024.
        </li>
        <li>
          <strong>Professional Background: </strong>Military veteran of nearly
          7 years, now focused on completing my degree to secure employment in
          the tech industry.
        </li>
        <li>
          <strong>Academic Background: </strong>Computer Science Human Computer
          Interaction class of 2028.
        </li>
        <li>
          <strong>Primary Work Computer (type, OS, and version): </strong>Macbook
          Air (macOS)
        </li>
        <li>
          <strong>Primary Work Location: </strong>Home office space.
        </li>
        <li>
          <strong>Alternate Computer &amp; Location: </strong>Desktop &amp; UNCC
          library.
        </li>
        <li>
          <strong>Courses I&apos;m Taking, &amp; Why:</strong>
          <ol>
            <li>
              <strong>
                ITSC 3688 - Computing and AI: Ethics, Society &amp;
                Communication:{" "}
              </strong>
              To learn professional soft skills used in the tech industry.
            </li>
            <li>
              <strong>ITIS 4350 - Design Prototyping: </strong>To gain
              experience with design techniques.
            </li>
            <li>
              <strong>
                <Link to="/contract">
                  ITIS 3135 - Front-End Web Application Development
                </Link>
                :{" "}
              </strong>
              To understand the steps to build web applications.
            </li>
            <li>
              <strong>ITSC 2175 - Logic and Algorithms: </strong>Required for my
              degree.
            </li>
            <li>
              <strong>ITIS 3140 - User Experience Methods: </strong>To grasp
              UX/UI concepts used in the design process.
            </li>
          </ol>
        </li>
        <li>
          <strong>Funny/Interesting Item to Remember Me by: </strong>I&apos;m a
          Veteran
        </li>
        <li>
          <strong>I&apos;d Also Like to Share: </strong>I have three older
          brothers.
        </li>
      </ul>

      <blockquote>
        “A wise man will always follow the footsteps of great men”
        <br />
        <em>- Niccolo Machiavelli</em>
      </blockquote>
    </>
  );
}