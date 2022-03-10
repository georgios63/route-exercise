import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <p>
        <Link to="/pokemons">Pokemons</Link>
      </p>
      <p>
        <Link to="/discover">Discover</Link>
      </p>
      <p>
        <Link to="/">Home page</Link>
      </p>
    </div>
  );
};
