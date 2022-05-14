import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from '../reducers/toDoReducer';
import ToDoAdd from './ToDoAdd';
import ToDoList from './ToDoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const ToDoApp = () => {
    const [todos, dispatch] = useReducer(toDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'DELETE',
            payload: todoId
        }

        dispatch(action)

    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'UPDATE',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD',
            payload: newTodo
        });
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom component="div">Tareas pendientes: {todos.length} </Typography>
            <Divider light  />

            <Grid container spacing={2}>
                <Grid item xs={7}>

                    <ToDoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </Grid>

                <Grid item xs={3}>

                    <ToDoAdd
                        handleAddTodo={handleAddTodo}
                    />

                </Grid>

            </Grid>


        </div>
    )
}

export default ToDoApp;