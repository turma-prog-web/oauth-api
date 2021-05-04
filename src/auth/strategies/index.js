const { generateOAuthStrategy, getStrategyOptions } = require('./generate-strategy');
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const ALLOWED_STRATEGIES = {
    GOOGLE: GoogleStrategy, 
    GITHUB: GitHubStrategy
};

module.exports = { 
    ALLOWED_STRATEGIES, 
    generateOAuthStrategy,
    getStrategyOptions
};