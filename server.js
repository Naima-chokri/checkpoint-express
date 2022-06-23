const express=require('express')
var path = require('path');
const timeAuth=require("./middlewares/time")
const app=express();

app.set('view engine', 'ejs');
// app.set('views', 'views2'); 
app.use(timeAuth)

app.use(express.static(path.join(__dirname, 'public')))
   
app.get('/', function (req, res, next) {
    res.render('home.ejs');
})

app.get("/services.ejs", (req, res) => {
    res.render('services.ejs')
})

app.get("/contact.ejs", (req, res) => {
    res.render('contact.ejs')
})
app.get("/about.ejs", (req, res) => {
    res.render('about.ejs')
})

const port =process.env.PORT||5000
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running at port ${port}`)
})
