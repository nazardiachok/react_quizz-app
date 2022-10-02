import "./footer.css";

export default function Footer({ activePage, setActivePage }) {
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
            activePage === "CreateCard" ? "navigation__list-item--active" : ""
          }`}
        >
          <button
            onClick={() => setActivePage("CreateCard")}
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
