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

const TodosTable = () => {
  const tableHeaderData = TableHeaderFunction();
  const { createNewTodo } = useContext(HomeGetterContext);
  const { setCreateNewTodo } = useContext(HomeSetterContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
      return removeTodo;
    });
  };

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
          {createNewTodo.length > 0 ? (
            createNewTodo.map((todo, index) => (
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
                  />
                  <Trash
                    size={15}
                    color={iconsColor.DELETE_ICON_COLOR}
                    className="mx-1 cursor-pointer"
                    onClick={() => setIsDeleteModalOpen(true)}
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
      <DeleteTodoModal
        visible={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <DeleteTodoModalData onClose={() => setIsDeleteModalOpen(false)} />
      </DeleteTodoModal>
    </div>
  );
};

export default TodosTable;
