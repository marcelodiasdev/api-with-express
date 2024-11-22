const express = require('express')
const bookRoute = require("./routes/book")

const app = express()
app.use(express.json())

const port = 8000

app.use('/books', bookRoute)



app.listen(port, () => {
  console.log(`running ${port}...`);
  
})