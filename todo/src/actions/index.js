export const POPULATE_TODO = 'POPULATE_TODO';

export const populateTodo = newTodo => {
    console.log(newTodo);

    return {
        type:POPULATE_TODO,
        payload:newTodo
    };
}

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const toggleTodo = id => {
    return{
        type:TOGGLE_TODO,
        payload:id
    }
}

