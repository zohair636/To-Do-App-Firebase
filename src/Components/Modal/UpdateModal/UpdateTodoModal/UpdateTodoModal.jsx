import { useEffect } from "react";
import ReactDOM from "react-dom";

const UpdateTodoModal = ({ visible, children, onClose }) => {
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
        className="fixed z-50 bg-white w-4/12 h-fit rounded-3xl overflow-y-auto"
        style={{ top: "50%", left: "50%", transform: `translate(-50%, -50%)` }}
      >
        {children}
      </div>
    </>,
    document.getElementById("update-todo-modal")
  );
};

export default UpdateTodoModal;
