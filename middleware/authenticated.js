export default async function(context){
    if(context.route.name=='index' || context.route.name=='rooms' || context.route.name=='pools' || context.route.name=='events' || context.route.name=='gallery' || context.route.name=='contacts' || context.route.name=='status' || context.route.name=='book'){
        return
    }
    if(localStorage.getItem('account_type')==undefined){
        if(context.route.name=='admin'){
         
            return
       }
       window.location.href='/admin'
    }
    else if(context.route.name=='admin'){
        window.location.href='/admin/book'   
    }
  
}