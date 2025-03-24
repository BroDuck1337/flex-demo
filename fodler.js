import html from "./todo.js";
import {connect} from './core.js'
 function fodler({todos, fillers, filler}){

    return html`<footer class="footer">
    <span class="todo-count"><strong>${todos.filter(fillers.active).length}</strong> item left</span>
    <ul class="filters">
       ${Object.keys(fillers).map((type) => 
         `<li onclick= "dispatch('changeMethod' , '${type}')">
        <a class="${filler == type && 'selected'}" 
        href="#/">${type[0].toUpperCase() + type.slice(1)}</a>
            </li>`
    )}
        
    </ul>
    <button class="clear-completed" onclick= "dispatch('clearAll', 'xoá đi bro')">Clear completed</button>`
}
export default connect()(fodler)