import { useContext, useEffect, useRef, useState } from "react";
import { homeText } from "../../../Global/text";
import { CreateTodoHelperFunction } from "../../../Helper/TodoHelper/TodoHelper";
import CancelButton from "../../Buttons/Cancel/CancelButton";
import CreateNewTodoButton from "../../Buttons/CreateTodo/CreateNewTodoButton";
import { HomeSetterContext } from "../../../Context/HomeContext";

const CreateTodoModalData = ({ onClose }) => {
  const [newTodo, setNewTodo] = useState(CreateTodoHelperFunction());
  const textAreaRef = useRef(null);
  const { setCreateNewTodo, setFetchTodo } = useContext(HomeSetterContext);
  const [countWords, setCountWords] = useState(0);
  const maxChars = 100;

  useEffect(() => {
    if (textAreaRef.current) {
      if (newTodo[1]?.value === "") {
        textAreaRef.current.style.height = "20px";
      } else {
        textAreaRef.current.style.height =
          textAreaRef.current.scrollHeight + "px";
      }
    }
  }, [newTodo]);

  const handleChange = (e, index) => {
    const newInput = [...newTodo];
    newInput[index].value = e.target.value;
    setFetchTodo(newInput);
    if (newInput[1].value.length > maxChars) {
      return false;
    } else if (newInput[1].value.length < maxChars) {
      setNewTodo(newInput);
      setCountWords(newInput[1].value.length);
    }
  };

  const handleNewTodo = () => {
    const title = newTodo[0].value;
    const description = newTodo[1].value;
    const completed = false;
    const date = new Date().toISOString().split("T")[0];
    setCreateNewTodo((prev) => [
      ...prev,
      {
        title: title,
        description: description,
        completed: completed,
        date: date,
      },
    ]);
    onClose();
  };

  return (
    <div>
      <div className="flex justify-center items-center m-5">
        <h1 className="text-neutral-600 text-xl font-semibold">
          {homeText.CREATE_NEW_TODO_LABEL}
        </h1>
      </div>
      <div className="mt-7">
        {newTodo?.map((items, index) => {
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
                  onChange={(e) => handleChange(e, index)}
                  placeholder={items?.placeholder}
                  className="outline-none border border-neutral-200 p-1.5 px-3 mt-1 rounded-lg w-full"
                />
              ) : (
                <div className="flex flex-col justify-end items-end w-full">
                  <textarea
                    value={items?.value}
                    onChange={(e) => handleChange(e, index)}
                    placeholder={items?.placeholder}
                    ref={textAreaRef}
                    className="outline-none border border-neutral-200 p-1.5 px-3 mt-1 rounded-lg w-full h-20 min-h-20 max-h-52 resize-none overflow-hidden overflow-y-auto"
                  ></textarea>
                  <p className="text-neutral-400 text-sm mt-1">{`${countWords} /${maxChars}`}</p>
                </div>
              )}
            </div>
          );
        })}
        <div className="flex justify-between items-center mx-7 mt-5 mb-5">
          <CancelButton onClick={onClose} />
          <CreateNewTodoButton onClick={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};

export default CreateTodoModalData;
