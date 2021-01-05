"use strict";

const mech = require("sasl-x-oauth2");

module.exports = function saslXoauth2(sasl) {
  sasl.use(mech);
};
