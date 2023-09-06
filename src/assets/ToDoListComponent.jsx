import { useState } from "react";
import "./ToDoListComponent.css";

export function ToDoListComponent() {
  //add item button
  const [addItem, setAddItem] = useState(false);
  const toggleSetAddItem = () => {
    setAddItem(!addItem);
  };

  //form data
  const [toDoItem, setToDoItem] = useState({
    todo: "",
  });
  const [toDoList, setToDoList] = useState([]);
  const acceptToDoItem = (e) => {
    const value = e.target.value;
    setToDoItem({
      ...toDoItem,
      todo: value,
    });
  };
  const handleToDoSubmit = (e) => {
    e.preventDefault();
    console.log("New to do item:", toDoItem);
    const newToDoItem = { text: toDoItem.todo, completed: false };
    setToDoList([...toDoList, newToDoItem]);
    setToDoItem({
      ...toDoItem,
      todo: "",
    });
  };

  //delete button
  const deleteItem = (index) => {
    const updatedToDoList = [
      ...toDoList.slice(0, index),
      ...toDoList.slice(index + 1),
    ];
    setToDoList(updatedToDoList);
  };

  return (
    <>
      <div className="todo-component-container">
        <button onClick={toggleSetAddItem} className="add-item-button">
          Add Item
        </button>
        {addItem && (
          <form onSubmit={handleToDoSubmit} className="item-input">
            <input
              placeholder="New ToDo Item"
              type="text"
              name="text"
              id="text"
              onChange={acceptToDoItem}
              value={toDoItem.todo}
            />
          </form>
        )}

        {toDoList.length === 0 ? (
          <h3>Nothing to do!</h3>
        ) : (
          <>
            <h4 className="list-header">To Do Items:</h4>
            <ul>
              {toDoList.map((item, index) => (
                <li key={index}>
                  {item.text}
                  <button
                    onClick={() => deleteItem(index)}
                    className="delete-item-button"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
