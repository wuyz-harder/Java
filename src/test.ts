type User = {
    name:string
}

let a:unknown = {
    name:"hh"
}

const hah = (user:User) => {
    console.log(user.name);
}

function isUser(user: any): user is User {
    return typeof user === 'object' && 
           typeof user.name === 'string'
}

if(isUser(a)){
    hah(a)
}
