import { useState, useEffect } from "react";

function Task({ allTodos, handleDeleteTodo, setTodos }) {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  const [completed, setCompleted] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItems] = useState("");

  const handleCompleteTodo = (index) => {
    let now = new Date();
    let dd = now.getDay();
    let mm = now.getMonth() + 1;
    let yy = now.getFullYear();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedON = dd + "-" + mm + "-" + yy + " at " + h + ":" + m + ":" + s;
    let completedItem = {
      ...allTodos[index],
      completedON: completedON,
    };
    let updatedCompletedArr = [...completed];
    updatedCompletedArr.push(completedItem);
    setCompleted(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("Completed", JSON.stringify(updatedCompletedArr));
  };

  const handleDelete = (index) => {
    let reducedTodo = [...completed];
    reducedTodo.splice(index, 1);

    localStorage.setItem("Completed", JSON.stringify(reducedTodo));
    setCompleted(reducedTodo);
  };

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItems(item);
  };

  const handleUpdatedTitle = (value) => {
    setCurrentEditedItems((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleUpdatedDesc = (value) => {
    setCurrentEditedItems((prev) => {
      return { ...prev, desc: value };
    });
  };

  const handleUpdate = () => {
    if (!currentEditedItem.title.trim() || !currentEditedItem.desc.trim()) {
      alert("Please provide both a title and description!");
      return;
    }
    let newTodo = [...allTodos];
    newTodo[currentEdit] = currentEditedItem;
    setTodos(newTodo);
    localStorage.setItem("todolist", JSON.stringify(newTodo));

    setCurrentEdit("");
    setCurrentEditedItems("");
  };

  useEffect(() => {
    let completeds = JSON.parse(localStorage.getItem("Completed"));
    if (completeds) {
      setCompleted(completeds);
    }
  }, []);
  const edit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
    </svg>
  );

  const bin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Completed = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="green"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="flex flex-col justify-center items-center p-6  ">
      <div className="flex    p-2  ">
        <button
          type="button"
          className={`"flex  justify-center items-center p-2 border rounded-md bg-blue-500 mr-6 hover:bg-blue-700"  ${isCompletedScreen === false && "bg-blue-700 text-white "
            }`}
          onClick={() => setIsCompletedScreen(false)}
        >
          Tasks
        </button>

        <button
          type="button"
          className={` "flex  justify-center items-center p-2 border rounded-md bg-green-500 hover:bg-green-700" ${isCompletedScreen === true && "bg-green-700 text-white "
            }`}
          onClick={() => setIsCompletedScreen(true)}
        >
          Completed
        </button>
      </div>

      <div className=" flex  flex-col border bg-white shadow-md rounded-md w-full p-4 mt-4  md:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-gray-800 ">
          All To-Do Items
        </h2>

        {isCompletedScreen === false &&
          allTodos.map((todo, index) => {
            if (currentEdit === index) {
              return (
                <div className="p-2 flex flex-col " key={index}>
                  <input
                    type="text"
                    className="border font-bold p-2 "
                    placeholder="title for editing"
                    onChange={(e) => handleUpdatedTitle(e.target.value)}
                    value={currentEditedItem.title}
                  />

                  <textarea
                    type="text "
                    className="border p-2 "
                    placeholder="desc for editing"
                    onChange={(e) => handleUpdatedDesc(e.target.value)}
                    value={currentEditedItem.desc}
                  />

                  <div className="flex justify-center ">
                    <button
                      type="button"
                      className="border bg-green-500 rounded-md p-2 font-semibold"
                      onClick={handleUpdate}
                    >
                      update
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="p-2 border-b flex justify-between items-center"
                >
                  <div className="overflow-auto">
                    <h3 className="font-semibold ">{todo.title}</h3>
                    <p>{todo.desc}</p>
                  </div>

                  <div className="flex items-center space-x-3 ">
                    <button
                      className=""
                      title="edit"
                      onClick={() => handleEdit(index, todo)}
                    >
                      {edit}
                    </button>

                    <button
                      title="delete"
                      onClick={() => handleDeleteTodo(index)}
                      aria-label="Delete Task"
                    >
                      {bin}
                    </button>
                    <button
                      title="mark as complete"
                      className=""
                      onClick={() => handleCompleteTodo(index)}
                    >
                      {Completed}
                    </button>
                  </div>
                </div>
              );
            }
          })}

        {isCompletedScreen === true &&
          completed.map((item, index) => (
            <div
              key={index}
              className="p-2 border-b flex justify-between items-center"
            >
              <div className="overflow-auto">
                <h3 className="font-semibold ">{item.title}</h3>
                <p>{item.desc}</p>
                <p>Completed On {item.completedON}</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDelete(index)}
                  aria-label="Delete Task"
                >
                  {bin}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Task;
