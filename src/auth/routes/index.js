const initializeOAuthRoutes = (app, passportOptions, controller) => {
    const { passport, strategiesOptions } = passportOptions;
    strategiesOptions.forEach(startRoutes(app, passport, controller))
    return { app, passport };
}

const startRoutes = (app, passport, controller) => (
    ({strategyName, options = {}}) => {
        const strategy = strategyName.toLowerCase()
        app.get(`/auth/${strategy}`, passport.authenticate(strategy, { ...options }));
        app.get(`/auth/${strategy}/callback`,
            passport.authenticate(strategy, { failureRedirect: `/` }),
            controller.authenticate
        )
    }
)

module.exports = { initializeOAuthRoutes };