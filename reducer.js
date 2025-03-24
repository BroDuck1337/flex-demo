import storage from"./storage.js"

var init =  {
    todos:storage.get(),
    filler: 'all',
    fillers:{
      all: todo => true,
      active: todo => !todo.complate,//false
      completed: todo => todo.complate//true
    },
    

}
    
        
   
 

var makeaction = {
   Add ({todos}, title) {
      if(title){
         todos.push({title, complate: false, editing: false})
         storage.set(todos)
      }
    },
   check({todos}, index)  {    
   var todo = todos[index]
   todo.complate = !todo.complate
  storage.set(todos)
   },
   destroy({todos}, index){
      todos.splice(index, 1)
      storage.set(todos)
   },
   toggleAll({todos}, value){

      todos.forEach(todo=> todo.complate= value)
      storage.set(todos)
   },
   changeMethod(stase, value){
      stase.filler = value
      storage.set(stase.todos)
   },
   clearAll(stase, value){
      var tododelete=  stase.todos.filter(stase.fillers.active)
        stase.todos = tododelete
     storage.set(stase.todos)
   },
   editing({todos}, index){
     todos[index].editing = true
        storage.set(todos)
   },
   endedit({todos}, value){
  todos[value.index].editing = false
  todos[value.index].title = value.title
  storage.set(todos)
      
   }


}



export default function reducer(stase = init , action,...grss){
 

 if(makeaction[action]){
    makeaction[action](stase, ...grss)

 }
   return stase
 


 
}