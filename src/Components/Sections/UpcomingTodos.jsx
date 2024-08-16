import { useContext, useEffect, useState } from "react";
import { HomeGetterContext } from "../../Context/HomeContext";

const UpcomingTodos = () => {
  const { createNewTodo } = useContext(HomeGetterContext);
  const [upcomingTodos, setUpcomingTodos] = useState([]);
  const maxTodoLimit = 3;

  useEffect(() => {
    const limitTodos = createNewTodo.slice(0, maxTodoLimit);
    setUpcomingTodos(limitTodos);
  }, [createNewTodo]);

  return (
    <div className="border border-neutral-200 h-32 mr-2 rounded-2xl">
      {upcomingTodos.map((todo) => {
        return (
          <div key={crypto.randomUUID()} className="bg-neutral-200 p-1 px-3 m-2 mx-5 rounded-md">
            <p className="text-neutral-600 text-sm">{todo?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingTodos;
