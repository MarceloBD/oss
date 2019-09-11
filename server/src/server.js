import 'babel-polyfill';

import cors from 'cors';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';

import Auth from './modules/auth/Auth';
import schema from './modules/schema';
import { isProduction } from './utils/environment';
import photon from './utils/photon';

const graphQLServer = express();

const corsConfig = {
  origin: [process.env.PORTAL_URL, process.env.AUTH_URL, process.env.CONTENT_URL, process.env.TRIAL_CRUD_URL],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true,
};

graphQLServer.get('/hc', async (req, res) => res.status(200).send('OK'));

graphQLServer.use(cors(corsConfig));

const auth = Auth();
graphQLServer.use(auth.initialize());
graphQLServer.all('/graphql*', auth.authenticate());
graphQLServer.use(
  '/graphql',
  graphQLHTTP(request => ({
    schema,
    pretty: true,
    graphiql: !isProduction(),
    context: {
      photon,
      login: request.login,
      user: request.user,
      staffUser: request.staffUser,
    },
  })),
);
graphQLServer.get('/playground', expressPlayground({ endpoint: '/graphql' }));

graphQLServer.listen(process.env.GRAPHQL_PORT, () =>
  console.log(`GraphQL Server is now running on ${process.env.GRAPHQL_BASE_URL}`),
);
