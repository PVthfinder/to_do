import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

function Task({id, text, completed, onDelete, onEdit, onComplete}) {
    return (
        <div key={id} className="tasks__items-row">
            <Checkbox
                checked={completed}
                onChange={e => onComplete(id, e.target.checked)}
            />
            <p>{text}</p>

            <div className="tasks__items-row-actions">
                <CreateOutlined
                    onClick={() => onEdit({id, text})}
                />
                <DeleteForeverOutlinedIcon
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    )
}

export default Task;