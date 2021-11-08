import express, { request } from "express";
import { v4 as uuidv4 } from 'uuid';

import { createUser, deleteUser, getUserById } from "../controlles/users.js";
import { getUsers } from "../controlles/users.js";
import { getUserById } from "../controlles/users.js";
import { deleteUser } from "../controlles/users.js";
import { updateUserData } from "../controlles/users.js";

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
router.get('/', getUsers);

router.post('/', createUser);

// Assim como no nuxt, : torna o path dinâmico, aceitando qualquer valor inserido após users/
router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUserData);

export default router;