<script>
	import { addTodo } from '../../store/TodoStore';
	import IconPlus from '../icons/IconPlus.svelte';
</script>

<section class="App-UI__section-row">

	<h3 class="App-UI__copy__sub-title">tasks to do...</h3>
	<button type="button" on:click={addTodo} class="App-UI__button--primary">add task <IconPlus /></button>
</section>
