"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get('/', async (request, reply) => {
    return { hello: 'world' };
});
const start = async () => {
    try {
        await server.listen({
            port: 3000,
            // Other options can be added here
        });
        console.log('Server is running on http://localhost:3000');
    }
    catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
};
start();
