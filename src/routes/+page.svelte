<script>
    import AddTodoSection from "../lib/components/todo/AddTodoSection.svelte";
	import TodoInput from "../lib/components/todo/TodoInput.svelte";
	import TodoSection from "../lib/components/todo/TodoSection.svelte";
</script>


<div class="App-UI">

<main class="App-UI__container-body">
    <h1 class="App-UI__copy__title">dashboard</h1>

    <div class="App-UI__spacer--mt-1"/>
    <AddTodoSection />
    <TodoSection />
 
</main>


</div>