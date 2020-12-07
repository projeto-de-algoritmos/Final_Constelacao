const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');
app = express();    
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());


app.post('/test',(req,res)=>{
     var data = req.body.data;
     var result = data
     res.json(result);
})

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
