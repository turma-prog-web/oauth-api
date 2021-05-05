const { generateOAuthStrategy, getStrategyOptions } = require('./generate-strategy');
const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const ALLOWED_STRATEGIES = {
    GOOGLE: {
        Strategy: GoogleStrategy,
        options: { scope: ["profile", "email"], session: false },
        isEnabled: false
    }, 
    GITHUB: {
        Strategy: GitHubStrategy, 
        options: { scope: ["user:email"], session: false },
        isEnabled: true
    }
};

module.exports = { 
    ALLOWED_STRATEGIES, 
    generateOAuthStrategy,
    getStrategyOptions
};