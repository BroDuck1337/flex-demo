import html from "./todo.js"
export default function headers(){
    return html`<section class="todoapp">
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?"
         autofocus onkeyup = "event.keyCode == 13 &&
          dispatch('Add', this.value)">
    </header>`
}
