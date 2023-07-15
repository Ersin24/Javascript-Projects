const robot = require("../index.js");
const { describe, it, test } = require("mocha");
const sinon = require("sinon");

describe("try", () => {
  it("do it", () => {
    test("greet should return hello codey", () => {
      sinon.spy(robot, "greet"); //Code initialize sinon
      robot.greet("codey"); //Call method
      expect(robot.greet.called).to.be.true;
      expect(robot.greet.calledWith("codey")).to.be.true;
      expect(robot.greet.returned("Hello codey")).to.be.true;
      robot.greet.restore();
    });
  });
});

//ASIL DOKÜMANA BAK!!!!!