import { useState } from "react";

export default function Section({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="section">
      <button
        className="btn btn-toggle"
        onClick={() => setIsOpen(open => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}
