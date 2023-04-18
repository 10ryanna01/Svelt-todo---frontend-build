<script>
	import { deleteTodo, toggleComplete, editTodo } from '../../store/TodoStore';
	import IconDelete from '../icons/IconDelete.svelte';

	export let todo;

	$: completeClass = todo.complete ? 'App-UI__utility__complete' : 'App-UI__utility__incomplete';
</script>

 
        <section class="App-UI__input__row">

            <aside class="App-UI__input__row--split">
            <label for={`${todo.id}-checkbox`} class="App-UI__utility__sr">complete todo </label>
            <input
                id={`${todo.id}-checkbox`}
                type="checkbox"
                checked={todo.complete}
                on:change={() => toggleComplete(todo.id)}
                class="App-UI__input-checkbox"
            />
                  
	   
		<label for={`${todo.id}-text`} type="text" class="App-UI__utility__sr">edit todo</label>
            <div class="App-UI__input-wrapper">
		<input
			id={`${todo.id}-text`}
			type="text"
			placeholder="enter a todo..."
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}  class="App-UI__input-text"/>

            <span class="focus-border"><i></i></span>
        </div>
    </aside>
        
        <aside class="App-UI__input__row--split"> 
		<span class="{completeClass}">
			{todo.complete ? 'complete' : 'in progress'}
		</span>
   

		<button type="button" on:click={() => deleteTodo(todo.id)} class="App-UI__button--danger">
			<span class="App-UI__utility__sr">delete todo</span>
            <IconDelete />
		</button>
  
    </aside>
    </section>
