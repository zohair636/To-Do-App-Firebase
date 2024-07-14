import { useEffect } from "react";
import ReactDOM from "react-dom";

const SettingsModal = ({ visible, children, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [visible]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/70"
        onClick={onClose}
      />
      <div
        className="fixed z-50 bg-white md:w-6/12 w-96 h-[60vh] max-h-[70vh] overflow-hidden rounded-3xl"
        style={{ top: "50%", left: "50%", transform: `translate(-50%, -50%)` }}
      >
        {children}
      </div>
    </>,
    document.getElementById("settings-modal")
  );
};

export default SettingsModal;
