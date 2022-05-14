
import React from 'react'
import PropTypes from 'prop-types'
import { List } from '@mui/material'
import ToDoListItem from './ToDoListItem'

const ToDoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <List>
            {
                todos.map((todo, i) => (
                    <ToDoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </List>
    )
}

ToDoList.propTypes = {

    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default ToDoList;