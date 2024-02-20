import { useState } from "react";

export default function Section() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="section">
      <button className="btn-toggle" onClick={() => setIsOpen(open => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && (
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima
          distinctio provident illo praesentium! Ut error in excepturi iure ab
          consequatur, necessitatibus fuga nisi natus numquam nostrum vel,
          officiis veniam voluptatem iusto magnam. Perspiciatis, ipsum
          cupiditate, quas reprehenderit animi corrupti, autem ratione quis ut
          officia fugiat accusantium iusto eligendi repellendus!
        </h2>
      )}
    </div>
  );
}
