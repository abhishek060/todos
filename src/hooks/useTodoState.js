import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/dist/v4';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };
    const removeTodo = todoId =>{
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? {...todo, task: newTask} : todo
        );
        setTodos(updatedTodos);
    };
    return {
        todos,
        addTodo: addTodo,
        removeTodo: removeTodo,
        toggleTodo: toggleTodo,
        editTodo: editTodo
    }
}