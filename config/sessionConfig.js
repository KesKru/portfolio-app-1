module.exports = (app, session) => {
  app.use(
    session({
      name: 'session-id',
      secret: '123-456-789',
      saveUninitialized: false,
      resave: false
    })
  );
};
