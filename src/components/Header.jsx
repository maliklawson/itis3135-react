import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* className="course-animal" styles course animal image */}
      <img
        src="/images/roaring-lion.jpeg"
        alt="roaring lion"
        className="course-animal"
      />
      <h1>Malik Lawson&apos;s Mighty Lion || ITIS3135</h1>
      <p>
        <em>
          <strong>Roaring ahead in Web Development</strong>
        </em>
      </p>
      <nav aria-label="Primary Navigation">
        <NavLink to="/">Home</NavLink>
        {" | "}
        <NavLink to="/introduction">Introduction</NavLink>
        {" | "}
        <NavLink to="/contract">Contract</NavLink>
        {" | "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <br />
      <nav aria-label="Secondary Navigation">
        <a href="https://webpages.charlotte.edu/mlawso23/itis3135/lawsonenterprises.co/">
          Lawson Enterprises
        </a>
        {" | "}
        <a href="https://webpages.charlotte.edu/mlawso23/itis3135/stuff/cR@ppY_WEBpage%20.htm">
          {" "}
          CRAPpy Webpage
        </a>
        {" | "}
        <a href="https://webpages.charlotte.edu/mlawso23/itis3135/hobby/">
          {" "}
          Hobby Webpage
        </a>
        {" | "}
        <a href="https://webpages.charlotte.edu/mlawso23/itis3135/mightylion/index.html">
          Mascot Company
        </a>
      </nav>
    </header>
  );
}