const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-typescript-webpack-basic:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "my-app" });
  });

  it("creates configuration files", () => {
    assert.file(["webpack.config.js"]);
    assert.file(["tsconfig.json"]);
  });
  it("creates dist folder", () => {
    assert.file(["dist/"]);
  });
  it("creates src folder", () => {
    assert.file(["src/"]);
  });

  
   
});
