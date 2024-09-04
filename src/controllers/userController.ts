import { Prisma, PrismaClient } from "@prisma/client";

const userClient = new PrismaClient().user

// GetAll
export const getAllUsers = async (req, res) => {
    try{
        const allUsers = await userClient.findMany({
            include: {
                books: true
            }
        })
        res.status(200).json({data: allUsers})

    }catch(ex){
        console.log(`Erro ao pegar os usuários: ${ex.messsage}`)
    }
}

// GetById
export const getUserById = async (req, res) => {
    try{
        const userId = req.params.id
        const user = await userClient.findUnique({
            where: {
                id: userId
            },
            include: {
                books: true
            }
        })
        res.status(200).json({data: user})

    }catch(ex){
        console.log(`Erro ao pegar o usuário: ${ex.messsage}`)
    }
}

// Create
export const createUser = async (req, res) => {
    try{
        const userData = req.body
        const user = await userClient.create({
          data: userData,
        })
        res.status(200).json({data: user})

    }catch(ex){
        console.log(`Erro ao criar o usuário: ${ex.messsage}`)
    }
}

// Update
export const updateUser = async (req, res) => {
    try{
        const userId = req.params.id
        const userData = req.body
        const user = await userClient.update({
            where: {
              id: userId  
            },
          data: userData,
        })
        res.status(200).json({data: user})

    }catch(ex){
        console.log(`Erro ao atualizar o usuário: ${ex.messsage}`)
    }
}


// Delete
export const deleteUser = async (req, res) => {
    try{
        const userId = req.params.id
        const user = await userClient.delete({where: {
            id: userId
        }
    })
    res.status(200).json({data: {} })
    }catch(ex){
        console.log(`Erro ao deletar o usuário: ${ex.messsage}`)
    }
}