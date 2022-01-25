module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1426a9091a5a2aaf3d770e60e58de0c'),
  },
});
