
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, TextField, Typography } from '@mui/material';
import { useForm } from '../hooks/useForm';

const ToDoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newToDo);
        reset();
    }

    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                Agregar Tarea
            </Typography>
            <Divider light />

            <form onSubmit={handleSubmit}>
                <div className='add-divider'>
                    <TextField
                        variant="outlined"
                        type='text'
                        name='description'
                        placeholder='Tarea'
                        autoComplete='off'
                        size='small'
                        fullWidth 
                        onChange={handleInputChange}
                        value={description}
                    />
                </div>

                <div className='add-divider'>
                    <Button
                        variant="outlined"
                        type='submit'
                        fullWidth 
                    >
                        Agregar
                    </Button>
                </div>



            </form>
        </>
    )
}

ToDoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}

export default ToDoAdd;