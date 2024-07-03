module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'aula-virtual-strapi-bd.vvkmn.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'aula-virtual-strapi-bd'),
        username: env('DATABASE_USERNAME', 'ccitecstrapi'),
        password: env('DATABASE_PASSWORD', '4iKowyCEowcT2sUC'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});

