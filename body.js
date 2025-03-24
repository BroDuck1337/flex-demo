import html from './todo.js'
import {connect} from './core.js'
import todoItem from './todoitem.js'
 function body({todos, filler, fillers}){
    return html`<section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" onclick = "dispatch('toggleAll', this.checked)"
    ${todos.every(fillers.completed) && 'checked'}  >
    <label for="toggle-all" >Mark all as complete</label >
    <ul class="todo-list">
       
        ${todos.filter(fillers[filler]).map((todo,index) =>{return todoItem({todo},index)})}
        
    </ul>
</section>`
}
console.log(connect()(body))
export default connect()(body)