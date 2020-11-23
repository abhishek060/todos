import React from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {Typography, Paper, AppBar, Toolbar, Grid} from '@material-ui/core';

function TodoApp(){
    const initialTodos = [{id: 1, task: "Dance Class", completed: false}];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);
    
    return(
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar position="static" style={{height: "64px", backgroundColor: "#f50057"}}>
                <Toolbar style={{display: "flex", justifyContent: "center", margin: "auto"}}>
                    <Typography color="inherit">Todo App with React Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;