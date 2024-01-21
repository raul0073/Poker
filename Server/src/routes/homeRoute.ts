import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';


// home route main page
const homeRoute = async (server: FastifyInstance) => {
  server.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const db = server.mongo.db; // Access the fastify-mongodb instance

      // replace collection name accordingly (table name)
      const collection = db?.collection('users');

      // get all result for now
      const result = await collection?.find({}).toArray();


      return { data: result };
    } catch (error) {
      console.error('Error querying MongoDB:', error);
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });
};

export default homeRoute;