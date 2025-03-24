import html from './todo.js'
import body from './body.js'
import fodler from './fodler.js'
import headers from './header.js'
import { connect } from './core.js'
const conector = connect()
 function App({todos}){
    return html`
    ${headers()} 
    ${body()}
    ${fodler()}`
 
 }

 export default conector(App)