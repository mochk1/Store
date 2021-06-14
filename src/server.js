const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 4000
const cors = require('cors');

/* MIDDLEWARE */

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use(routes);



/* SERVE STATIC BUILD FILES */

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

})
}


app.listen(port, () => console.log(`listening on port ${port}`))



