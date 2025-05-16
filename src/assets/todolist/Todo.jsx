import React from 'react'

function Todo({ task, onToggle ,onDelete }) {
  return (
    <li
          style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0.5rem 0',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'white',
          }}
    >
        {task}
        <input type="checkbox" checked = {task.completed} onChange={onToggle} style={{ marginRight: '1rem' }}/>
        <span>{task.text}</span>
        <button onClick={onDelete}>❌</button>

    </li>
  )
}

export default Todo;