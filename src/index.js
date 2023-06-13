const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
// const Task = require('./models/tasks')
// const User = require('./models/users')
require('./db/mongoose')

const express= require('express')
const app = express()
const port = process.env.PORT||3000

// app.use((req,res,next)=>{
//    res.status(503).send('Site us currently down. Check back soon')
// })
const multer = require('multer')
const upload = multer({
    dest:'images'
})

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const jwt = require('jsonwebtoken')
// const token = jwt.sign({_id:'youri'},'ManchesterUnited',{expiresIn: '7 days'})
// const data = jwt.verify(token,'ManchesterUnited')
// console.log(data)
// const main = async()=>{
//     const task = await Task.findById('647dde2ae5631e2a95d3f898')
//     await task.populate('owner')
//     console.log(task.owner)
// }
// main()
// const main = async()=>{
//     const user = await User.findById('647ddcee800ac7cae3df7a6d')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }
// main()



app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})