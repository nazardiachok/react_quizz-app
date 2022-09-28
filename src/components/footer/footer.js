import "./footer.css";
import { useState } from "react";

export default function Footer() {
  const [activePage, setActivePage] =
    useState(
      "Home"
    ); /* wir denken uns die state "Home"(anfangsposition in useState) aus und jedes Mal beim click auf das konkretes button bekommt activePage in state ein anderes state. dann wird er verglichen und class angewendet */

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li
          className={`navigation__list-item ${
            activePage === "Home" ? "navigation__list-item--active" : ""
          }`}
        >
          <button
            onClick={() => setActivePage("Home")}
            className="navigation__link"
          >
            <img src="https://img.icons8.com/ios-filled/27/000000/home.png" />
          </button>
        </li>

        <li
          className={`navigation__list-item ${
            activePage === "Bookmark" ? "navigation__list-item--active" : ""
          }`}
        >
          <button
            onClick={() => setActivePage("Bookmark")}
            className="navigation__link"
          >
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-bookmark-multimedia-kiranshastry-lineal-kiranshastry.png" />
          </button>
        </li>

        <li
          className={`navigation__list-item ${
            activePage === "Form" ? "navigation__list-item--active" : ""
          }`}
        >
          <button
            onClick={() => setActivePage("Form")}
            className="navigation__link"
          >
            <img src="https://img.icons8.com/external-simple-solid-edt.graphics/32/000000/external-Plus-add-and-remove-simple-solid-edt.graphics.png" />
          </button>
        </li>

        <li
          className={`navigation__list-item ${
            activePage === "Profile" ? "navigation__list-item--active" : ""
          }`}
        >
          <button
            onClick={() => setActivePage("Profile")}
            className="navigation__link"
          >
            <img src="https://img.icons8.com/ios-glyphs/27/000000/parse-resumes.png" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
