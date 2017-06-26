// requires, already ran npm installs for express and body-parser
let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(5678, function() {
    console.log('server is up on 5678');
}); // end listen

app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('view/index.html'));
}); // end get

app.post('/num', function(req, res) {
    console.log(req.body);
    let numToReturn ={
        answer: 0
    };
    let x = Number(req.body.x);
    let y = Number(req.body.y);
    console.log(req.body.x);
    console.log(x);
    switch (req.body.type) {
        case "add":
            numToReturn.answer = x + y;
            console.log('add case');
            console.log(numToReturn.answer);
            break;
        case "subtract":
            numToReturn.answer = x - y;
            break;
        case "multiply":
            numToReturn.answer = x * y;
            break;
        case "divide":
            numToReturn.answer = x / y;
            break;
    }
    res.send(numToReturn);
}); // end post
