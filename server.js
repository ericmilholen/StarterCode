// [REQUIRE] //
const express = require('express')


// [EXPRESS] //
const app = express()


// [INIT] Const //
const port = 5000


// [HOME ROUTE] //
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send('About!')
})


app.get('/page', (req, res) => {
    res.send('Page!')
})


app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})