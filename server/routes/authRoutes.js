const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
  passport.authenticate('google'),
  (req,res) => {
    console.log("~~~~~~~~REQ.USER:"+JSON.stringify(Object.keys(req)))
    res.redirect('/surveys');
  }
);

  app.get('/auth/google',passport.authenticate('google', { scope:['profile','email'] } ) );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    //res.send(req.session);  //constructed from id
    //Note different use of 'express-session' lesson 44
  });


  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    //res.send(req.user);
  });

};
