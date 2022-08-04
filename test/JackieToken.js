const JackieToken = artifacts.require("JackieToken");
const assert = require("chai").assert;


contract('JackieToken', (accounts) => {

    console.log(accounts);

    it("This is to test vaild Jackie Token ", async () => {
        let jackieTokenInstance = await JackieToken.deployed();
        const name = await jackieTokenInstance.getName();
        assert.equal(name, "Sunil", "Something is wrong");
    })

    it("This is to test Invaild Jackie Token ", async () => {
        let jackieTokenInstance = await JackieToken.deployed();
        const name = await jackieTokenInstance.getName();
        assert.equal(name, "Sunil", "Something is wrong");
    })

});

