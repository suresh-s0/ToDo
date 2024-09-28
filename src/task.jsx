import { useState } from 'react'




function Task({ allTodos, handleDeleteTodo }) {

  const bin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="red" className="size-6">
      <path fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
    </svg>
  );

  const Completed = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="green" className="size-6">
      <path fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="flex flex-col justify-center items-center p-6  ">

      <div className="flex    p-2  ">
        <button type="button" className="flex  justify-center items-center p-2 border rounded-md bg-blue-300 mr-6 hover:bg-blue-700">Tasks</button>

        <button type="button" className="flex  justify-center items-center p-2 border rounded-md bg-green-300 hover:bg-green-700">Completed</button>

      </div>


      <div className=" flex  flex-col border bg-white shadow-md rounded-md w-full p-4 mt-4  md:w-1/3">

        <h2 className="text-xl font-bold mb-4 text-gray-800 ">All To-Do Items</h2>

        <ul className="w-full">
          {allTodos.map((todo, index) => (
            <li key={index} className="p-2 border-b flex justify-between items-center">

              <div className='overflow-auto'>
                <h3 className="font-semibold ">{todo.title}</h3>
                <p>{todo.desc}</p>
              </div>

              <div className="flex items-center space-x-3">
                <button onClick={() => handleDeleteTodo(index)} aria-label="Delete Task" >
                  {bin}
                </button>
                <button className="">{Completed}</button>
              </div>
            </li>
          ))}
        </ul>
       


      </div>
    </div>
  );
}
export default Task;