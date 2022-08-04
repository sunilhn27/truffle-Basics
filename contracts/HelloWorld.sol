// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract HelloWorld {
    string name = "TEST";
    uint256 number;

    function getName() public view returns (string memory) {
        return name;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}
