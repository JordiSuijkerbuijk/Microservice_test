module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40bb31ba-3307-4315-90cd-ec1f1fccb2bc'),
  },
});
