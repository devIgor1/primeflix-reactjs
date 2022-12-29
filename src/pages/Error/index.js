import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="bg">
      <section class="notFound">
        <div class="img-bg">
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div class="text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <Link class="yes" to="/">
            YES
          </Link>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
            NO
          </a>
        </div>
      </section>
    </div>
  );
}

export default Error;
