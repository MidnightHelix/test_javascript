const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
var cors = require('cors');
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors());

//app.use(express.static(path.join(__dirname, '/public')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/generateTriangle', (req, res) => {
    let inputNumber = parseInt(req.body.inputNumber);

    if(isNaN(inputNumber) || inputNumber <= 0 ){
        res.status(400).send("Input number must be a positive number");
        return;
    }

    let triangle = '';
    for(let i = 1; i <= inputNumber; i++){
        triangle += '0'.repeat(inputNumber - i) + i.toString().repeat(i) + '\n';
    }

    res.send(triangle);
});

app.post('/generateOddNumbers', (req, res) => {
    let inputNumber = parseInt(req.body.inputNumber);

    if(isNaN(inputNumber) || inputNumber <= 0 ){
        res.status(400).send("Input number must be a positive number");
        return;
    }

    let oddNumbers = '';
    for(let i = 1; i <= inputNumber; i++){
        if(i % 2 !== 0){
            oddNumbers += i + ' ';
        }
    }

    res.send(oddNumbers);
});

app.post('/generatePrimeNumbers', (req, res) => {
    let inputNumber = parseInt(req.body.inputNumber);

    if(isNaN(inputNumber) || inputNumber <= 0 ){
        res.status(400).send("Input number must be a positive number");
        return;
    }

    function isPrime(num){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
            return num !== 1;
        }
    }

    let primeNumbers = '';
    for(let i = 2; i <= inputNumber; i++){
        if(isPrime(i)){
            primeNumbers += i + ' ';
        }
    }

    res.send(primeNumbers);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
