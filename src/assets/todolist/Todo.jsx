import React from 'react'

function Todo({ task, onDelete }) {
  return (
    <li>
        {task}
        <button onClick={onDelete}>❌</button>

    </li>
  )
}

export default Todo;