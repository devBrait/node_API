import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de livros',
            version: '1.0.0',
            description: 'API de livros básica usando nodeJS (express)',
        },
        servers: [
            {
                url: 'http://localhost:8080/v1',
                description: 'API de teste',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
});

export { swaggerSpec, swaggerUi };
