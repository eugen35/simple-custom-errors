'use strict';

// См. http://usejsdoc.org/about-configuring-jsdoc.html
module.exports = {
  source: {
    include: ["./src", "./constants", "./connectors", "./__tests__/unit"],
    excludePattern: ""
  },
  opts: {
    recurse: true,
    destination: "./__doc__/auto_generated/jsdoc",
    readme: "./README.md",
    template: "./node_modules/docdash",
    encoding: "utf8",
    // @ todo /5/ Разобраться, что это за тьютики и как их подключать
    // "tutorials": "path/to/tutorials", // same as -u path/to/tutorials
  },
};