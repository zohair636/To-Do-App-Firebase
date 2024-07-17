import { useContext } from "react";
import { TableHeaderFunction } from "../../Helper/TableHelper/TodoTableHelper";
import { HomeGetterContext } from "../../Context/HomeContext";
import { Circle, PencilLine, Trash } from "lucide-react";
import { iconsColor } from "../../Global/colors";

const TodosTable = () => {
  const tableHeaderData = TableHeaderFunction();
  const { createNewTodo } = useContext(HomeGetterContext);

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
            createNewTodo.map((todo) => (
              <tr key={crypto.randomUUID()} className="border-t">
                <td className="p-2">{todo?.title}</td>
                <td className="p-2">{todo?.description}</td>
                <td className="p-2">InComplete</td>
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
                  />
                  <Circle
                    size={15}
                    color={iconsColor.ACTIVE_ICON_COLOR}
                    className="mx-1 cursor-pointer"
                  />
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
    </div>
  );
};

export default TodosTable;
