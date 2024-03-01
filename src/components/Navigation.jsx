import Logo from "./Logo";

export default function Navigation({ children, numberResults }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
      <p className="num-results">
        Found <strong>{numberResults}</strong> results
      </p>
    </nav>
  );
}
