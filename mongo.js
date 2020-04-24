const mongoose = require('mongoose');

if (process.argv.length < 3){
    console.log('Password is required');
    process.exit(1);
}

const password = process.argv[2];

const url =
    `mongodb+srv://root:${password}@backend-project-frz1s.gcp.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: Number
});

const Person = mongoose.model('Person', personSchema);

const generateId = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

if (process.argv.length === 5){
    const name = process.argv[3];
    const number = process.argv[4];

    const person = new Person({
        name: name,
        number: number,
        id: generateId(100000, 999999),
    });

    person.save().then(response =>{
        console.log(`Added ${person.name} number ${person.number} to the db`);
        mongoose.connection.close();
    })
}else{
    console.log('List of people in the phonebook:');
    Person.find({}).then(result =>{
        result.forEach(person => {
            console.log(person)
        });
        mongoose.connection.close()
    })
}


