// import React, { PropTypes } from 'react';
import Task from './Task'
const Tasks = ({ tasks,onDelete ,onToggle }) => {
    return ( <>

     { tasks.map((task) => (
        <Task key={task.id} task={ task } onDelete={onDelete} onToggle={onToggle} />
        )) } 
            </>
    );
};

// Tasks.displayName = 'Tasks';

// Tasks.propTypes = {
//     className: PropTypes.string,
// };

export default Tasks;