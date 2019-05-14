import {POPULATE_TODO , TOGGLE_TODO, DELETE_TODO} from '../actions'

const initialState = {
    todos:[
        {value:'Clean Kitchen',completed:false,id:Date.now()}
    ],

};

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case POPULATE_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {value:action.payload,completed:false,id:Date.now()}
                ]
            };
            case TOGGLE_TODO:
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if(todo.id === action.payload){
                            return {
                                ...todo,
                                completed:!todo.completed
                            }
                        }
                        return todo;
                    })
                };
            case DELETE_TODO:
                return {
                    ...state,
                    todos:state.todos.filter(todo => {
                        if(todo.id !== action.payload){
                            return {
                                ...todo
                            }
                        }
                    })
                };    
        default:
            return state;    
    }
};