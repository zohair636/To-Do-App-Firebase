import { homeText } from "../../../Global/text";
import { CreateTodoHelperFunction } from "../../../Helper/TodoHelper/TodoHelper";
import CancelButton from "../../Buttons/Cancel/CancelButton";
import CreateNewTodoButton from "../../Buttons/CreateTodo/CreateNewTodoButton";

const CreateTodoModalData = () => {
  const newTodo = CreateTodoHelperFunction();
  return (
    <div>
      <div className="flex justify-center items-center m-5">
        <h1 className="text-neutral-600 text-xl font-semibold">
          {homeText.CREATE_NEW_TODO_LABEL}
        </h1>
      </div>
      <div className="mt-7">
        {newTodo?.map((items) => {
          return (
            <div
              key={items?.id}
              className="flex flex-col justify-start items-start mx-7 m-3"
            >
              <label className="text-neutral-600 font-semibold">
                {items?.title}
              </label>
              <input
                value={items?.value}
                onChange={""}
                placeholder={items?.placeholder}
                className="outline-none border border-neutral-200 p-1.5 px-3 mt-1 rounded-lg w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mx-7 mt-28">
        <CancelButton />
        <CreateNewTodoButton />
      </div>
    </div>
  );
};

export default CreateTodoModalData;
