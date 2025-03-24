import html from "./todo.js";

import { connect } from "./core.js";

export default function todoItem({todo}, index){
    return html`
    <li class="${todo.complate && 'completed'} ${todo.editing && 'editing'}" >
    <div class="view">
        <input class="toggle" type="checkbox"  onclick = "dispatch('check', ${index})" ${todo.complate && 'checked'}>
        <label  ondblclick = "dispatch('editing', ${index})" >${todo.title}</label>
        <button class="destroy" onclick= "dispatch('destroy', ${index})"></button>
    </div>
    <input class="edit" onkeyup ="event.keyCode == 13 && dispatch('endedit' ,{title: this.value, 
        index: ${index}})"
        
</li>`
}



