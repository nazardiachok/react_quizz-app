import "./footer.css";

export default function Footer() {
  return (
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item navigation__list-item--active">
          <a
            class="navigation__link"
            href="./index.html"
            aria-label="go to home page"
          >
            <img src="https://img.icons8.com/ios-filled/27/000000/home.png" />
          </a>
        </li>
        <li class="navigation__list-item">
          <a
            class="navigation__link"
            href="./bookmarks.html"
            aria-label="go to bookmarks page"
          >
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/000000/external-bookmark-multimedia-kiranshastry-lineal-kiranshastry.png" />
          </a>
        </li>
        <li class="navigation__list-item">
          <a
            class="navigation__link"
            href="./form.html"
            aria-label="go to form page"
          >
            <img src="https://img.icons8.com/external-simple-solid-edt.graphics/32/000000/external-Plus-add-and-remove-simple-solid-edt.graphics.png" />
          </a>
        </li>
        <li class="navigation__list-item">
          <a
            class="navigation__link"
            href="./profile.html"
            aria-label="go to profile page"
          >
            <img src="https://img.icons8.com/ios-glyphs/27/000000/parse-resumes.png" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
