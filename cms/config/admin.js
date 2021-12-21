module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '102bed100fb0c794197b74a77a2a9d64'),
  },
});
