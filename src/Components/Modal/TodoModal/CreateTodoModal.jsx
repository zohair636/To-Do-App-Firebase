import { useEffect } from "react";
import ReactDom from "react-dom";

const CreateTodoModal = ({ visible, children, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [visible]);

  if (!visible) return null;

  return ReactDom.createPortal(
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black/70"
        onClick={onClose}
      />
      <div
        className="fixed z-50 bg-white xl:w-4/12 lg:w-6/12 w-8/12 h-fit rounded-3xl overflow-y-auto"
        style={{ top: "50%", left: "50%", transform: `translate(-50%, -50%)` }}
      >
        {children}
      </div>
    </>,
    document.getElementById("create-todo-modal")
  );
};

export default CreateTodoModal;
