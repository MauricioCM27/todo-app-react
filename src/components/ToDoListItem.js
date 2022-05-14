
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, ListItem, Typography } from '@mui/material'

const ToDoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <ListItem
            key={todo.id}
            alignItems='flex-start'
        >
            <Grid container spacing={2}>

                <Grid item xs={5}>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={`${todo.done && 'complete'} pointer-Typography`}
                        onClick={() => handleToggle(todo.id)}
                    >
                        {index + 1}. {todo.desc}
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(todo.id)}
                    >
                        Borrar
                    </Button>
                </Grid>


            </Grid>

        </ListItem>
    )
}

ToDoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default ToDoListItem;