// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal // 
const p_ = require('./s-routes/pages')


// [EXPRESS] //
const app = express()


// [INIT] Const //
const port = 5000

app.use(cors())

app.use('/pages', p_)

app.get('/pages/about', (req, res) => {
    res.send('About!')
})


app.get('/pages/dashboard', (req, res) => {
    res.send('Page!')
})


app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})