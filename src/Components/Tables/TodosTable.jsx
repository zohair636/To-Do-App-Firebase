import { useState } from "react";
import { TableHeaderFunction } from "../../Helper/TableHelper/TodoTableHelper";

const TodosTable = () => {
  const tableHeaderData = TableHeaderFunction();
  const [isTodo, setIsTodo] = useState(false);

  return (
    <div className="border-2 border-neutral-200 rounded-2xl">
      <table className="w-full">
        <thead>
          <tr className="flex justify-between items-center mx-5">
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
          <hr className="" />
        </thead>
        <tbody className="flex justify-center items-center m-5">
          {!isTodo && (
            <p className="text-red-600 text-xl font-semibold">
              No todo list is available!
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
