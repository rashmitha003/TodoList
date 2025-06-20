import React, { useState } from 'react';

const TodoItem = ({ task, onToggle, onRemove, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (newTitle.trim() !== '' && newTitle !== task.title) {
      onEdit(task.id, { ...task, title: newTitle });
    }
    setEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div style={{ flexGrow: 1 }} className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={onToggle}
        />

        {editing ? (
          <input
            type="text"
            className="form-control"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onDoubleClick={() => setEditing(true)}
          >
            {task.title}
          </span>
        )}
      </div>

      <button className="btn btn-danger btn-sm ms-3" onClick={onRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
