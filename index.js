const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build'))
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "040-12345-326",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "123-54123-521",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "043213210",
        id: 4
    }
];

const generateId = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Routes
app.get('/api/persons', (req, res) =>{
    res.json(persons)
});

app.get('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id);
    const person = persons.find(p => p.id === id);

    if(person){
        res.json(person)
    }else{
        res.status(404).end();
    }
});

app.get('/info', (req, res) => {
    const count = persons.length;
    const date = new Date();

    res.send(`<p>Phonebook has info about ${count} people <p> ${date}`)
});

app.delete('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id);
    persons = persons.filter(p => p.id !== id);

    res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if(!body.number || !body.name){
        return res.status(400).json({
            error: 'request is missing something'
        })
    }

    if(persons.find(p => p.name === body.name)){
        return res.status(400).json({
            error: 'This name is already in the phonebook'
        })
    }


    const person = {
        name: body.name,
        number: body.number,
        id: generateId(1000000, 9999999)
    };

    persons = persons.concat(person);
    res.json(person)
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});







/*
* 3.1 - DONE
* 3.2 - DONE
* 3.3 - DONE
* 3.4 - DONE
* 3.5 - DONE
* 3.6 - DONE
* 3.7 - DONE
* 3.8 - DONE
* */