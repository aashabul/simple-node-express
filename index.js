const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello aunik vai kemn asen haha');
});

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('post working', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

const users = [
    { id: 0, name: 'Aunik', email: 'aashabulimam@gmail.com', phone: '01521332062' },
    { id: 1, name: 'Shakil', email: 'shakil@gmail.com', phone: '01521332063' },
    { id: 2, name: 'Pallab', email: 'pallab@gmail.com', phone: '01521332064' },
    { id: 3, name: 'Romanch', email: 'romanch@gmail.com', phone: '01521332065' },
    { id: 4, name: 'Moumita', email: 'moumita@gmail.com', phone: '01521332066' },
    { id: 5, name: 'Nowshin', email: 'nowshin@gmail.com', phone: '01521332067' },
    { id: 6, name: 'Pranto', email: 'pranto@gmail.com', phone: '01521332069' },
]

app.listen(port, () => {
    console.log('listening to port', port);
});