import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('user index'));
userRouter.get('/profile', (req, res) => res.send('user profile'));

export default userRouter;