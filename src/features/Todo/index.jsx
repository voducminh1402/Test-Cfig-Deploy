import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

ToDoFeature.propTypes = {
    
};

function ToDoFeature(props) {

    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'New'
        },
        {
            id: 2,
            title: 'Code',
            status: 'Completed'
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'New'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('All');

    const handleTodoList = (todo, index) => {
        const newTodoList = [...todoList];

        console.log(todo, index);

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'New' ? 'Completed' : 'New'
        }

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('All');
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('Completed');
    }
    
    const handleShowNewClick = () => {
        setFilterStatus('New');
    }


    const renderTodoList = todoList.filter(todo => filterStatus === 'All' || filterStatus === todo.status);
    console.log(renderTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoList}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ToDoFeature;