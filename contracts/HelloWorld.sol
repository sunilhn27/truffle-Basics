// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract HelloWorld {

    string name="TEST";
    uint number;


    function getName() public view returns (string memory) {
        return name;
    }

    function getNumber() public view returns (uint) {
        return number;
    }

    function setNumber(uint _number) public {
        number = _number;
    }
}
