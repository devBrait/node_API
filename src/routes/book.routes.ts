import { Router } from "express";

import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";

const bookRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Operações relacionadas aos livros
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retorna todos os livros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "614741b8-02b0-4ed0-8276-cd10b914b822"
 *                   title:
 *                     type: string
 *                     example: "Diário de um Banana"
 *                   author:
 *                     type: string
 *                     example: "Jeff Kinney"
 */

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retorna um livro pelo ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *           example: "614741b8-02b0-4ed0-8276-cd10b914b822"
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *       404:
 *         description: Livro não encontrado
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Diário de um Banana"
 *               author:
 *                 type: string
 *                 example: "Jeff Kinney"
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Requisição inválida
 */

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Atualiza um livro pelo ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *           example: "614741b8-02b0-4ed0-8276-cd10b914b822"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Diário de um Banana"
 *               author:
 *                 type: string
 *                 example: "Jeff Kinney"
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Livro não encontrado
 */

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Deleta um livro pelo ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *           example: "614741b8-02b0-4ed0-8276-cd10b914b822"
 *     responses:
 *       204:
 *         description: Livro deletado com sucesso
 *       404:
 *         description: Livro não encontrado
 */

bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
