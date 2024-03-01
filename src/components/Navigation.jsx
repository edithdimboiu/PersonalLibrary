import Logo from "./Logo";

export default function Navigation({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
      <p className="num-results">
        Found <strong>0</strong> results
      </p>
    </nav>
  );
}
