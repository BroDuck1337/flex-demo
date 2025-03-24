var SCORE = "TODOS"
export default { 
    get:()=>{
        return JSON.parse(localStorage.getItem(SCORE)) || []
    },
    set:(todos)=>{
        return localStorage.setItem(SCORE, JSON.stringify(todos))
    }
}
