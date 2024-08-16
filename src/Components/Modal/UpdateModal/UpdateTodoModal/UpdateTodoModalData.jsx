import { useContext, useEffect, useRef } from "react";
import { homeText } from "../../../../Global/text";
import CancelButton from "../../../Buttons/Cancel/CancelButton";
import UpdateTodoButton from "../../../Buttons/CreateTodo/UpdateTodoButton";
import {
  HomeGetterContext,
  HomeSetterContext,
} from "../../../../Context/HomeContext";

const UpdateTodoModalData = ({ onClose, title, description, onUpdate }) => {
  const { fetchTodo, createNewTodo } = useContext(HomeGetterContext);
  const { setFetchTodo, setCreateNewTodo } = useContext(HomeSetterContext);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      if (fetchTodo[1]?.value === "") {
        textAreaRef.current.style.height = "20px";
      }
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [textAreaRef, fetchTodo]);

  const handleUpdateTodo = (e, index) => {
    setFetchTodo((prev) => {
      const updatedTodo = [...prev];
      updatedTodo[index].value = e.target.value;
      return updatedTodo;
    });
  };

  const handleExistedTodo = () => {
    // const title = fetchTodo[0].value;
    // const description = fetchTodo[1].value;
    // const completed = false;
    // setCreateNewTodo((prev) => [
    //   ...prev,
    //   { title: title, description: description, completed: completed },
    // ]);
    onUpdate()
    onClose();
  };

  return (
    <>
      <div className="flex justify-center items-center m-5">
        <h1 className="text-neutral-600 text-xl font-semibold">
          {homeText.CREATE_NEW_TODO_LABEL}
        </h1>
      </div>
      <div className="mt-7">
        {fetchTodo?.map((items, index) => {
          return (
            <div
              key={items?.id}
              className="flex flex-col justify-start items-start mx-7 m-3"
            >
              <label className="text-neutral-600 font-semibold">
                {items?.title}
              </label>
              {items?.title === homeText.TASK_NAME_LABEL ? (
                <input
                  value={items?.value}
                  onChange={(e) => handleUpdateTodo(e, index)}
                  placeholder={items?.placeholder}
                  className="outline-none border border-neutral-200 p-1.5 px-3 mt-1 rounded-lg w-full"
                />
              ) : (
                <textarea
                  value={items?.value}
                  onChange={(e) => handleUpdateTodo(e, index)}
                  placeholder={items?.placeholder}
                  ref={textAreaRef}
                  className="outline-none border border-neutral-200 p-1.5 px-3 mt-1 rounded-lg w-full h-20 min-h-20 max-h-52 resize-none overflow-hidden overflow-y-auto"
                ></textarea>
              )}
            </div>
          );
        })}
        <div className="flex justify-between items-center mx-7 mt-5 mb-5">
          <CancelButton onClick={onClose} />
          <UpdateTodoButton onClick={handleExistedTodo} />
        </div>
      </div>
    </>
  );
};

export default UpdateTodoModalData;
