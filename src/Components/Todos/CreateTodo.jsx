import { useState } from "react";
import CreateTodoButton from "../Buttons/Submit/CreateTodoButton";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Global/firebaseConfig";

const CreateTodo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([{completed: false}]);

  const handleTodoList = () => {
    setTodoList((prev) => [...prev, { todo: userInput }]);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await setDoc(doc(db, "todos", crypto.randomUUID()), {
        todoList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveTodo = (index) => {
    setTodoList((prev) => {
      const removeTodo = [...prev];
      removeTodo.splice(index, 1);
      return removeTodo;
    });
  };

  const handleCompleteTodo = (index) => {
    setTodoList((prev) => {
      const completededTodo = [...prev];
      completededTodo[index].completed = true;
      return completededTodo;
    })
  }

  return (
    <div className="">
      <CreateTodoButton />
      <input
        value={userInput}
        onChange={(e) => handleUserInput(e)}
        placeholder="Enter your todo name"
      />
      <button onClick={handleTodoList}>Add To Do</button>
      {todoList.map((list, index) => {
        return (
          <div key={index} className="flex justify-start items-center">
            <p className={`${list.completed === true ? 'line-through' : null}`}>{index + 1}. {list.todo}</p>
            <button className="px-3" onClick={() => handleRemoveTodo(index)}>Remove</button>
            <button className="px-3" onClick={() => handleCompleteTodo(index)}>Complete</button>
          </div>
        );
      })}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default CreateTodo;
