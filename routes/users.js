import express, { request } from "express";

import { createUser, getUsers, getUserById, deleteUser, updateUserData } from "../controlles/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

// Assim como no nuxt, : torna o path dinâmico, aceitando qualquer valor inserido após users/
router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUserData);

export default router;