// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal // 
const p_ = require('./s-routes/pages')
const p_about = require('./s-routes/pages/about')



// [EXPRESS] //
const app = express()


// [INIT] Const //
const port = 5000

app.use(cors())

app.use('/pages', p_)
app.use('/pages/about', p_about)


app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})