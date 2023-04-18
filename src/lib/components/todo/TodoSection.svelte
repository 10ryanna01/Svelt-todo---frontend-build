<script>

    import TodoInput from './TodoInput.svelte';
    import {todos} from '../../store/TodoStore'

   
   </script>
    
   <section class="App-UI__section-content-column">
   
       {#each $todos as todo (todo.id)}
     <TodoInput {todo} />
       {/each}
   </section>