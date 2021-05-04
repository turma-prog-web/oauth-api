const { generateOAuthStrategy, getStrategyOptions } = require('./generate-strategy');
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const ALLOWED_STRATEGIES = {
    GOOGLE: {
        Strategy: GoogleStrategy,
        options: { scope: ["profile", "email"] }
    }, 
    GITHUB: {
        Strategy: GitHubStrategy, 
        options: {}
    }
};

module.exports = { 
    ALLOWED_STRATEGIES, 
    generateOAuthStrategy,
    getStrategyOptions
};