const express = require("express")
const app = express()

const connection = require('./database')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

app.use(express.json({
    extended: false
})) 
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))