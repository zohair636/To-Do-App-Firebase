import { useCallback, useContext, useState } from "react";
import { TableHeaderFunction } from "../../Helper/TableHelper/TodoTableHelper";
import {
  HomeGetterContext,
  HomeSetterContext,
} from "../../Context/HomeContext";
import { Circle, CircleCheck, PencilLine, Trash } from "lucide-react";
import { iconsColor } from "../../Global/colors";
import DeleteTodoModal from "../Modal/DeleteModal/DeleteTodoModal/DeleteTodoModal";
import DeleteTodoModalData from "../Modal/DeleteModal/DeleteTodoModal/DeleteTodoModalData";
import UpdateTodoModal from "../Modal/UpdateModal/UpdateTodoModal/UpdateTodoModal";
import UpdateTodoModalData from "../Modal/UpdateModal/UpdateTodoModal/UpdateTodoModalData";

const TodosTable = () => {
  const tableHeaderData = TableHeaderFunction();
  const { createNewTodo, searchTodo } = useContext(HomeGetterContext);
  const { setCreateNewTodo } = useContext(HomeSetterContext);
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [deleteTodoIndex, setDeleteTodoIndex] = useState("");

  const handleCompleteTodo = useCallback(
    (index) => {
      setCreateNewTodo((prev) => {
        const completeTodo = [...prev];
        completeTodo[index].completed = true;
        return completeTodo;
      });
    },
    [setCreateNewTodo]
  );

  const handleUncheckCompletedTodo = (index) => {
    setCreateNewTodo((prev) => {
      const unCheckCompletedTodo = [...prev];
      unCheckCompletedTodo[index].completed = false;
      return unCheckCompletedTodo;
    });
  };

  const handleRemoveTodo = (index) => {
    setCreateNewTodo((prev) => {
      const removeTodo = [...prev];
      removeTodo.splice(index, 1);
      handleModalOpen(1, false);
      return removeTodo;
    });
  };

  const handleModalOpen = (index, modal) => {
    setIsModalOpen((prev) => ({
      ...prev,
      [index]: modal,
    }));
  };

  const todoSearchFilter = createNewTodo.filter((todo) =>
    todo?.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <div className="border-2 border-neutral-200 rounded-2xl overflow-hidden">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            {tableHeaderData?.map((items) => {
              return (
                <th
                  key={items?.id}
                  className="text-neutral-600 font-semibold p-2 text-left"
                >
                  {items?.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {todoSearchFilter.length > 0 ? (
            todoSearchFilter.map((todo, index) => (
              <tr
                key={crypto.randomUUID()}
                className={`border-t ${
                  todo?.completed ? "line-through" : null
                }`}
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{todo?.title}</td>
                <td className="line-clamp-1 p-2">{todo?.description}</td>
                <td>
                  <p
                    className={`${
                      todo?.completed
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    } rounded-full p-0.5 px-3 w-fit`}
                  >
                    {todo?.completed ? "Completed" : "InCompleted"}
                  </p>
                </td>
                <td className="p-2">Zohair</td>
                <div className="flex justify-start items-center p-2">
                  <PencilLine
                    size={15}
                    color={iconsColor.UPDATE_ICON_COLOR}
                    className="mx-1 cursor-pointer"
                    onClick={() => handleModalOpen(0, true)}
                  />
                  <Trash
                    size={15}
                    color={iconsColor.DELETE_ICON_COLOR}
                    className="mx-1 cursor-pointer"
                    onClick={() => {
                      handleModalOpen(1, true);
                      setDeleteTodoIndex(index);
                    }}
                  />
                  {todo?.completed ? (
                    <CircleCheck
                      size={15}
                      color={iconsColor.ACTIVE_ICON_COLOR}
                      className="mx-1 cursor-pointer"
                      onClick={() => handleUncheckCompletedTodo(index)}
                    />
                  ) : (
                    <Circle
                      size={15}
                      color={iconsColor.ACTIVE_ICON_COLOR}
                      className="mx-1 cursor-pointer"
                      onClick={() => handleCompleteTodo(index)}
                    />
                  )}
                </div>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableHeaderData.length} className="text-center p-5">
                <p className="text-red-600 text-xl font-semibold">
                  No todo list is available!
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isModalOpen[1] && (
        <DeleteTodoModal
          visible={isModalOpen[1]}
          onClose={() => handleModalOpen(1, false)}
        >
          <DeleteTodoModalData
            onClose={() => handleModalOpen(1, false)}
            submit={() => handleRemoveTodo(deleteTodoIndex)}
          />
        </DeleteTodoModal>
      )}
      <UpdateTodoModal
        visible={isModalOpen[0]}
        onClose={() => handleModalOpen(0, false)}
      >
        <UpdateTodoModalData />
      </UpdateTodoModal>
    </div>
  );
};

export default TodosTable;
