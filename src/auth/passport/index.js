function getPassport(passport) {
    passport.serializeUser((user, done)=> done(null, user.id));
    passport.deserializeUser((id, done) => done(null, id));
    const oAuthCallback = (accessToken, refreshToken, profile, done) => done(null, profile)
    return { passport, oAuthCallback }
}

module.exports = { getPassport }