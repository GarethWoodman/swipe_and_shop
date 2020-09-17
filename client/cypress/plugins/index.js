/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const mongoose = require("mongoose");
const User = require("../../../models/user");
const Item = require("../../../models/item");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on) => {
  // `on` is used to hook into various events Cypress emits
  on("task", {
    addItem(item) {
      return new Promise((resolve) => {
        mongoose.connect("mongodb://localhost/swipe_and_shop_test", (err) => {
          newItem = new Item(item);
          newItem.save((err) => {
            resolve("done");
          });
        });
      });
    },
    addUser(user) {
      return new Promise((resolve) => {
        mongoose.connect("mongodb://localhost/swipe_and_shop_test", (err) => {
          newUser = new User(user);
          newUser.save((err) => {
            resolve("done");
          });
        });
      });
    },
    dropItems() {
      return new Promise((resolve) => {
        mongoose.connect("mongodb://localhost/swipe_and_shop_test", (err) => {
          mongoose.connection.collections.items.drop((err) => {
            resolve("done");
          });
        });
      });
    },
    dropUsers() {
      return new Promise((resolve) => {
        mongoose.connect("mongodb://localhost/swipe_and_shop_test", (err) => {
          mongoose.connection.collections.users.drop((err) => {
            resolve("done");
          });
        });
      });
    },
  });
  // `config` is the resolved Cypress config
};
