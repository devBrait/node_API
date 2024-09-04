import { Router } from "express";

import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser  
} from '../controllers/userController';

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas aos usuários
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "eb00cb29-acfc-44cd-aff4-0e3132dbe019"
 *                   name:
 *                     type: string
 *                     example: "João Pereira"
 *                   email:
 *                     type: string
 *                     example: "joao.pereira@example.com"
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *           example: "eb00cb29-acfc-44cd-aff4-0e3132dbe019"
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João Pereira"
 *               email:
 *                 type: string
 *                 example: "joao.pereira@example.com"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida
 */

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "eb00cb29-acfc-44cd-aff4-0e3132dbe019"
 *               name:
 *                 type: string
 *                 example: "João Pereira"
 *               email:
 *                 type: string
 *                 example: "joao.pereira@example.com"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "eb00cb29-acfc-44cd-aff4-0e3132dbe019"
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/', updateUser);
userRouter.delete('/', deleteUser);

export default userRouter;
