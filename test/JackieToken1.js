const JackieToken = artifacts.require("JackieToken");
const assert = require("chai").assert;
//const chaiAsPromised = require("chai-as-promised");
require('chai').use(require('chai-as-promised')).should()


contract('JackieToken1', (accounts) => {

    let jackieTokenInstance;

    console.log(accounts[0]);

    beforeEach(async () => {
        jackieTokenInstance = await JackieToken.deployed();
        console.log("********************Before***************");
    })

    afterEach(async () => {
        console.log("********************After***********************");

    })

    describe("deploy", async () => {
        it("This is to test vaild Jackie Token ", async () => {
            const name = await jackieTokenInstance.getName();
            assert.equal(name, "Sunil", "Something is wrong");
        })

        it("This is to test vaild Jackie Token 2", async () => {
            const name = await jackieTokenInstance.getName();
            assert.equal(name, "Sunil", "Something is wrong");
        })
    })

});

