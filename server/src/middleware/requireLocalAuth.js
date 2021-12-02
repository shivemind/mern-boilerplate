import passport from 'passport';

const requireLocalAuth = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(422).send(info);
    }
    req.user = user;
    req.logIn(user, { session: false }, (err) => {
      if(err){
        res.send(err)
      }
      next()
    })
  })(req, res, next);
};

export default requireLocalAuth;
