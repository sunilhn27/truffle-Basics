// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract JackieToken {
    string name = "Jackie Token";
    string symbol = "JT";
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    event Transfer(address _from, address _to, uint256 _value);

    function tokenSupply(uint256 _tokens) public {
        totalSupply = _tokens;
        balanceOf[msg.sender] = _tokens;
    }

    function transfer(address _to, uint256 _value) public {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
    }

    function getName() public pure returns (string memory) {
        return "Sunil";
    }
}
