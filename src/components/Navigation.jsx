import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchInput />
      <p className="num-results">
        Found <strong>0</strong> results
      </p>
    </nav>
  );
}
