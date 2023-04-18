import {v4 as uuidv4} from 'uuid';
import  {writable} from 'svelte/store';
import  {browser} from '$app/environment';

const data = browser? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [
    // default list of todos for demo
    {
        id: uuidv4(), text: 'create git repo' , complete: true  
    },
    {
        id: uuidv4(), text: 'build out skeleton' , complete: false  
    },
    {
        id: uuidv4(), text: 'confirm spec' , complete: false 
    },
    {
        id: uuidv4(), text: 'confirm design' , complete: true  
    }
    
] : [];

export const todos =   writable(data);

 todos.subscribe((value) => {
    if (browser){
        localStorage.setItem('st-todo-list', JSON.stringify(value));
    }
 });


 export const addTodo  = () =>{
    todos.update((currentTodos) => {
        return [...currentTodos, {   id: uuidv4(), text: '' , complete: false
        } 
    ];
    });
 };
 export const deleteTodo  = (id) =>{
    todos.update((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id);
        
    });
 }

 
export const toggleComplete = (id) => {
    todos.update((currentTodos) => {
        return currentTodos.map((todo) => {
            if(todo.id === id){
                return {...todo, complete: !todo.complete};
            }
            return todo;
        })
    })
}
export const editTodo = (id, text) => {
    todos.update((currentTodos) => {
        return currentTodos.map((todo) => {
            if(todo.id === id){
                return {...todo, text};
            }
            return todo;
        })
    })
}