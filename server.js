// [REQUIRE] //
const express = require('express')


// [EXPRESS] //
const app = express()


// [INIT] Const //
const port = 5000


// [HOME ROUTE] //
app.get('/pages/', (req, res) => {
  res.send({
    Lit: true
  })
})


app.get('/pages/about', (req, res) => {
    res.send('About!')
})


app.get('/pages/dashboard', (req, res) => {
    res.send('Page!')
})


app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})