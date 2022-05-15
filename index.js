const port=8080
const express=require('express')
const app=express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

app.set('views', './views')
app.set('view engine', 'ejs')




app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, ()=> console.log(`Server is running on port ${port}`))
