/* eslint-env node */

"use strict";

const { execSync } = require("child_process"),
  BUILD_DIR = "./demo";

// Create library
execSync("cat lib/data/*.js lib/src/*.js lib/init.js > " + BUILD_DIR +
  "/animal-avatars.js");