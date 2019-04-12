let express = require('express');
let bodyParser = require('body-parser');
var ineed = require('ineed');
let cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.get('/', (req, res) => {    
    ineed.collect.images.from('https://www.carfax.com/Used-Cars-in-New-York-NY_c8636',
    function (err, response, result) {
        let imagesArray = [];
        if(err){ console.log(err)}
        imagesArray = result.images
        console.log(result.hyperlinks);
        res.send({data: imagesArray})
    });
    //
    //res.send(result)

    //let someData = 'SPOKEN';

   // res.send({data: someData})
})

app.listen(3005, ()=> console.log('The server is listening on port 3005'))