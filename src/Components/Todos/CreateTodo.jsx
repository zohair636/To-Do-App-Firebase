import { useState } from "react";
import CreateTodoButton from "../Buttons/Submit/CreateTodoButton";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Global/firebaseConfig";

const CreateTodo = () => {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const date = new Date();

  const handleTodoList = () => {
    setTodoList((prev) => [...prev, { todo: userInput }]);
    setUserInput('')
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

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTodoList(e);
    }
  }

  return (
    <div>
      <CreateTodoButton />
      <input
        value={userInput}
        onChange={(e) => handleUserInput(e)}
        onKeyDown={(e) => handleEnterKey(e)}
        placeholder="Enter your todo name"
      />
      <button onClick={handleTodoList}>Add To Do</button>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      {todoList.map((list, index) => {
        return (
          <div key={index} className="flex justify-start items-center">
            <p className={`${list.completed === true ? 'line-through' : null}`}>{index + 1}. {list.todo}</p>
            <p>{date.toLocaleDateString()}</p>
            <button className="px-3" onClick={() => handleRemoveTodo(index)}>Remove</button>
            <button className="px-3" onClick={() => handleCompleteTodo(index)}>Complete</button>
          </div>
        );
      })}
      {/* <button onClick={handleSubmit}>submit</button> */}
    </div>
  );
};

export default CreateTodo;
