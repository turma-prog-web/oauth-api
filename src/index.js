const express = require('express');
const passportLib = require('passport');
const { buildOAuthPassportApplication } = require('./auth/index');


const app = express();
const passport = buildOAuthPassportApplication(passportLib);

app.use(passport.initialize());