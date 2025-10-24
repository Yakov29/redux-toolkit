import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, filterTask } from "../../redux/actions";

import "./Head.css";

const Head = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);
  console.log(tasks)
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const title = inputValue.trim();
    if (!title) return;

    dispatch(addTask({ id: nanoid(), title, completed: false }));
    setInputValue("");
  };

  const handleRemove = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const value = e.target.text.value;
    dispatch(filterTask(value));
  };

  return (
    <header className="head">
      <div className="head__add-task">
        <input
          className="head__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Назва таску"
        />
        <button className="head__button" onClick={handleAdd}>
          Додати
        </button>
      </div>

      <form className="head__filter-form" onSubmit={handleSend}>
        <h3 className="head__filter-title">Фiльтер</h3>
        <input
          className="head__filter-input"
          type="text"
          placeholder="text"
          name="text"
        />
        <button className="head__filter-button" type="submit">
          Фiльтрувати
        </button>
      </form>

      <div className="head__tasks">
        {tasks.map((task) => (
          <div className="head__task" key={task.id}>
            <span className="head__task-title">{task.title}</span>
            <button
              className="head__task-remove"
              onClick={() => handleRemove(task.id)}
            >
              ✖️
            </button>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Head;