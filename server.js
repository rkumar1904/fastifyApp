const fastify = require('fastify')({
  logger: true,
  ignoreTrailingSlash: true,
});

const PORT = process.env.PORT || 3000;

fastify.get('/', (req, res) => {
  res.send({ hello: 'root' });
});

const routes = require('./routes');
// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start();
