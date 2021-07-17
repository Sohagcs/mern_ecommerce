const express = require("express");
const app = express();

const Pizza = require('./models/pizzaModel')

const db = require("./db");
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')

app.use('/api/pizzas/' , pizzasRoute)


app.get("/", (req, res)=>{
    res.send("Server working " + port); 
});

// app.get("/getpizzas", (req,res) => {

//     Pizza.find({} , (err , docs) => {
//         if(err) {
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })

// });

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port`);