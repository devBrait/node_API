import { Router } from 'express';

import userRouter from './routes/user.routes';
import bookRouter from './routes/book.routes';

const mainRouter = Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/books', bookRouter);

export default mainRouter;