import fastify from "fastify";
import homeRoute from './routes/homeRoute';
import fastifyMongodb from "@fastify/mongodb";
import dotenv from 'dotenv'
import fastifyCors from "@fastify/cors";
dotenv.config()
const {MONGODB_URI, API_URL} = process.env

// initialize fastify app
const server = fastify();

// fastify cors
server.register(fastifyCors, {
    origin: "*",
    methods: ["POST", "GET"]
  });


// Register fastify-mongodb plugin
server.register(fastifyMongodb, {
    forceClose: true, // close the mongodb connection when the app is closing
    url: MONGODB_URI,
});

// app routes
// home route
homeRoute(server)


// start server
const start = async () => {
    try {
        // Start Fastify server
        await server.listen({
            port: 3636,
        });

        // Log that the server is running
        console.log(`Server is running on ${API_URL}`);

        // Log that the app is connected to MongoDB Atlas
        if (server.mongo.client.startSession()) {
            console.log('Connected to Atlas MongoDB ');
        } else {
            console.error('Failed to connect to MongoDB Atlas');
        }
    } catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
};


start();