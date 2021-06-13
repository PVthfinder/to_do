import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function AddTaskForm({onAddTask}) {
	
    const [inputValue, setInputValue] = useState('');
    const [isSending, setIsSending] = useState();

    const addTask = () => {
        if(!inputValue) {
            return;
        }
        
        const taskObj = {text: inputValue, completed: false};
        setIsSending(true);
        axios
            .post('http://localhost:3001/tasks', taskObj)
            .then(({data}) => {
                onAddTask(data);
                setInputValue('');
            })            
            .catch(() => {
                alert('Неудачная попытка добавления задачи!')
            })
            .finally(() => {
                setIsSending(false);
            });
    }

    return (
        <div className="task__form">
            <input 
                className="tasks__input" 
                type="text" value={inputValue} 
                placeholder="Add a task" 
                onChange={e => setInputValue(e.target.value)} 
            />
				<Button disabled={isSending} className="AddBtn" onClick={addTask}>
					{isSending ? 'Sending...' : <AddIcon />}
				</Button>
        </div>
    )
}

export default AddTaskForm;
