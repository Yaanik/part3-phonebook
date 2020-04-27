require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Person = require('./models/person');

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build'));
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));




//-----------------------Routes-----------------------
//Full persons list
app.get('/api/persons', (req, res) =>{
    Person.find({}).then(persons => {
        res.json(persons.map(person => person.toJSON()))
    })
});


//Person by id
app.get('/api/persons/:id', (req, res, next) =>{
    Person.findById(req.params.id)
        .then(person =>{
            if(person){
                res.json(person.toJSON())

            }else{
                res.status(404).end()
            }
        })
        .catch(err => next(err))
});

//Inforamtion about the database
app.get('/info', (req, res) => {
    const date = new Date();
    Person.estimatedDocumentCount({ type: 'jungle' }, function (err, count) {
        res.send(`<p>Phonebook has info about ${count} people <p> ${date}`)
    });
});


//Delete request
app.delete('/api/persons/:id', (req, res, next) =>{
    Person.findByIdAndRemove(req.params.id)
        .then(result =>{
            res.status(204).end()
        })
        .catch(err => next(err))
});


//POST new person
app.post('/api/persons', (req, res, next) => {
    const body = req.body;

    // if(body.number === undefined|| body.name === undefined){
    //     return res.status(400).json({
    //         error: 'request is missing number/name'
    //     })
    // }

    // if(persons.find(p => p.name === body.name)){
    //     return res.status(400).json({
    //         error: 'This name is already in the phonebook'
    //     })
    // }


    const person = new Person({
        name: body.name,
        number: body.number,
    });

    person
        .save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormatted => {res.json(savedAndFormatted)})
        .catch(err => next(err))
});

//Update person
app.put('/api/persons/:id', (req, res, next) =>{
    const body = req.body;

    const person = {
        name: body.name,
        number: body.number
    };

    console.log(body);


    Person.findByIdAndUpdate(req.params.id, person, {new: true})
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON())
        })
        .catch(err => next(err))
});

//Error handler middleware
const errorHandler = (err, req, res, next) =>{
    console.log(err.message);

    if(err.name === 'CastError'){
        return res.status(400).send({error: 'Incorrect id format'})
    } else if (err.name === 'ValidationError'){
        return res.status(400).json({error: err.message})
    }

    next(err)
};
app.use(errorHandler);



const PORT = process.env.PORT || 3001;
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
* 3.9 - DONE
* 3.10 - DONE
* 3.11 - DONE
* 3.12 - DONE
* 3.13 - DONE
* 3.14 - DONE
* 3.15 - DONE
* 3.16 - DONE
* 3.17 - DONE
* 3.18 - DONE
* 3.19 - DONE
* 3.20 - DONE
* 3.21 - DONE
* */