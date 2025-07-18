import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo() // ye to access lene ke liye 

    const add = (e) => {
      e.preventDefault()

      if (!todo) return // agr koi todo h hi na to

      addTodo({ todo, completed: false}) // as id to addtodo se mil jayega bas message or completed dena haib 
      setTodo("") // now empty the todo 
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 ">
              Add
              {/* // button ka type submit h to kuch add nahi krna  */}
          </button>
      </form>
  );
}

export default TodoForm;