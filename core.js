import { CreatedStore } from "./todo.js";
import reducer from "./reducer.js";
const {atttach, connect, dispatch} = CreatedStore(reducer)
window.dispatch = dispatch
export{ connect, atttach}