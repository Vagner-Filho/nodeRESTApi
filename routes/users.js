import express, { request } from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    // {
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     age: 22
    // },
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 29
    // }
];

// all routes in here are starting with /users
router.get('/', (request, response) => {
    response.send(users);
});

router.post('/', (request, response) => {
    const newUser = request.body;

    users.push({ ...newUser, id: uuidv4() });

    response.send(`User ${newUser.firstName} added to the database!`);
});

router.get('/:id', (request, response) => {
    // Assim como no nuxt, : torna o path dinâmico, aceitando qualquer valor inserido após users/
    const { id } = request.params;

    const foundUser = users.find((user) => user.id === id);

    response.send(foundUser)
});

router.delete('/:id', (request, response) => {
    const { id } = request.params;

    // filter() mantém na estrutura que o invocou toda instância que retornar true na condição
    // neste caso o método é utilizado para manter em users os usuários cujo id são diferentes do id da request
    users = users.filter((user) => user.id !== id);

    response.send(`User with id: ${id} deleted from the database.`)
});

router.patch('/:id', (request, response) => {
    const { id } = request.params;
    const { firstName, lastName, age } = request.body;

    const userToUpdate = users.find((user) => user.id === id);

    if (firstName) userToUpdate.firstName = firstName
    if (lastName) userToUpdate.lastName = lastName
    if (age) userToUpdate.age = age

    response.send(`User with id: ${id} has been updated!`)
})

export default router;