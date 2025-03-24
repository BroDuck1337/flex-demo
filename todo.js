
export default function html ([frist,...rest],...value){
    
   return value.reduce((head, body)=> {
        return head.concat(body, rest.shift())
    }, [frist]).filter(v => v && v!== true || v == 0 )
                .join('')
}

 export function CreatedStore(reducer){
   var stase = reducer()
   
   var roots = new Map(
   )
   function render(){
    for(const [root , companent] of roots){
        const output = companent() 
        root.innerHTML = output
    }
   }

   return {
    atttach(root, companent){
        roots.set(root, companent)
        render()
    },
    connect(selector = stast => stast){
        return companent =>(prop,...agrs)=> companent(Object.assign({}, selector(stase)))
            }
        
    ,
    dispatch(action,...args){
        stase = reducer(stase, action,...args)
        render()
    }
   }
   
}