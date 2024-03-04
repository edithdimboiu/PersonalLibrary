
export default function Alert({ message, onClose }) {
  return (
    <div className="alert-container">
      <p className="alert-message">{message}</p>
      <button className="alert-close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}
