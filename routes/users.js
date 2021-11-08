import express from "express";

const router = express.Router();

router.get('/users', (request, response) => {
    response.send('Userrrrssss');
});

export default router;