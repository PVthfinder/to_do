import React from 'react';

import Task from './Task';
import AddTaskForm from './AddTaskForm';

import './Tasks.scss';

const Tasks = ({tasks, onAddTask, onDeleteTask, onEditTask, onCompleteTask}) => {
	
	return(
		<div className="tasks">

			<AddTaskForm
				onAddTask={onAddTask}
			/>

			<div className="tasks__items">
				{tasks && !tasks.length && <h2>Задачи отсутствуют</h2>}

				{tasks && tasks.map(task => (
					<Task 
						key={task.id}
						{...task} 
						onDelete={onDeleteTask}
						onEdit={onEditTask}
						onComplete={onCompleteTask}
					/>
				))}

			</div> 
		</div>
	);
}


export default Tasks;