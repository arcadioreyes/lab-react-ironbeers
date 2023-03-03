import homeImage from "../assets/homeimage.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src={homeImage} alt="logo" width="auto" height="auto" />
      </Link>
    </div>
  );
}

export default Navbar;
