// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SocialNetwork{

   string public name;

  constructor() {
  	name ="Sunil You Rock";
  }

  function getName() public view returns(string memory) {
   return name;
 }

}
