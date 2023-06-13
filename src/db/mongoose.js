const mongoose = require('mongoose')
const validator = require('validator')
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true})



// const me = new User({
//     name:'     Bruno Fernandes',
//     age:28,
//     email:'BRUNO@GMAIL.COM   ',
//     password:'pass123'
// })

// me.save()
// .then(me=>console.log(me))
// .catch(err=>console.log(err))


// const me = new Task({
//     description:'Win a Champions League    ',
    
// })
// me.save()
// .then(me=>console.log(me))
// .catch(err=>console.log(err))

// const mongoose = require('mongoose')
// const connectionURL = 'mongodb://127.0.0.1:27017'
// mongoose.connect(`${connectionURL}/task-manager-api`,{useNewUrlParser:true,useUnifiedTopology:true})
// const User = mongoose.model('User',{
//     name:{
//        type:String
//     },
//     age:{
//      type:Number
//     }
// })
// const me = new User({
//     name:'Christian Eriksen',
//     age:30
// })
// me.save().then(result=>console.log(result)).catch(err=>console.log(err))