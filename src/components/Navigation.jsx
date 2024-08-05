import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Navigation({numberResults }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchInput />
      <p className="num-results">
        Found <strong>{numberResults}</strong> results
      </p>
    </nav>
  );
}
