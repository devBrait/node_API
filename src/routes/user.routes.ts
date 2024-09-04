import { Router } from "express";

import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser  
} from '../controllers/userController';

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', createUser)
userRouter.put('/', updateUser)
userRouter.delete('/', deleteUser)

export default userRouter